import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProjectsPage() {
	const urlStyle =
		"font-mono text-neutral-200/80 hover:text-neutral-50 underline underline-offset-2 hover:underline-offset-4 decoration-1 decoration-dashed decoration-rose-500 cursor-pointer";

	return (
		<div className="container grid items-center gap-12 pb-8 pt-6 md:py-8">
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
			>
				<h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
					projects
				</h1>
			</section>
			<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 tracking-tight text-neutral-300">
				<div className="p-4 flex flex-col text-center">
					<p className="font-medium">hacker-news-clone</p>
					<span className="flex flex-row justify-center space-x-4 pb-4">
						<Link
							href="https://github.com/caffeineeee/hacker-news-clone"
							target="_blank"
							className={cn(urlStyle)}
						>
							github
						</Link>
						<Link
							href="https://hn.caffeineeee.me"
							target="_blank"
							className={cn(urlStyle)}
						>
							site
						</Link>
					</span>
					<p className="leading-5">
						Hacker News clone made with Next14, Tailwind
					</p>
				</div>
				<div className="p-4 flex flex-col text-center">
					<p className="font-medium">
						Batak Toba language-Indonesian machine translation
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-4">
						<Link
							href="https://huggingface.co/kepinsam/batak_toba_to_indonesian_translation_model"
							className={cn(urlStyle)}
							target="_blank"
						>
							bbc→ind
						</Link>
						<Link
							href="https://huggingface.co/kepinsam/indonesian_to_batak_toba_translation_model"
							className={cn(urlStyle)}
							target="_blank"
						>
							ind→bbc
						</Link>
					</span>
					<p className="leading-5">
						Like Google Translate, but for Batak Toba and Indonesian
						language-pair, cuz there is no option for Batak Toba in Google
						Translate.
					</p>
				</div>
				<div className="p-4 flex flex-col text-center">
					<p className="font-medium">caffeineeee.me</p>
					<span className="flex flex-row justify-center space-x-4 pb-4">
						<Link
							href="https://github.com/caffeineeee/caffeineeee.me"
							className={cn(urlStyle)}
							target="_blank"
						>
							github
						</Link>
					</span>
					<p className="leading-5">
						Yet another personal site of mine made with Next14, Tailwind,
						ShadcnUI, NextAuth, DrizzleORM, Turso SQLite
					</p>
				</div>
			</div>
		</div>
	);
}
