"use client";

import { Icons } from "@/components/icons";
import { useFormStatus } from "react-dom";
import { deleteOwnGuestbookEntries } from "../db/actions";
import { Button } from "@/components/ui/button";

export function DeleteOwnGuestbookForm({ entries, session }) {
    const { pending } = useFormStatus();
    return (
        <>
            {entries.map(entry => (
                <form
                    action={
                        async () => {
                            await deleteOwnGuestbookEntries(entry.id);
                        }}
                    key={entry.id}
                    className="mb-4 space-y-1"
                >
                    <div className="mr-1 flex w-full flex-row items-center break-words text-neutral-600 dark:text-neutral-400">
                        {
                            session?.user?.name === entry.created_by &&
                            <Button
                                className="mr-4 inline-flex w-24 items-center justify-center rounded border border-neutral-200 bg-red-300/50 p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 transition-all dark:border-neutral-700 dark:bg-red-700/50 dark:text-neutral-100"
                                disabled={pending}
                                type="submit"
                            >
                                <p className="mr-1">Delete</p>
                                <Icons.trash className="h-4 w-4" aria-hidden="true" />
                            </Button>
                        }
                        <p className="mr-4 text-neutral-100">{entry.created_by}:</p>
                        {entry.body}
                    </div>
                </form>
            ))}

        </>
    );
}