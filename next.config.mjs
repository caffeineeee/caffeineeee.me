await import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
