"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { saveGuestbookEntry } from "@/db/actions";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ErrorBoundary } from "react-error-boundary";
import { deleteOwnGuestbookEntries } from "@/db/actions";

export function Form() {
	const formRef = useRef<HTMLFormElement>(null);
	const { pending } = useFormStatus();

	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<form
				style={{ opacity: !pending ? 1 : 0.7 }}
				className="flex max-w-full flex-col"
				ref={formRef}
				action={async (formData) => {
					await saveGuestbookEntry(formData);
					formRef.current?.reset();
				}}
			>
				<input
					aria-label="Your message"
					placeholder="No… It's a thing; it's like a plan, but with more greatness."
					disabled={pending}
					name="entry"
					type="text"
					required
					className="block h-16 w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100 truncate text-lg"
				/>
				<Button
					className="flex border w-fit place-self-end my-4 border-neutral-500 rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
					disabled={pending}
					type="submit"
					variant="outline"
				>
					<Icons.pencil className="h-4 w-4" aria-hidden="true" />
					<span className="ml-2">Submit</span>
				</Button>
			</form>
		</ErrorBoundary>
	);
}

export function DeleteOwnGuestbookForm({ entries, session }) {
	const { pending } = useFormStatus();
	return (
		<>
			<div className="shadow-lg dark:shadow-2xl shadow-neutral-800 dark:shadow-neutral-600 rounded-lg p-4">
				{entries.map((entry) => (
					<form
						action={async () => {
							await deleteOwnGuestbookEntries(entry.id);
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
				))}
			</div>
		</>
	);
}
