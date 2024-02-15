"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { insertGuestbookEntry, deleteOwnGuestbookEntries } from "@/db/actions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { ErrorBoundary } from "react-error-boundary";
import { SignOut } from "@/app/guestbook/buttons";
import { type Session } from "next-auth";
import { cn } from "@/lib/utils";
import { type Guestbook } from "@/db/schema";
import { toast } from "sonner";

export function Form({ session }: { session: Session }) {
	const formRef = useRef<HTMLFormElement>(null);
	const { pending } = useFormStatus();

	return (
		<>
			<div className="flex max-w-full flex-col">
				<span
					className={cn(
						"flex flex-col sm:flex-row place-self-end items-center space-x-4",
						session?.user ? "" : "invisible",
					)}
				>
					<span className="relative flex flex-col sm:flex-row space-x-reverse sm:space-x-1">
						<p>You are signed in as: </p>
						<p className="border border-neutral-800 dark:border-neutral-100 p-px w-fit ml-auto right-0">
							{session?.user?.name}
						</p>
					</span>
					<SignOut />
				</span>
			</div>
			<Separator className="my-4 w-full bg-neutral-700 dark:bg-neutral-500" />
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<form
					style={{ opacity: !pending ? 1 : 0.7 }}
					className="flex max-w-full flex-col"
					ref={formRef}
					action={async (formData) => {
						await insertGuestbookEntry(formData);
						formRef.current?.reset();
						toast.success("Your sign has successfully been added.");
					}}
				>
					<input
						aria-label="Your message"
						placeholder="No… It's a thing; it's like a plan, but with more greatness."
						disabled={pending}
						name="entry"
						type="text"
						required
						className="block h-16 w-full rounded-md border border-neutral-500 dark:border-neutral-400 bg-gray-100 py-2 pl-4 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 truncate text-lg"
					/>
					<div className="place-self-end">
						<Button
							className="border w-fit my-4 px-2 py-1 border-neutral-500 rounded bg-neutral-200 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
							disabled={pending}
							type="submit"
							variant="outline"
						>
							<Icons.pencil className="h-4 w-4" aria-hidden="true" />
							<span className="ml-2">Submit</span>
						</Button>
					</div>
				</form>
			</ErrorBoundary>
		</>
	);
}

export function EntriesFeed({
	entries,
	session,
}: { entries: Guestbook[]; session: Session }) {
	const { pending } = useFormStatus();
	return (
		<>
			<Separator className="mt-8 mb-4 w-full bg-neutral-700 dark:bg-neutral-500" />
			{entries.map((entry) => (
				<div>
					<form
						action={async () => {
							await deleteOwnGuestbookEntries(entry.id);
							toast.success("Your sign has been deleted.");
						}}
						key={entry.id}
						className="mb-4 space-y-1"
					>
						<div className="relative mr-1 flex w-full flex-row items-start break-words text-neutral-600 dark:text-neutral-400">
							<p className="mr-4 text-neutral-800 dark:text-neutral-100">
								{entry.created_by}:
							</p>
							<p className="w-[60%] sm:w-96 md:w-[32rem] text-justify">
								{entry.body}
							</p>
							{session?.user?.name === entry.created_by && (
								<Button
									className="absolute right-0 md:right-0 inline-flex w-max items-center justify-center rounded border border-neutral-800 bg-red-300/50 text-sm font-medium leading-4 text-neutral-900 transition-all dark:border-neutral-700 dark:bg-red-700/50 dark:text-neutral-100"
									disabled={pending}
									type="submit"
									variant="destructive"
								>
									<Icons.trash className="h-4 w-4" aria-hidden="true" />
									<span className="ml-2 sr-only">Delete</span>
								</Button>
							)}
						</div>
					</form>
				</div>
			))}
		</>
	);
}
