import million from "million/compiler";
import { withContentlayer } from "next-contentlayer";

import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    serverActions: true,
  },
};

const millionConfig = {
  // auto: true,
  // if you're using RSC:
  auto: { rsc: true },
};

export default million.next(withContentlayer(nextConfig, millionConfig));
