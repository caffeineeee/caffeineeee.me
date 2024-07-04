"use client";

import { Tweet } from "@/components/tweet";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { highlight } from "sugar-high";

type Props = {
	metadata: {
		title: string;
		publishedAt: string;
	};
	mdxSource: MDXRemoteSerializeResult;
};

export const Post = ({ metadata, mdxSource }: Props) => (
	<div className="space-y-10 my-20 w-full">
		<div className="mx-auto w-full max-w-64">
			<h1>{metadata.title}</h1>
			<p>{formatDate(metadata.publishedAt)}</p>
		</div>
		<div className="prose prose-quoteless prose-neutral prose-invert max-w-none w-full px-3 sm:px-0 mx-auto space-y-0">
			<MDXRemote
				{...mdxSource}
				components={{
					h1: (props) => <h1 {...props} />,
					h2: (props) => <h2 {...props} />,
					h3: (props) => <h3 {...props} />,
					h4: (props) => <h4 {...props} />,
					h5: (props) => <h5 {...props} />,
					h6: (props) => <h6 {...props} />,
					code: ({ children, ...props }) => {
						const codeHTML = highlight(children?.toString() ?? "");
						return (
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							<code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
						);
					},
					Tweet,
					Youtube: ({ id }: { id: string }) => (
						<div className="w-full">
							<div
								style={{
									position: "relative",
									paddingBottom: "64.63195691202873%",
									height: 0,
									width: "100%",
								}}
							>
								<iframe
									src={`https://www.youtube.com/embed/${id}`}
									allowFullScreen
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
									title="YouTube video embed"
								/>
							</div>
						</div>
					),
				}}
			/>
		</div>
	</div>
);

function formatDate(date: string) {
	const currentDate = new Date().getTime();
	if (!date.includes("T")) {
		const updatedDate = `${date}T00:00:00`;
		return updatedDate;
	}
	const targetDate = new Date(date).getTime();
	const timeDifference = Math.abs(currentDate - targetDate);
	const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	const fullDate = new Date(date).toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	if (daysAgo < 1) {
		("Today");
	} else if (daysAgo < 7) {
		return `${fullDate} (${daysAgo}d ago)`;
	} else if (daysAgo < 30) {
		const weeksAgo = Math.floor(daysAgo / 7);
		return `${fullDate} (${weeksAgo}w ago)`;
	} else if (daysAgo < 365) {
		const monthsAgo = Math.floor(daysAgo / 30);
		return `${fullDate} (${monthsAgo}mo ago)`;
	} else {
		const yearsAgo = Math.floor(daysAgo / 365);
		return `${fullDate} (${yearsAgo}y ago)`;
	}
}
