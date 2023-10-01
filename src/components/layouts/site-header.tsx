"use client";

import { ThemeToggle } from "./theme-toggle";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export function SiteHeader() {

  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <span className="space-x-4">
          <a
            href="/"
            className={
              cn("text-primary/60 hover:text-primary",
                pathname === "/" && "text-primary font-bold underline decoration-dashed underline-offset-4")
            }>
            home
          </a>
          <a
            href="/projects"
            className={
              cn("text-primary/60 hover:text-primary",
                pathname === "/projects" && "text-primary font-bold underline decoration-dashed underline-offset-4")
            }>
            projects
          </a>
          <a
            href="/blog"
            className={
              cn("text-primary/60 hover:text-primary",
                pathname === "/blog" && "text-primary font-bold underline decoration-dashed underline-offset-4")
            }>
            blog
          </a>
          <a
            href="/guestbook"
            className={
              cn("text-primary/60 hover:text-primary",
                pathname === "/guestbook" && "text-primary font-bold underline decoration-dashed underline-offset-4")
            }>
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
  );
}
