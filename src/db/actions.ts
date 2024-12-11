"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { createId } from "@paralleldrive/cuid2";
import { guestbook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { createTransport, type Transporter } from "nodemailer";
import { auth } from "@/server/auth";
import type { Session } from "next-auth";

export async function insertGuestbookEntry(formData: FormData) {
	const session = (await auth()) as Session;
	const user = session?.user;
	if (!session || !user) {
		throw new Error("Unauthorized");
	}
	const email = user.email as string;
	const name = user.name as string;
	const created_by = user.name as string;
	const image = user.image as string;

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

		sendEmail(email, name, body, image);

		return insertedEntry;
	} catch (error) {
		console.error("Error from insertGuestbookEntry: ", error);
		return null;
	}
}

export async function sendEmail(
	email: string,
	name: string,
	image: string,
	body: string,
) {
	/*
	 * send email containing the insertedEntry
	 */
	const transporter: Transporter = createTransport({
		service: "gmail",
		version: "1.0.0",
		auth: {
			user: "cevinsam11@gmail.com",
			pass: process.env.GOOGLE_APP_PASSWORD,
		},
	});

	const mailOptions = {
		from: "cevinsam11@gmail.com",
		to: "cevin.samuel@yahoo.com",
		subject: "New Guestbook Entry",
		html: `<p>Email: '${email}'</p><p>Name: '${name}'</p><p>Profile image URL: '${image}'</p><p>Message: '${body}'</p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			throw new Error(error.message);
		}
		console.log("Email sent", info.response);
	});
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
