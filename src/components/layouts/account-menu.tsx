"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import dynamic from "next/dynamic";

const DropdownMenu = dynamic(() =>
	import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenu),
);
const DropdownMenuContent = dynamic(() =>
	import("@/components/ui/dropdown-menu").then(
		(mod) => mod.DropdownMenuContent,
	),
);
const DropdownMenuItem = dynamic(() =>
	import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuItem),
);
const DropdownMenuLabel = dynamic(() =>
	import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuLabel),
);
const DropdownMenuSeparator = dynamic(() =>
	import("@/components/ui/dropdown-menu").then(
		(mod) => mod.DropdownMenuSeparator,
	),
);
const DropdownMenuTrigger = dynamic(() =>
	import("@/components/ui/dropdown-menu").then(
		(mod) => mod.DropdownMenuTrigger,
	),
);

export function AccountMenu({ session }: { session: Session }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Icons.userCircle2 className="h-5 w-5" aria-hidden="true" />
					<span className="sr-only">User Account</span>
				</Button>
			</DropdownMenuTrigger>
			{session?.user ? (
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel className="text-base">
						Hello, <span>{session?.user?.name}</span>!👋
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="focus:bg-inherit">
						<Button
							onClick={() => signOut()}
							className="inline-flex w-48 h-8 my-4 px-2 py-1 rounded bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
							variant="outline"
						>
							<Icons.logout className="h-4 w-4" aria-hidden="true" />
							<span className="text-neutral-700 dark:text-neutral-300 ml-2">
								Sign out
							</span>
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>You are not signed in.</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="focus:bg-inherit">
						<Button
							className="inline-flex w-48 items-center rounded border bg-gradient-to-r from-[#d62d20] to-[#ffa700] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
							onClick={() => signIn("google")}
							variant="outline"
						>
							<Icons.google className="h-4 w-4" aria-hidden="true" />
							<p className="ml-3">Sign in with Google</p>
						</Button>
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:bg-inherit">
						<Button
							className="inline-flex w-48 items-center rounded border p-1 px-3 py-2 text-sm font-medium leading-4 text-white hover:text-neutral-800 border-neutral-200 dark:border-neutral-700 bg-neutral-800 hover:bg-neutral-300"
							onClick={() => signIn("github")}
							variant="outline"
						>
							<Icons.gitHub className="h-4 w-4" aria-hidden="true" />
							<span className="ml-3">Sign in with GitHub</span>
						</Button>
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:bg-inherit">
						<Button
							className="inline-flex w-48 items-center rounded border bg-[#5468ff] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-[#5468ff]"
							onClick={() => signIn("discord")}
							variant="outline"
						>
							<Icons.discord className="h-4 w-4" aria-hidden="true" />
							<p className="ml-3">Sign in with Discord</p>
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
}
