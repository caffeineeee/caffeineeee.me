"use server";

import { env } from "@/env.mjs";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getGuestbookEntries() {
	if (!env.POSTGRES_URL) {
		return [];
	}

	noStore();
	const entries = await sql`
    SELECT id, body, created_by
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
	return entries.rows;
}
