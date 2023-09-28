"use client";

import { Shell } from "@/components/shells/shell";
import { usePathname } from "next/navigation";

import HelloWorld from '../hello.mdx';

export default function BlogPage() {

    const currentTab = usePathname();
    return (
        <Shell className="gap-12">
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
            >
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    {currentTab}
                </h1>
            </section>
            <HelloWorld />
        </Shell>
    );
}
