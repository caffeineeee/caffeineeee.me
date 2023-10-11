import million from "million/compiler";
import { withContentlayer } from "next-contentlayer";

import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

const millionConfig = {
  // auto: true,
  // if you're using RSC:
  auto: { rsc: true },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
export default million.next(withContentlayer(nextConfig, millionConfig));
