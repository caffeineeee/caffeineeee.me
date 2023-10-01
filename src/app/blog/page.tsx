import { Shell } from "@/components/shells/shell";
import { allPosts } from 'contentlayer/generated';
import Link from "next/link";

export function formatDate(date: string) {
    const currentDate = new Date();
    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = '';

    if (yearsAgo > 0) {
        formattedDate = `${ yearsAgo }y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${ monthsAgo }mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${ daysAgo }d ago`;
    } else {
        formattedDate = 'Today';
    }

    const fullDate = targetDate.toLocaleString('en-us', {
        weekday: "long",
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return `${ fullDate } (${ formattedDate })`;
}

export default function BlogPage() {

    return (
        <Shell className="gap-12" variant="markdown">
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
            >
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    Read my blog posts
                </h1>
            </section>
            <div className="flex flex-col space-y-8">
                {allPosts
                    .sort((a, b) => {
                        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                            return -1;
                        }
                        return 1;
                    })
                    .map((post) => (
                        <Link
                            key={post.slug}
                            href={`.${ post.slug }`}
                        >
                            <div className="flex w-full flex-row justify-between">
                                <h1 className="font-bold text-neutral-900 dark:text-neutral-100">
                                    {post.title}
                                </h1>
                                <p className="font-semibold tracking-tighter text-neutral-600 dark:text-neutral-400">
                                    {formatDate(post.publishedAt)}
                                </p>
                            </div>
                            <p className="tracking-tight text-neutral-600 dark:text-neutral-400">
                                {post.description}
                            </p>
                        </Link>
                    ))}
            </div>
        </Shell>
    );
}
