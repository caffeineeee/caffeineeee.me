import { Post } from "@/app/blog/[slug]/Post";
import Foo from "@/content/foo.mdx";
import { getBlogPosts } from "@/db/blog";
import type { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	const post = getBlogPosts().find(
		(post) => post.slug === params.slug && post.metadata.publishedAt,
	);
	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
	const ogImage = image
		? `${process.env.NEXT_PUBLIC_APP_URL}${image}`
		: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function ContentPage({
	params,
}: { params: { slug: string } }) {
	const posts = getBlogPosts().find(
		(post) => post.slug === params.slug && post.metadata.publishedAt,
	);

	if (!posts) {
		notFound();
	}
	const mdxSource = await serialize(posts.content);

	return (
		<div className="container grid items-center pb-8 pt-6 md:py-8">
			<Post metadata={posts.metadata} mdxSource={mdxSource} />
		</div>
	);
}
