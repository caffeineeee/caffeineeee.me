"use client";

import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { Shell } from "@/components/shells/shell";
import { useSession } from "next-auth/react";
import Form from "./form";

export default function GuestbookPage() {
  const { data: session } = useSession();

  return (
    <Shell className="gap-12" variant="markdown">
      <h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
        sign my guestbook
      </h1>
      {session?.user ? (
        <>
          {/* <Form /> */}
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      {/* {entries.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))} */}
    </Shell>
  );
}
