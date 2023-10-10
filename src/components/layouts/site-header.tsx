"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  let pathname = usePathname()
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <span className="space-x-4">
          <a
            href="/"
            className={cn(
              "text-primary/60 hover:text-primary",
              pathname === "/" &&
                "font-bold text-primary underline decoration-dashed underline-offset-4"
            )}
          >
            home
          </a>
          <a
            href="/projects"
            className={cn(
              "text-primary/60 hover:text-primary",
              pathname === "/projects" &&
                "font-bold text-primary underline decoration-dashed underline-offset-4"
            )}
          >
            projects
          </a>
          <a
            href="/blog"
            className={cn(
              "text-primary/60 hover:text-primary",
              pathname === "/blog" &&
                "font-bold text-primary underline decoration-dashed underline-offset-4"
            )}
          >
            blog
          </a>
          <a
            href="/guestbook"
            className={cn(
              "text-primary/60 hover:text-primary",
              pathname === "/guestbook" &&
                "font-bold text-primary underline decoration-dashed underline-offset-4"
            )}
          >
            guestbook
          </a>
        </span>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
