import { getGuestbookEntries } from "@/db/queries";
// import { type Session, getServerSession } from "next-auth";
import { auth } from "@/server/auth";
import type { Session } from "next-auth";
import dynamic from "next/dynamic";

const GuestbookForm = dynamic(() =>
	import("@/app/guestbook/forms").then((mod) => mod.GuestbookForm),
);
const EntriesFeed = dynamic(() =>
	import("@/app/guestbook/forms").then((mod) => mod.EntriesFeed),
);
const SignIn = dynamic(() =>
	import("@/app/guestbook/buttons").then((mod) => mod.SignIn),
);

export default async function GuestbookPage() {
	// test loading state
	await new Promise((resolve) => setTimeout(resolve, 100));

	// const session = (await getServerSession()) as Session;
	const session = (await auth()) as Session;
	// if (!session || !session.user) {
	// 	return undefined;
	// }
	const entries = await getGuestbookEntries();

	return (
		<div className="container grid items-center pb-8 pt-6 md:py-8">
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
			>
				<h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] font-display">
					sign my guestbook
				</h1>
			</section>
			{session?.user ? (
				<div className="py-4">
					<GuestbookForm />
				</div>
			) : (
				<SignIn />
			)}
			<EntriesFeed entries={entries} session={session} />
		</div>
	);
}
