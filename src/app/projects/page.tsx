import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProjectsPage() {
	const urlStyle =
		"font-semibold w-fit px-4 border rounded-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-600 hover:dark:bg-neutral-400 text-background";

	return (
		<div className="container grid items-center gap-6 pb-8 pt-6 md:py-8 ">
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
			>
				<h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] font-display">
					projects
				</h1>
			</section>
			<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 tracking-tight dark:text-neutral-300 text-neutral-900">
				<div className="p-4 flex flex-col items-center text-center">
					<p className="font-semibold text-xl">url-shortener</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/url-shortener"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							github
						</Link>
						<Link
							href="https://url.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							site
						</Link>
					</span>
					<p className="leading-5">
						URL shortener made with Next14, Tailwind, ShadcnUI, NextAuth,
						DrizzleORM, Turso SQLite.
					</p>
				</div>
				<Separator className="my-1 w-4/5 bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="p-4 flex flex-col items-center text-center">
					<p className="font-semibold text-xl">hacker-news-clone</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/hacker-news-clone"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							github
						</Link>
						<Link
							href="https://hn.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							site
						</Link>
					</span>
					<p className="leading-5">
						Hacker News clone made with Next14, Tailwind.
					</p>
				</div>
				<Separator className="my-1 w-4/5 bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="p-4 flex flex-col items-center text-center">
					<p className="font-semibold text-xl">
						Batak Toba language-Indonesian machine translation
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							github
						</Link>
					</span>
					<p className="leading-5">
						Like Google Translate, but for Batak Toba and Indonesian
						language-pair, cuz there is no option for Batak Toba in Google
						Translate.
						<br />
						Try out the live models here:&nbsp;
						<Link
							href="https://huggingface.co/kepinsam/batak_toba_to_indonesian_translation_model"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							bbc→ind
						</Link>
						&nbsp;&nbsp;
						<Link
							href="https://huggingface.co/kepinsam/indonesian_to_batak_toba_translation_model"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							ind→bbc
						</Link>
					</p>
				</div>
				<Separator className="my-1 w-4/5 bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="p-4 flex flex-col items-center text-center">
					<p className="font-semibold text-xl">caffeineeee.me</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/caffeineeee.me"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							github
						</Link>
					</span>
					<p className="leading-5">
						Yet another personal site of mine made with Next14, Tailwind,
						ShadcnUI, NextAuth, DrizzleORM, Turso SQLite.
					</p>
				</div>
			</div>
		</div>
	);
}
