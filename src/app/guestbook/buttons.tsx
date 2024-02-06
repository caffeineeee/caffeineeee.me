"use client";

import { signIn, signOut } from "next-auth/react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function SignIn() {
	return (
		<div className="flex flex-col gap-2 p-8">
			<Button
				className="inline-flex w-48 items-center rounded border bg-gradient-to-r from-[#d62d20] to-[#ffa700] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
				onClick={() => signIn("google")}
				variant="outline"
			>
				<Icons.google className="h-4 w-4" aria-hidden="true" />
				<div className="ml-3">Sign in with Google</div>
			</Button>

			<Button
				className="inline-flex w-48 items-center rounded border p-1 px-3 py-2 text-sm font-medium leading-4 text-white hover:text-neutral-800 border-neutral-200 dark:border-neutral-700 bg-neutral-800 hover:bg-neutral-300"
				onClick={() => signIn("github")}
				variant="outline"
			>
				<Icons.gitHub className="h-4 w-4" aria-hidden="true" />
				<div className="ml-3">Sign in with GitHub</div>
			</Button>

			<Button
				className="inline-flex w-48 items-center rounded border bg-[#5468ff] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-[#5468ff]"
				onClick={() => signIn("discord")}
				variant="outline"
			>
				<Icons.discord className="h-4 w-4" aria-hidden="true" />
				<div className="ml-3">Sign in with Discord</div>
			</Button>
		</div>
	);
}

export function SignOut() {
	return (
		<>
			<Button
				onClick={() => signOut()}
				className="h-8 w-full border border-neutral-500 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
			>
				<div className="text-neutral-700 dark:text-neutral-300">Sign out</div>
				<Icons.logout className="ml-2 h-4 w-4" aria-hidden="true" />
			</Button>
		</>
	);
}
