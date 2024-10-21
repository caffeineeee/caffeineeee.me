import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const Separator = dynamic(() =>
	import("@/components/ui/separator").then((mod) => mod.Separator),
);

export default function ProjectsPage() {
	const urlStyle =
		"font-bold underline underline-offset-2 w-fit px-4 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300";

	return (
		<div className="container grid items-center pb-8 pt-6 md:py-8">
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
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Fullstack) caffeineeee.me
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/caffeineeee.me"
							as="https://github.com/caffeineeee/caffeineeee.me"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							repo
						</Link>
					</span>
					<div className="leading-5 text-justify">
						My personal site.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Tools: TypeScript, Node, React, NextJS, Tailwind, NextAuth,
								Drizzle ORM, Turso SQLite.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Fullstack) url-shortener
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/url-shortener"
							as="https://github.com/caffeineeee/url-shortener"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							repo
						</Link>
						<Link
							href="https://url.caffeineeee.me"
							as="https://url.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							live view
						</Link>
					</span>
					<div className="leading-5 text-justify">
						Shorten your URL.
						<br />
						<br />
						<ul className="space-y-2">
							<li>• Applied BASE62 conversion for getting a shortened URL.</li>
							<li>
								• Implemented NextJS middleware for redirection if a short URL
								maps to a long URL.
							</li>
							<li>
								• Tools: TypeScript, Node, React, NextJS, Tailwind, NextAuth,
								Drizzle ORM, Turso SQLite.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Backend) rest-api-ts-sqlite
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/rest-api-ts-sqlite"
							as="https://github.com/caffeineeee/rest-api-ts-sqlite"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							repo
						</Link>
						<Link
							href="https://rest-api-ts-sqlite.vercel.app"
							as="https://rest-api-ts-sqlite.vercel.app"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							live view
						</Link>
					</span>
					<div className="leading-5 text-justify">
						A REST API backend for managing order and inventory data.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Used Falso to generate mock data to streamline testing
								processes.
							</li>
							<li>• Tools: TypeScript, Node, NextJS, Turso SQLite.</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Backend) apollo-server-graphql-jwt-ts-simple-auth-backend
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
							as="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							repo
						</Link>
					</span>
					<div className="leading-5 text-justify">
						A Credentials-based (email & password) auth system using Apollo
						GraphQL.
						<br />
						<br />
						<ul className="space-y-2">
							<li>• Utilized Turso SQLite for secure user data storage.</li>
							<li>• Applied user-specific access control using JWT token.</li>
							<li>
								• Tools: TypeScript, Node, Apollo GraphQL, Turso SQLite, JWT.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Frontend) hacker-news-clone
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/hacker-news-clone"
							as="https://github.com/caffeineeee/hacker-news-clone"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							repo
						</Link>
						<Link
							href="https://hn.caffeineeee.me"
							as="https://hn.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className={cn(urlStyle)}
						>
							live view
						</Link>
					</span>
					<div className="leading-5 text-justify">
						A 1-to-1 clone of the Hacker News website to practice styling skills
						using Tailwind.
						<br />
						<br />
						<ul className="space-y-2">
							<li>• Tools: TypeScript, Node, React, NextJS, Tailwind.</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Machine learning) batak_toba_indonesian_nmt
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
							as="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
							className={cn(urlStyle)}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							repo
						</Link>
					</span>
					<div className="leading-5 text-justify">
						Like Google Translate, but for Batak Toba (BBC) and Indonesian
						(IND), because there is no option for Batak Toba in Google
						Translate.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Enough for translating short sentences (&lt;30 words), but not
								for translating long paragraphs or essays.
							</li>
							<li>
								• Try out the live models on HuggingFace here:
								<span className="flex flex-row">
									<span className="space-x-10">
										<Link
											href="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
											as="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
											className={cn(urlStyle, "px-0")}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											BBC ➡ IND
										</Link>
										<Link
											href="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
											as="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
											className={cn(urlStyle, "px-0")}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											IND ➡ BBC
										</Link>
										.
									</span>
								</span>
							</li>
							<li>
								• Published a paper (DOI):&nbsp;
								<span className="flex flex-row">
									<span>
										<Link
											href="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
											as="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
											className={cn(urlStyle, "px-0")}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											https://doi.org/10.11591/ijaas.v13.i4.pp830-839
										</Link>
										.
									</span>
								</span>
							</li>
							<li>• Tools: Python, PyTorch, Transformers.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
