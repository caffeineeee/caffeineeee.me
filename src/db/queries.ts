"use server";
import { env } from "@/env.mjs";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/db";
import { guestbook } from "@/db/schema/guestbook";
import { desc } from "drizzle-orm";

export async function getGuestbookEntries() {
	if (!env.DATABASE_URL) {
		return [];
	}
	noStore();
	const entries = db
		.select({
			id: guestbook.id,
			body: guestbook.body,
			created_by: guestbook.created_by,
		})
		.from(guestbook)
		.orderBy(desc(guestbook.created_at))
		.limit(100);
	return entries;
}
