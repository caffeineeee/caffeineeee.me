import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Shell } from "@/components/shells/shell";

export default async function IndexPage() {

  async function getGithubStars(): Promise<number | null> {
    try {
      const response = await fetch(
        "https://api.github.com/repos/kepinsam/kepinsam.tech",
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
          next: {
            revalidate: 60,
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      const data = (await response.json()) as { stargazers_count: number; };

      return data.stargazers_count;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  const githubStars = await getGithubStars();

  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        {githubStars ? (
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Badge
              aria-hidden="true"
              className="rounded-md px-3.5 py-1.5"
              variant="secondary"
            >
              <Icons.gitHub className="mr-2 h-3.5 w-3.5" />
              {githubStars} stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
        ) : null}
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          kepinsam.tech
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Personal site of Cevin Samuel
        </Balancer>
      </section>
    </Shell>
  );
}
