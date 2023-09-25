import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/kepinsamm",
  github: "https://github.com/kepinsam/kepinsam.tech",
  githubAccount: "https://github.com/kepinsam",
  discord: "https://discord.com/users/kepinsam",
};

export const siteConfig = {
  name: "kepinsam.tech",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://www.kepinsam.tech",
  ogImage: "https://www.kepinsam.tech/opengraph-image.png",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "skateshop",
          href: "https://skateshop.sadmn.com",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
