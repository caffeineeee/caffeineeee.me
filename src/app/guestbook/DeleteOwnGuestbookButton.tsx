"use client";

import { Icons } from "@/components/icons";
import { deleteOwnGuestbookEntries } from "../db/actions";

export function DeleteOwnGuestbookButton(id) {
    const userId = id as number;

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await deleteOwnGuestbookEntries(userId);
            }}>
                <button
                    className="mr-4 inline-flex w-24 items-center justify-center rounded border border-neutral-200 bg-red-300/50 p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 transition-all dark:border-neutral-700 dark:bg-red-700/50 dark:text-neutral-100"
                    type="submit"
                >
                    <p className="mr-1">Delete</p>
                    <Icons.trash className="h-4 w-4" aria-hidden="true" />
                </button>
            </form>
        </>
    );
}