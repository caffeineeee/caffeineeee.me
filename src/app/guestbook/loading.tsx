import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="container grid items-center pb-8 pt-6 md:py-8">
			<div className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center">
				<section
					id="hero"
					aria-labelledby="hero-heading"
					className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
				>
					<h1 className="text-2xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] font-display">
						sign my guestbook
					</h1>
				</section>
				<div className="flex flex-col gap-2 p-8">
					<Skeleton className="w-48 h-9 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
					<Skeleton className="w-48 h-9 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
					<Skeleton className="w-48 h-9 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
				</div>
				<Separator className="mt-8 mb-4 w-full bg-neutral-700 dark:bg-neutral-500" />
				<div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-1">
					<Skeleton className="w-64 sm:w-[32rem] md:w-[39rem] h-6 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
					<Skeleton className="w-64 sm:w-[32rem] md:w-[39rem] h-6 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
					<Skeleton className="w-64 sm:w-[32rem] md:w-[39rem] h-6 rounded-md bg-neutral-400/50 dark:bg-neutral-600/40" />
				</div>
			</div>
		</div>
	);
}
