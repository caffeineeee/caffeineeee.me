import { Shell } from "@/components/shells/shell";
import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
  return (
    <Shell className="gap-12" variant="markdown">
      <h1 className="text-3xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
        read my blog posts
      </h1>
      <div className="flex flex-col space-y-8">
        {allPosts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link key={post.slug} href={`.${post.slug}`}>
              <div className="flex w-full flex-row justify-between">
                <h2 className="font-bold text-neutral-900 dark:text-neutral-100">
                  {post.title}
                </h2>
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
