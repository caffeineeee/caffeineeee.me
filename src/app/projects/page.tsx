import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { UrlObject } from "url";
import { CaffeineeeeMeCoverImage } from "./caffeineeee.me-cover-image";

export default function ProjectsPage() {
  return (
    <div className="container grid items-center pb-8 pt-6 md:py-8">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
      >
        <h1 className="text-2xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] font-display">
          projects
        </h1>
      </section>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 tracking-tight dark:text-neutral-300 text-neutral-900">
        <div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground text-center">
            caffeineeee.me
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Fullstack)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/caffeineeee.me"
              as="https://github.com/caffeineeee/caffeineeee.me"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="align-middle break-all gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 *:inline"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <CaffeineeeeMeCoverImage />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            My personal site.
            <br />
            <br />
            <ul className="space-y-2">
              <li>
                • Built OAuth auth backend using Auth.js (NextAuth.js), enabling
                a more secure and easier login.
              </li>
              <li>
                • Enhanced code quality by implementing CI/CD pipelines with
                `pre-commit` hooks and Biome.js to automate linting, fixing, and
                formatting.
              </li>
              <li>
                • Improved the UX by adding swipe gesture-based navigation with
                animation, mimicking native behavior using TouchEvent.
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
          <p className="font-semibold text-lg text-foreground text-center">
            url-shortener
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Fullstack)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/url-shortener"
              as="https://github.com/caffeineeee/url-shortener"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            <LinkWithStyles
              href="https://url.caffeineeee.me"
              as="https://url.caffeineeee.me"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              website
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Image
              src="https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/url-shortener.jpg"
              alt="Cover image of the project: url-shortener"
              width={1024}
              height={1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
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
          <p className="font-semibold text-lg text-foreground text-center">
            rest-api-ts-sqlite
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Backend)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/rest-api-ts-sqlite"
              as="https://github.com/caffeineeee/rest-api-ts-sqlite"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            <LinkWithStyles
              href="https://rest-api-ts-sqlite.vercel.app"
              as="https://rest-api-ts-sqlite.vercel.app"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              website
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Image
              src="https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/rest-api-ts-sqlite.jpg"
              alt="Cover image of the project: rest-api-ts-sqlite"
              width={1024}
              height={1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            A REST API backend to manage order and inventory data.
            <br />
            <br />
            <ul className="space-y-2">
              <li>
                • Delivered a fully functional REST API backend, aligned with
                the technical requirements/specifications per the client's
                request, in 7 days.
              </li>
              <li>
                • Streamlined testing processes using Falso `
                <span className="font-mono text-xs">@ngneat/falso</span>` (a
                better, tree-shakeable alternative to Faker.js) to generate mock
                data.
              </li>
              <li>• Tools: TS/JS, Node.js, Turso libSQL (SQLite), Git.</li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground text-center">
            apollo-server-graphql-jwt-ts-simple-auth-backend
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Backend)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
              as="https://github.com/caffeineeee/apollo-server-graphql-jwt-ts-simple-auth-backend"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Icons.imageOff
              className="min-w-28 min-h-28 w-2/5 h-2/5 sm:min-w-24 sm:min-h-24 md:min-w-32 md:min-h-32 lg:min-w-24 lg:min-h-24 xl:min-w-36 xl:min-h-36"
              aria-hidden="false"
              aria-description="Cover image of the project: apollo-server-graphql-jwt-ts-simple-auth-backend"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            A credentials-based (email & password) auth backend using Apollo
            GraphQL.
            <br />
            <br />
            <ul className="space-y-2">
              <li>
                • Learned Apollo GraphQL from scratch and delivered a fully
                functional auth backend, aligned with the technical
                requirements/specifications per the client's request, in 10
                days.
              </li>
              <li>
                • Automated the generation of JS scripts from TS using TS
                Compiler, allowing the backend to run by consuming the generated
                JS scripts.
              </li>
              <li>
                • Tools: TS/JS, Node.js, Apollo GraphQL, Turso libSQL (SQLite),
                JSON Web Token (JWT), Git.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-8 pb-4 sm:p-4 sm:px-4 flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground text-center">
            hacker-news-clone
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Frontend)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/hacker-news-clone"
              as="https://github.com/caffeineeee/hacker-news-clone"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            <LinkWithStyles
              href="https://hn.caffeineeee.me"
              as="https://hn.caffeineeee.me"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              website
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Image
              src="https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/hacker-news-clone.jpg"
              alt="Cover image of the project: hacker-news-clone"
              width={1024}
              height={1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            A fully responsive, 1-to-1 clone of the Hacker News website{", "}
            <LinkWithStyles
              href="https://news.ycombinator.com"
              as="https://news.ycombinator.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              https://news.ycombinator.com
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
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
          <p className="font-semibold text-lg text-foreground text-center">
            batak_toba_indonesian_nmt
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (Python, Machine learning)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
              as="https://github.com/caffeineeee/batak_toba_indonesian_nmt"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              repo
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Image
              src="https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/batak-toba-indonesian-nmt-poster-cover-image-lighter.png"
              alt="Cover image of the project: batak-toba-indonesian-nmt"
              width={1024}
              height={1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            It's like Google Translate, but for Batak Toba (BBC) and Indonesian
            (IND), because there wasn't an option for Batak Toba in Google
            Translate (not until around June 2024, per{" "}
            <LinkWithStyles
              href="https://support.google.com/translate/answer/15139004"
              as="https://support.google.com/translate/answer/15139004"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              https://support.google.com/translate/answer/15139004
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            {", "}
            by which time I had submitted my paper).
            <br />
            <br />
            <ul className="space-y-2">
              <li>
                • It's enough to translate short sentences (&lt;30 words) but
                not long paragraphs.
              </li>
              <li>
                • Try out the live models on HuggingFace, here:{" "}
                <ul className="ml-8">
                  <li>
                    ϕ BBC {"->"} IND:{" "}
                    <LinkWithStyles
                      href="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
                      as="https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      https://huggingface.co/kepinsam/bbc-to-ind-nmt-v5
                      <Icons.externalLink
                        className={cn("h-4 w-4 mb-2", "ml-1")}
                        aria-hidden="true"
                      />
                    </LinkWithStyles>
                    {"."}
                  </li>
                  <li>
                    ϕ IND {"->"} BBC:{" "}
                    <LinkWithStyles
                      href="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
                      as="https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      https://huggingface.co/kepinsam/ind-to-bbc-nmt-v5
                      <Icons.externalLink
                        className={cn("h-4 w-4 mb-2", "ml-1")}
                        aria-hidden="true"
                      />
                    </LinkWithStyles>
                    {"."}
                  </li>
                </ul>
              </li>
              <li className="*:inline">
                • Published a paper in the academic journal IJAAS (International
                Journal of Advances in Applied Sciences), which is indexed in
                Scopus Q4 and SINTA 1 (as of June 2024):{" "}
                <LinkWithStyles
                  href="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
                  as="https://doi.org/10.11591/ijaas.v13.i4.pp830-839"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <p>https://doi.org/10.11591/ijaas.v13.i4.pp830-839</p>
                  <Icons.externalLink
                    className={cn("h-4 w-4 mb-2", "ml-1")}
                    aria-hidden="true"
                  />
                </LinkWithStyles>
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

function LinkWithStyles({
  children,
  href,
  as,
  target,
  rel,
  className,
  ...props
}: {
  children?: ReactNode;
  href: string | UrlObject;
  as?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "align-middle break-all gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 *:inline",
        className
      )}
      href={href}
      as={as}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}
