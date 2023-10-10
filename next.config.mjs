import { withContentlayer } from "next-contentlayer"

import "./src/env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

export default withContentlayer(nextConfig)
