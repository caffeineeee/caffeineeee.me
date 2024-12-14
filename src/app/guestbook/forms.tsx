"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { deleteOwnGuestbookEntries, insertGuestbookEntry } from "@/db/actions";
import type { Guestbook } from "@/db/schema";
import type { Session } from "next-auth";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function GuestbookForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const { pending } = useFormStatus();

	return (
		<ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
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
					className="block h-16 w-full rounded-md border border-neutral-500 dark:border-neutral-400 bg-gray-100 py-2 pl-4 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 truncate text-sm"
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
				<form
					action={async () => {
						await deleteOwnGuestbookEntries(entry.id);
						toast.success("Your entry has been successfully deleted.");
					}}
					key={entry.id}
					className="mb-4 space-y-1"
				>
					<div className="relative flex w-full flex-col items-start break-words text-sm">
						<span className="flex flex-row justify-between w-full">
							<p className="font-semibold dark:text-primary/90">
								{entry.created_by}:
							</p>
							{session?.user?.name === entry.created_by && (
								<Popover>
									<PopoverTrigger className="font-thin text-primary/60">
										•••
									</PopoverTrigger>
									<PopoverContent className="text-sm p-0 w-fit bg-transparent border-none">
										<Button
											className="bg-red-600 font-normal text-sm text-neutral-200 dark:bg-red-600 dark:text-neutral-100 p-2 w-fit h-fit"
											disabled={pending}
											type="submit"
										>
											<p>Delete</p>
										</Button>
									</PopoverContent>
								</Popover>
							)}
						</span>
						<p className="w-full sm:w-96 md:w-[32rem] text-justify text-primary">
							{entry.body}
						</p>
					</div>
				</form>
			))}
		</>
	);
}
