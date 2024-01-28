import { type Session, getServerSession } from "next-auth";
import { getGuestbookEntries } from "@/db/queries";
import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { Form, DeleteOwnGuestbookForm } from "./forms";
import { Suspense } from "react";
// import { LoadingSpinner } from "@/components/loading-spinner";
import { Skeleton } from "@/components/ui/skeleton";

export default function GuestbookPage() {
	return (
		<div>
			<h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
				sign my guestbook
			</h1>
			<Suspense fallback={<Skeleton className="w-28 h-5 rounded-full" />}>
				{/* <Suspense fallback={<LoadingSpinner />}> */}
				<FormSection />
			</Suspense>
			{/* <Suspense fallback={<LoadingSpinner />}> */}
			<Suspense fallback={<Skeleton className="w-28 h-5 rounded-full" />}>
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
		</>
	);
}
