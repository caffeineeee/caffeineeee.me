import { Mdx } from "@/components/mdx-components";
import { Shell } from "@/components/shells/shell";
import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

export default async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params.slug);
  return (
    <Shell className="gap-12" variant="markdown">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h1>
        <p className="font-bold tracking-tight text-neutral-600 dark:text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
      </div>

      <div className="tracking-tight text-neutral-600 dark:text-neutral-400">
        <Mdx code={post.body.code} />
      </div>
    </Shell>
  );
}
