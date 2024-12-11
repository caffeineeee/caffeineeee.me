"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import * as React from "react";

// export const SignOut = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
// 	<div ref={ref} className={cn("place-self-end", className)} {...props}>
// 		<Button
// 			onClick={() => {
// 				signOut();
// 				toast.success("Successfully signed out!");
// 			}}
// 			className="h-8 w-fit border my-4 px-2 py-1 rounded border-neutral-500 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
// 			variant="outline"
// 		>
// 			<Icons.logout className="h-4 w-4" aria-hidden="true" />
// 			<span className="text-neutral-700 dark:text-neutral-300 ml-2">
// 				Sign out
// 			</span>
// 		</Button>
// 	</div>
// ));

export async function SignIn() {
	return (
		<div className="flex flex-col gap-2 p-8 items-center">
			<Button
				className="inline-flex w-48 items-center rounded border bg-gradient-to-r from-[#d62d20] to-[#ffa700] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-muted-foreground border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
				onClick={() => signIn("google")}
				variant="outline"
			>
				<Icons.google className="h-4 w-4" aria-hidden="true" />
				<p className="ml-3">Sign in with Google</p>
			</Button>
			<Button
				className="inline-flex w-48 items-center rounded border p-1 px-3 py-2 text-sm font-medium leading-4 text-white hover:text-neutral-800 border-neutral-200 dark:border-neutral-700 bg-neutral-800 hover:bg-neutral-300"
				onClick={() => signIn("github")}
				variant="outline"
			>
				<Icons.gitHub className="h-4 w-4" aria-hidden="true" />
				<span className="ml-3">Sign in with GitHub</span>
			</Button>
			<Button
				className="inline-flex w-48 items-center rounded border bg-[#5468ff] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-[#5468ff]"
				onClick={() => signIn("discord")}
				variant="outline"
			>
				<Icons.discord className="h-4 w-4" aria-hidden="true" />
				<p className="ml-3">Sign in with Discord</p>
			</Button>
		</div>
	);
}
