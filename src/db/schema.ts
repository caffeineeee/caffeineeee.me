import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const guestbook = sqliteTable("guestbook", {
	id: text("id", { length: 128 }).primaryKey().notNull(),
	email: text("email").notNull(),
	body: text("body").notNull(),
	created_by: text("created_by").notNull(),
	created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export type Guestbook = typeof guestbook.$inferSelect;
export type NewGuestbook = typeof guestbook.$inferInsert;
