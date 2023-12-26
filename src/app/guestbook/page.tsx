import { getGuestbookEntries } from "../db/queries";
import { UserSession } from "./UserSession";

export default async function GuestbookPage() {
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
      {entries.map((entry) => (
        <div key={entry.id} className="mb-4 flex flex-col space-y-1">
          <div className="w-full break-words text-sm">
            <span className="mr-1 text-neutral-600 dark:text-neutral-400">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))}
    </div>
  );
}
