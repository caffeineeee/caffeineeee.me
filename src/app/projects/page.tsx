import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { UrlObject } from "url";
import { CaffeineeeeMeCoverImage } from "./caffeineeee.me-cover-image";
import sengkemang from "@/../public/kampung-sengkemang-compressed.jpg";

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
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
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
            <LinkWithStyles
              href="https://github.com/caffeineeee/url-shortener"
              as="https://github.com/caffeineeee/url-shortener"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              code
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
            <ul className="space-y-2">
              <li>
                • Implemented short-to-long URL redirection using middlewares,
                unit tests using Jest, data storage using Turso libSQL
                (SQLite)+Drizzle ORM, OAuth using Auth.js (NextAuth.js), server
                components using React, and Server Actions from Next.js.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
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
            <LinkWithStyles
              href="https://github.com/caffeineeee/rest-api-ts-sqlite"
              as="https://github.com/caffeineeee/rest-api-ts-sqlite"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              code
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Icons.imageOff
              className="min-w-16 min-h-16 w-1/5 h-1/5 sm:min-w-12 sm:min-h-12 md:min-w-20 md:min-h-20 lg:min-w-12 lg:min-h-12 xl:min-w-24 xl:min-h-24"
              aria-hidden="false"
              aria-description="Cover image of the project: apollo-server-graphql-jwt-ts-simple-auth-backend"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            <ul className="space-y-2">
              <li>
                • Delivered a RESTful API to manage order and inventory data
                along with other technical requirements per the client's
                request.
              </li>
              <li>
                • Used Falso `
                <span className="font-mono text-xs">@ngneat/falso</span>` (a
                faster, tree-shakeable alternative to Faker.js) for testing
                purposes.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
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
              code
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Icons.imageOff
              className="min-w-16 min-h-16 w-1/5 h-1/5 sm:min-w-12 sm:min-h-12 md:min-w-20 md:min-h-20 lg:min-w-12 lg:min-h-12 xl:min-w-24 xl:min-h-24"
              aria-hidden="false"
              aria-description="Cover image of the project: apollo-server-graphql-jwt-ts-simple-auth-backend"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            <ul className="space-y-2">
              <li>
                • Built an auth backend that uses Apollo GraphQL and JWT (JSON
                Web Token) and is based on credentials (email and password). It
                is linked to a Turso libSQL (SQLite) database.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground text-center">
            kampung-sengkemang
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (HTML+CSS+JS, Frontend)
            </p>
          </span>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <LinkWithStyles
              href="https://kampung-sengkemang.vercel.app"
              as="https://kampung-sengkemang.vercel.app"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              website
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            <LinkWithStyles
              href="https://github.com/caffeineeee/kampung-sengkemang"
              as="https://github.com/caffeineeee/kampung-sengkemang"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              code
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <span className="m-2">
            <Image
              src={
                process.env.NODE_ENV === "development"
                  ? sengkemang
                  : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/kampung-sengkemang-compressed.jpg"
              }
              alt="Cover image of the project: kampung-sengkemang"
              width={process.env.NODE_ENV === "development" ? undefined : 1024}
              height={process.env.NODE_ENV === "development" ? undefined : 1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </span>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            <ul className="space-y-2">
              <li>
                • Built an official website for a village hall following the
                client's request (the village head).
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground text-center">
            caffeineeee.me
          </p>
          <span className="flex flex-row justify-center space-x-4 pb-2 text-sm">
            <p className="inline-flex align-middle break-words gap-1 font-bold w-fit italic">
              (TS, Frontend)
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
              code
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
            <ul className="space-y-2">
              <li>
                • Implemented CI/CD pipelines with `
                <span className="font-mono text-xs">pre-commit</span>` hooks and
                Biome.js.
              </li>
              <li>• Added gesture-based navigation for better UX.</li>
              <li>• Used AWS S3 for storing media files (images, etc.).</li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
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
            <LinkWithStyles
              href="https://github.com/caffeineeee/hacker-news-clone"
              as="https://github.com/caffeineeee/hacker-news-clone"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              code
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
            <ul className="space-y-2">
              <li>
                • Built a fully responsive, 1-to-1 clone of the Hacker News
                website
                {", "}
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
                .
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-1 w-full bg-neutral-700 dark:bg-neutral-500 sm:hidden place-self-center" />
        <div className="pt-4 pb-1 sm:p-4 sm:px-4 flex flex-col items-center">
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
              code
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
          </span>
          <Link
            className="relative flex m-2 place-content-center"
            href="/poster-ti-unri.png"
          >
            <span className="absolute flex flex-row text-xs self-center text-neutral-100 bg-neutral-900/60 border-2 border-neutral-50 rounded-full p-1">
              click to view full image
              <Icons.search className="h-4 w-4 mt-0 ml-1" aria-hidden="true" />
            </span>
            <Image
              src="https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/batak-toba-indonesian-nmt-poster-cover-image-lighter.png"
              alt="Cover image of the project: batak-toba-indonesian-nmt"
              width={1024}
              height={1024}
              className="border border-neutral-800 dark:border-neutral-200 w-full"
            />
          </Link>
          <div className="leading-5 text-justify text-sm w-full sm:min-w-64 sm:w-full md:min-w-72 md:w-full xl:min-w-96 xl:w-full *:inline">
            <ul className="space-y-2">
              <li>
                • Created an NMT model (neural machine translation) for BBC
                (Batak Toba) and IND (Indonesian), i.e., a kind of translation
                system similar to Google Translate. Prior to June 2024, there
                wasn't an option for Batak Toba in Google Translate.
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
                • Published a paper (10 pages) titled “Batak Toba
                language-Indonesian machine translation with transfer learning
                using NLLB (No Language Left Behind)” in IJAAS 2024 (indexed in
                Scopus Q4 and SINTA 1):{" "}
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
