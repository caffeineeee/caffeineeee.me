"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { saveGuestbookEntry } from "../db/actions";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <form
      style={{ opacity: !pending ? 1 : 0.7 }}
      className="relative flex max-w-[500px] flex-col items-center"
      ref={formRef}
      action={async (formData) => {
        await saveGuestbookEntry(formData);
        formRef.current?.reset();
      }}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={pending}
        name="entry"
        type="text"
        required
        className="block h-24 w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
      />
      <Button
        className="absolute right-1 top-2 mr-1 flex justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
        disabled={pending}
        type="submit"
      >

        <div className="mr-3">Sign</div>
        <Icons.edit className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
}