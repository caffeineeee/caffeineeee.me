import Link from "next/link";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4 flex-col md:flex-row"
        >
          <p className="flex-1 text-left text-sm leading-loose text-neutral-900 dark:text-neutral-200">
            caffeineeee.me &copy; 2022-{currentYear}
          </p>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.email}
              as={siteConfig.links.email}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.mail className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              as={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.linkedin className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              as={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.xcom className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">X.com (formerly Twitter)</span>
            </Link>
            <Link
              href={siteConfig.links.githubAccount}
              as={siteConfig.links.githubAccount}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
