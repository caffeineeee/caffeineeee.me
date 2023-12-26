import { signIn, signOut } from "next-auth/react";
import { Icons } from "../../components/icons";
import { getServerSession, type Session } from "next-auth";

export function SignIn() {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="inline-flex w-48 items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        onClick={() => signIn("github")}
      >
        <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
        <div className="ml-3">Sign in with GitHub</div>
      </button>

      {/* <button
                className="inline-flex w-48 items-center rounded border border-neutral-200 bg-[#7289da] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 dark:border-neutral-700"
                onClick={() => signIn("discord")}>
                <Icons.discord className="h-4 w-4" aria-hidden="true" />
                <div className="ml-3">Sign in with Discord</div>
            </button> */}

      {/* <button
                className="inline-flex w-48 items-center rounded border bg-gradient-to-r from-pink-500 to-yellow-500 p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-100"
                onClick={() => signIn("instagram")}>
                <Icons.instagram className="h-4 w-4" aria-hidden="true" />
                <div className="ml-3">Sign in with Instagram</div>
            </button> */}

      <button
        className="inline-flex w-48 items-center rounded border border-neutral-200 bg-[#26a7de] p-1 px-3 py-2 text-sm font-medium leading-4 text-neutral-900 dark:border-neutral-700"
        onClick={() => signIn("twitter")}
      >
        <Icons.twitter className="h-4 w-4" aria-hidden="true" />
        <div className="ml-3">Sign in with Twitter</div>
      </button>
    </div>
  );
}

export async function SignOut() {
  const session = await getServerSession() as Session;
  const name = session.user?.name as string;
  return (
    <>
      <p className="-mt-4 text-sm">Signed in as {name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
