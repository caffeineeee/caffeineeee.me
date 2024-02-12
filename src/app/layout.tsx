import type { Metadata, Viewport } from "next";

import "@/app/globals.css";

import SessionProvider from "@/components/session-provider";
import { Analytics } from "@/components/analytics";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";

import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { bricolageGrotesque, dmSans } from "@/lib/fonts";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? ""),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Server Components",
		"Personal Site",
	],
	authors: [
		{
			name: "caffeineeee",
			url: "https://github.com/caffeineeee",
		},
	],
	creator: "caffeineeee",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: "@caffeeeeine",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	const session = await getServerSession();
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans",
						dmSans.variable,
						bricolageGrotesque.variable,
					)}
				>
					<Providers attribute="class" defaultTheme="system" enableSystem>
						<SiteHeader />
						<SessionProvider session={session}>
							<main className="flex-1">{children}</main>
						</SessionProvider>
						<SiteFooter />
						<TailwindIndicator />
						<Analytics />
					</Providers>
					<Toaster />
				</body>
			</html>
		</>
	);
}
