import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		POSTGRES_URL: z.string().min(1),
		POSTGRES_PRISMA_URL: z.string().min(1),
		POSTGRES_URL_NON_POOLING: z.string().min(1),
		POSTGRES_USER: z.string().min(1),
		POSTGRES_HOST: z.string().min(1),
		POSTGRES_PASSWORD: z.string().min(1),
		POSTGRES_DATABASE: z.string().min(1),
		NEXTAUTH_URL: z.string().url(),
		NEXTAUTH_SECRET: z.string().min(1),
		NODE_ENV: z.enum(["development", "test", "production"]),
		GITHUB_ID: z.string().min(1),
		GITHUB_SECRET: z.string().min(1),
		// TWITTER_CLIENT_ID: z.string().min(1),
		// TWITTER_CLIENT_SECRET: z.string().min(1),
		DISCORD_CLIENT_ID: z.string().min(1),
		DISCORD_CLIENT_SECRET: z.string().min(1),
		// GOOGLE_CLIENT_ID: z.string().min(1),
		// GOOGLE_CLIENT_SECRET: z.string().min(1),
		GOOGLE_APP_PASSWORD: z.string().min(1),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		NEXT_PUBLIC_APP_URL: z.string().url(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	// For Next.js >= 13.4.4, you only need to destructure client variables:
	experimental__runtimeEnv: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		// NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		// NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		// NODE_ENV: process.env.NODE_ENV,
		// GITHUB_ID: process.env.GITHUB_ID,
		// GITHUB_SECRET: process.env.GITHUB_SECRET,
		// TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
		// TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
		// DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
		// DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
		// GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		// GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
	 * This is especially useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
