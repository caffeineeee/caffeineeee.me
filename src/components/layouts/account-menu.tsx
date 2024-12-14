"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenuSeparator,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";

export function AccountMenu({ session }: { session: Session }) {
	if (!session || !session.user) {
		return null;
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Icons.userCircle2 className="h-5 w-5" aria-hidden="true" />
					<span className="sr-only">User Account</span>
				</Button>
			</DropdownMenuTrigger>
			{session.user && (
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel className="text-sm">
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
			)}
		</DropdownMenu>
	);
}
