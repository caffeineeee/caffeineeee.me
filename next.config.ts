import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// experimental: {
	// 	ppr: true,
	// },
	reactStrictMode: true,
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// const withMDX = createMDX({
// // Add markdown plugins here, as desired
// });

export default nextConfig;
