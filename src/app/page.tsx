import Image from "next/image";

// import yoshinoya from "@/../public/yoshinoya.jpg";
import kawahPutih from "@/../public/kawah-putih-compressed.jpg";
import Link from "next/link";
import { LinkWithStyles } from "@/components/link-with-styles";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="container grid items-center justify-center pb-8 pt-6 md:py-8">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center"
      >
        {/* <Image
          src={
            process.env.NODE_ENV === "development"
              ? yoshinoya
              : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/yoshinoya.jpg"
          }
          priority
          alt="Profile picture of Cevin Samuel"
          className="rounded-full w-48 h-48 md:w-64 md:h-64"
        /> */}
        <Image
          src={
            process.env.NODE_ENV === "development"
              ? kawahPutih
              : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/kawah-putih-compressed.jpg"
          }
          priority
          alt="Profile picture of Cevin Samuel"
          className="rounded-full w-40 h-40 md:w-56 md:h-56"
        />
        <div className="space-y-0">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] font-display">
            Cevin Samuel
          </h1>
          <h2 className="text-lg font-semibold tracking-normal md:text-xl lg:text-2xl font-display text-neutral-300">
            Software engineer with 1+ yoe (TS/JS, Go, Python, SQL)
          </h2>
        </div>
      </section>
      <div className="max-w-[46rem] text-sm text-left">
        <p>Hello👋</p>
        <p>
          I am Cevin, a software engineer with 1+ years of experience,
          specializing in full-stack development and machine learning. I have
          done a couple of full-time internships, contributed to many projects,
          and worked with various third-party clients from many different
          backgrounds (see{" "}
          <Link
            href="/projects"
            rel="noopener noreferrer nofollow"
            className="align-middle break-all gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 *:inline"
          >
            /projects
          </Link>{" "}
          page for reference—note that this list is NOT EXHAUSTIVE).
        </p>
        <br />
        <p>
          Feel free to reach out if you'd like to collaborate, brainstorm
          problems and solutions, or to simply say hi! Thank you!!
        </p>
        <br />
        <ul>
          <li>LANGUAGES: JavaScript/TypeScript, Go, Python, SQL.</li>
          <li>BACKEND: Node.js, Express.js, Nest.js, Gin.</li>
          <li>FRONTEND: React, Next.js, CSS/Tailwind, React Native/Expo.</li>
          <li>DATABASES: PostgreSQL, MySQL, SQLite, MongoDB.</li>
          <li>API: RESTful API, GraphQL, RPCs.</li>
          <li>
            TOOLS: Git, Docker, Bash, WSL (Ubuntu), AWS (S3, EC2, Rekognition),
            CI/CD tools.
          </li>
        </ul>
        <br />
        <ul>
          <li>
            Email:{" "}
            <LinkWithStyles
              href="mailto:cevin.samuel@yahoo.com"
              as="mailto:cevin.samuel@yahoo.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              cevin.samuel@yahoo.com
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            .
          </li>
          <li>
            LinkedIn:{" "}
            <LinkWithStyles
              href="https://www.linkedin.com/in/cevinsamuel"
              as="https://www.linkedin.com/in/cevinsamuel"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              in/cevinsamuel
              <Icons.externalLink
                className={cn("h-4 w-4 mb-2", "ml-1")}
                aria-hidden="true"
              />
            </LinkWithStyles>
            .
          </li>
          <li>
            GitHub:{" "}
            <LinkWithStyles
              href="https://github.com/caffeineeee"
              as="https://github.com/caffeineeee"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              caffeineeee
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
  );
}
