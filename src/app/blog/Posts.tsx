"use client";

import Link from "next/link";

type Props = {
	allBlogs: {
		metadata: {
			title: string;
			publishedAt: string;
		};
		slug: string;
	}[];
};

export const Posts = ({ allBlogs }: Props) => (
	<div className="space-y-10 mx-auto max-w-3xl my-20 text-2xl text-justify">
		<h1>Latest blog posts:</h1>
		<div>
			{allBlogs
				.filter((post) => post.metadata.publishedAt)
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<Link key={post.slug} href={`/blog/${post.slug}`}>
						<div className="w-full rounded-sm border-2 border-neutral-600 p-4">
							<h2 className="text-2xl">{post.metadata.title}</h2>
							<p className="text-neutral-500">
								{new Date(post.metadata.publishedAt).toDateString()}
							</p>
						</div>
					</Link>
				))}
		</div>
	</div>
);
