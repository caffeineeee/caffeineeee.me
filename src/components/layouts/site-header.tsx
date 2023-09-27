"use client";

import { ThemeToggle } from "./theme-toggle";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export function SiteHeader() {

  const currentTab = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <span className="space-x-4">
          <a
            href="/"
            className={
              cn("text-primary/60 hover:text-primary",
                currentTab === "/" && "font-bold text-primary underline decoration-dashed underline-offset-4")
            }>
            home
          </a>
          <a
            href="/projects"
            className={
              cn("text-primary/60 hover:text-primary",
                currentTab === "/projects" && "font-bold text-primary underline decoration-dashed underline-offset-4")
            }>
            projects
          </a>
          <a
            href="/blog"
            className={
              cn("text-primary/60 hover:text-primary",
                currentTab === "/blog" && "font-bold text-primary underline decoration-dashed underline-offset-4")
            }>
            blog
          </a>
          <a
            href="/guestbook"
            className={
              cn("text-primary/60 hover:text-primary",
                currentTab === "/guestbook" && "font-bold text-primary underline decoration-dashed underline-offset-4")
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
