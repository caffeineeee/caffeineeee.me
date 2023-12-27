import { getGuestbookEntries } from "../db/queries";
import { UserSession } from "./UserSession";
import { type Session, getServerSession } from "next-auth";
import { DeleteOwnGuestbookButton } from "./DeleteOwnGuestbookButton";
import { deleteOwnGuestbookEntries } from "../db/actions";

export default async function GuestbookPage() {

  const session = await getServerSession() as Session;
  const entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="container grid max-w-3xl items-center gap-12 py-8 pt-6 md:py-10 lg:py-10">
      <h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
        sign my guestbook
      </h1>
      <UserSession />
      <div>

        {entries.map((entry) => (
          <form
            action={
              async () => {
                "use server";
                await deleteOwnGuestbookEntries(entry.id);
              }}
            key={entry.id}
            className="mb-4 space-y-1"
          >
            <div className="mr-1 flex w-full flex-row items-center break-words text-neutral-600 dark:text-neutral-400">
              {
                session.user?.name === entry.created_by &&
                <DeleteOwnGuestbookButton />
              }
              <p className="mr-4 text-neutral-100">{entry.created_by}:</p>
              {entry.body}
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}
