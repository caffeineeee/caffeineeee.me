"use server";
import "@/lib/server-only";

import { getServerSession, type Session } from "next-auth";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { db } from "@/db";
import { createId } from "@paralleldrive/cuid2";
import { guestbook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

async function getSession(): Promise<Session> {
	const session = (await getServerSession(authOptions)) as Session;
	if (!session || !session.user) {
		throw new Error("Unauthorized");
	}
	return session;
}

export async function insertGuestbookEntry(formData: FormData) {
	const session = await getSession();
	const email = session.user?.email as string;
	const created_by = session.user?.name as string;

	if (!session.user) {
		throw new Error("Unauthorized");
	}

	const urlId = createId();
	const entry = formData.get("entry")?.toString() ?? "";
	const body = entry.slice(0, 500);

	try {
		const insertedEntry = await db.insert(guestbook).values({
			id: urlId,
			email: email,
			body: body,
			created_by: created_by,
			created_at: sql`CURRENT_TIMESTAMP`,
		});
		revalidatePath("/guestbook");

		return insertedEntry;
	} catch (error) {
		console.error("Error from insertGuestbookEntry: ", error);
		return null;
	}
}

export async function deleteOwnGuestbookEntries(id: string) {
	try {
		const deletedEntry = await db.delete(guestbook).where(eq(guestbook.id, id));
		revalidatePath("/guestbook");

		return deletedEntry;
	} catch (error) {
		console.error("Error from deleteOwnGuestbookEntries: ", error);
		return null;
	}
}
