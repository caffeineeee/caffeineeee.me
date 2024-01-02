import { type Session, getServerSession } from "next-auth";
import { getGuestbookEntries } from "../db/queries";
import { SignIn, SignOut } from "@/app/guestbook/buttons";
import Form from "./form";
import { DeleteOwnGuestbookForm } from './DeleteOwnGuestbookForm';

export default async function GuestbookPage() {
  const session = await getServerSession() as Session;
  const entries = await getGuestbookEntries();

  return (
    <div className="container grid max-w-3xl items-center gap-12 py-8 pt-6 md:py-10 lg:py-10">
      <div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
          sign my guestbook
        </h1>
        <div>
          {session?.user ? (
            <div className="py-4">
              <Form />
              <div className="flex w-fit flex-col items-start gap-y-3 px-2 py-4 md:flex-row md:items-center">
                <div className="pl-0">
                  Signed in as&nbsp;
                  <span className="rounded-lg bg-slate-600 p-2 text-neutral-300">
                    {session?.user?.name}
                  </span>
                </div>
                <div className="ml-0 md:ml-4">
                  <SignOut />
                </div>
              </div>
            </div>
          ) : (
            <SignIn />
          )}
        </div>
        <div>
          <DeleteOwnGuestbookForm entries={entries} session={session} />
        </div>
      </div>
    </div>
  );
}
