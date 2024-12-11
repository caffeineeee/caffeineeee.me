import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { AccountMenu } from "@/components/layouts/account-menu";
import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import SessionProvider from "@/components/session-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { auth } from "@/server/auth";
import { bricolageGrotesque, dmSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { Session } from "next-auth";

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
	const session = (await auth()) as Session;
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans flex flex-col",
					dmSans.variable,
					bricolageGrotesque.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark" // "light", "dark", "system"
					enableSystem={false} // Enable "system" theme
				>
					<SiteHeader>
						<AccountMenu session={session} />
					</SiteHeader>
					<SessionProvider session={session}>
						<main className="flex-1">
							{children}
							<SpeedInsights />
						</main>
					</SessionProvider>
					<SiteFooter />
					<TailwindIndicator />
					<Analytics />
				</ThemeProvider>
				<SonnerToaster
					richColors
					position="top-right"
					toastOptions={{
						classNames: {
							title: "text-base",
							description: "text-sm",
						},
					}}
				/>
			</body>
		</html>
	);
}
