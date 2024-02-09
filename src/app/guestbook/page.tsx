import { type Session, getServerSession } from "next-auth";
import { getGuestbookEntries } from "@/db/queries";
import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { Form, DeleteOwnGuestbookForm } from "./forms";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function GuestbookPage() {
	return (
		<div>
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
			>
				<h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] font-display">
					sign my guestbook
				</h1>
			</section>
			<Suspense
				fallback={
					<div className="flex space-y-2 items-center">
						<Skeleton className="h-8 w-36" />
						<Skeleton className="h-8 w-36" />
					</div>
				}
			>
				<FormSection />
			</Suspense>
			<Suspense
				fallback={
					<div className="flex flex-row space-x-4 *:bg-muted-foreground">
						<Skeleton className="h-3 w-20" />
						<Skeleton className="h-3 w-24" />
					</div>
				}
			>
				<DeleteOwnGuestbook />
			</Suspense>
		</div>
	);
}

async function DeleteOwnGuestbook() {
	const session = (await getServerSession()) as Session;
	const entries = await getGuestbookEntries();
	return <DeleteOwnGuestbookForm entries={entries} session={session} />;
}

async function FormSection() {
	const session = (await getServerSession()) as Session;
	return (
		<>
			{session?.user ? (
				<div className="py-4">
					<Form session={session} />
				</div>
			) : (
				<SignIn />
			)}
		</>
	);
}
