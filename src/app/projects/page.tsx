import { Icons } from "@/components/icons";
import dynamic from "next/dynamic";
import Link from "next/link";

const Separator = dynamic(() =>
	import("@/components/ui/separator").then((mod) => mod.Separator),
);

export default function ProjectsPage() {
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
						(JS, Fullstack) caffeineeee.me
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/caffeineeee.me"
							as="https://github.com/caffeineeee/caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
					</span>
					<div className="leading-5 text-justify">
						My personal site.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Implemented OAuth auth backend using Auth.js (NextAuth.js),
								enabling a more secure and easier login.
							</li>
							<li>
								• Enhanced code quality by implementing CI/CD pipelines with
								pre-commit hooks and Biome.js for automated linting, fixing, and
								formatting.
							</li>
							<li>
								• Tools: TS/JS, Node.js, React, Next.js, Tailwind, Auth.js
								(NextAuth.js), Drizzle ORM, Turso libSQL (SQLite), Git.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(JS, Fullstack) url-shortener
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/url-shortener"
							as="https://github.com/caffeineeee/url-shortener"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
						<Link
							href="https://url.caffeineeee.me"
							as="https://url.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							live view
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
					</span>
					<div className="leading-5 text-justify">
						Shorten your URL.
						<br />
						<br />
						<ul className="space-y-2">
							<li>• Applied BASE62 encoding to generate the shortened URL.</li>
							<li>
								• Used Next.js middleware for redirection if a short URL maps to
								a long URL.
							</li>
							<li>
								• Adopted Test-Driven Development (TDD) to develop the core
								functionalities by creating unit test cases with Jest,
								increasing reliability.
							</li>
							<li>
								• Tools: TS/JS, Node.js, React, Next.js, Tailwind, Auth.js
								(NextAuth.js), Drizzle ORM, Turso libSQL (SQLite), Jest, Git.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(JS, Backend) rest-api-ts-sqlite
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/rest-api-ts-sqlite"
							as="https://github.com/caffeineeee/rest-api-ts-sqlite"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
						<Link
							href="https://rest-api-ts-sqlite.vercel.app"
							as="https://rest-api-ts-sqlite.vercel.app"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							live view
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
					</span>
					<div className="leading-5 text-justify">
						A REST API backend for managing order and inventory data.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Delivered a fully-functional backend, aligned with the
								technical requirements/specifications as per client's request,
								in 7 days.
							</li>
							<li>
								• Streamlined testing processes using Falso “@ngneat/falso” (a
								tree-shakeable alternative to Faker.js) for mock data
								generation.
							</li>
							<li>• Tools: TS/JS, Node.js, Turso libSQL (SQLite), Git.</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(JS, Backend) apollo-server-graphql-jwt-ts-simple-auth-backend
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
							as="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
					</span>
					<div className="leading-5 text-justify">
						A Credentials-based (email & password) auth system using Apollo
						GraphQL.
						<br />
						<br />
						<ul className="space-y-2">
							<li>
								• Learned Apollo GraphQL from scratch and delivered a fully
								functional auth backend, aligned with the technical
								requirements/specifications as per client's request, in 10 days.
							</li>
							<li>
								• Automated the generation of JS scripts from TS using TS
								Compiler, allowing the backend to run by consuming the generated
								JS scripts.
							</li>
							<li>
								• Built a Credentials-based (email & password) auth backend
								using Apollo GraphQL and JSON Web Token.
							</li>
							<li>
								• Tools: TS/JS, Node.js, Apollo GraphQL, Turso libSQL (SQLite),
								JSON Web Token, Git.
							</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(JS, Frontend) hacker-news-clone
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/hacker-news-clone"
							as="https://github.com/caffeineeee/hacker-news-clone"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
						<Link
							href="https://hn.caffeineeee.me"
							as="https://hn.caffeineeee.me"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							live view
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
					</span>
					<div className="leading-5 text-justify break-words">
						A 1-to-1 clone of the Hacker News website{", "}
						<Link
							href="https://news.ycombinator.com"
							as="https://news.ycombinator.com"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							news.ycombinator.com
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
						</Link>
						{", "}
						to practice styling skills using Tailwind.
						<br />
						<br />
						<ul className="space-y-2">
							<li>• Tools: TS/JS, Node.js, React, Next.js, Tailwind, Git.</li>
						</ul>
					</div>
				</div>
				<Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
				<div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
					<p className="font-semibold text-xl text-foreground text-center">
						(Python, Machine learning) batak_toba_indonesian_nmt
					</p>
					<span className="flex flex-row justify-center space-x-4 pb-2">
						<Link
							href="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
							as="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
						>
							repo
							<Icons.externalLink className="h-4 w-4 mb-2" aria-hidden="true" />
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
								• Try out the live models on HuggingFace, here:{" "}
								<Link
									href="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
									as="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
									target="_blank"
									rel="noopener noreferrer nofollow"
									className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
								>
									BBC {"->"} IND
									<Icons.externalLink
										className="h-4 w-4 mb-2"
										aria-hidden="true"
									/>
								</Link>
								{", "}
								<Link
									href="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
									as="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
									target="_blank"
									rel="noopener noreferrer nofollow"
									className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
								>
									IND {"->"} BBC
									<Icons.externalLink
										className="h-4 w-4 mb-2"
										aria-hidden="true"
									/>
								</Link>
								{"."}
							</li>
							<li>
								• Published a paper in the academic journal “International
								Journal of Advances in Applied Sciences (IJAAS)” indexed in
								Scopus Q4 and SINTA 1 (as of June 2024):{" "}
								<Link
									href="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
									as="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
									target="_blank"
									rel="noopener noreferrer nofollow"
									className="inline-flex align-middle break-words gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
								>
									doi.org/10.11591/ijaas.v13.i4.pp830-839
									<Icons.externalLink
										className="h-4 w-4 mb-2"
										aria-hidden="true"
									/>
								</Link>
								{"."}
							</li>
							<li>• Tools: Python, PyTorch, Transformers, Git.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
