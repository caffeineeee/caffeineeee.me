"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Swiper, SwiperSlide } from "swiper/react";
import PlausibleProvider from "next-plausible";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Site({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <PlausibleProvider domain="caffeineeee.me">
        <header className="sticky top-0 z-50 w-full border-b bg-background h-24 flex items-center justify-between px-4 md:px-8">
          <div className="flex md:space-x-4 flex-col md:flex-row justify-self-center items-start md:items-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-wider"
            >
              caffeineeee.me
            </Link>
            <nav className="flex space-x-4">
              <Link
                href="/"
                className={cn(
                  "text-primary/80 hover:text-primary",
                  pathname === "/" &&
                    "font-bold text-primary underline decoration-dashed underline-offset-4"
                )}
              >
                home
              </Link>
              <Link
                href="/projects"
                className={cn(
                  "text-primary/80 hover:text-primary",
                  pathname === "/projects" &&
                    "font-bold text-primary underline decoration-dashed underline-offset-4"
                )}
              >
                projects
              </Link>
            </nav>
          </div>
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1">
          <Swiper
            onInit={() => {
              // FIXME: Ensure this 'hack' won't be needed.
              // Problem: Without this hack, whenever the app is loaded initially and not in the `/` page (homepage), it will redirect the user to the homepage.
              // Steps to reproduce: Copy and paste this URL to your browser: "http://localhost:3000/projects"(when running locally) or "https://caffeineeee.me/projects"(when accessing the production version).
              // Expected behavior: The page stays in the `/projects` page.
              // Actual behavior: The app redirects the user to the `/` page.
              if (pathname === "/") router.push("/");
              else if (pathname === "/projects") router.push("/projects");
              else router.push("/");
            }}
            onSlidePrevTransitionEnd={() => {
              if (pathname === "/") router.push("/projects");
            }}
            onSlideNextTransitionEnd={() => {
              if (pathname === "/projects") router.push("/");
            }}
            onSlideChange={(swiper) => {
              swiper.slideTo(1);
            }}
            initialSlide={1}
          >
            <SwiperSlide className="min-h-screen"></SwiperSlide>
            <SwiperSlide tabIndex={1} className="min-h-screen">
              {children}
            </SwiperSlide>
            <SwiperSlide className="min-h-screen"></SwiperSlide>
          </Swiper>
        </main>
        <SiteFooter />
      </PlausibleProvider>
    </>
  );
}
