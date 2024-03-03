import MillionLint from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		ppr: true,
	},
	reactStrictMode: true,
};

export default MillionLint.next(nextConfig, { rsc: true });
