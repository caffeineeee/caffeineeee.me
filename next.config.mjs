import MillionLint from "@million/lint";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	ppr: true,
	// },
	reactStrictMode: true,
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

export default withMDX(MillionLint.next(nextConfig, { rsc: true }));
