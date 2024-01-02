"use client";

import { signIn, signOut } from "next-auth/react";
import { Icons } from "../../components/icons";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Button
        className="inline-flex w-48 items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        onClick={() => signIn("github")}
      >
        <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
        <div className="ml-3">Sign in with GitHub</div>
      </Button>

      <Button
        className="inline-flex w-48 items-center rounded border border-neutral-200 bg-[#26a7de] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 dark:border-neutral-700"
        onClick={() => signIn("twitter")}
      >
        <Icons.twitter className="h-4 w-4" aria-hidden="true" />
        <div className="ml-3">Sign in with Twitter</div>
      </Button>
    </div>
  );
}

export function SignOut() {
  return (
    <>
      <Button
        onClick={() => signOut()}
        className="h-8 border border-neutral-500 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
      >
        <div className="mr-3 text-neutral-300">Sign out</div>
        <Icons.logout className="h-4 w-4" aria-hidden="true" />
      </Button>
    </>
  );
}
