import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/db/schema/*",
	driver: "turso",
	dbCredentials: {
		url: env.DATABASE_URL,
		authToken: env.DATABASE_AUTH_TOKEN,
	},
	out: "./src/db/drizzle",
	verbose: true,
	strict: true,
} satisfies Config;
