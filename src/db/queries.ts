"use server";
// import "server-only";

import { db } from "@/db";
import { guestbook } from "@/db/schema";
import { desc } from "drizzle-orm";
import { cache } from "react";

export const getGuestbookEntries = cache(async () => {
	if (!process.env.DATABASE_URL) {
		return [];
	}

	try {
		const result = await db
			.select()
			.from(guestbook)
			.orderBy(desc(guestbook.created_at))
			.limit(100);
		return result;
	} catch (error) {
		console.error("Error from getGuestbookEntries: ", error);
		return [];
	}
});
