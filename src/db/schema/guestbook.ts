import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const guestbook = sqliteTable("guestbook", {
	id: integer("id").notNull().primaryKey(),
	email: text("email").notNull(),
	body: text("body").notNull(),
	created_by: text("created_by").notNull(),
	created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});
