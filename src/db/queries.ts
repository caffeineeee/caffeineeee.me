"use server";
import "@/lib/server-only";

import { db } from "@/db";
import { guestbook } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getGuestbookEntries() {
	if (!process.env.DATABASE_URL) {
		return [];
	}
	const result = db
		.select()
		.from(guestbook)
		.orderBy(desc(guestbook.created_at))
		.limit(100);

	return result;
}
