import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { Site } from "@/components/layouts/site";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { bricolageGrotesque, dmSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PlausibleProvider from "next-plausible";
import type { Metadata, Viewport } from "next";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans flex flex-col overflow-x-hidden",
          dmSans.variable,
          bricolageGrotesque.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // "light", "dark", "system"
          enableSystem={false} // Enable "system" theme
        >
          <PlausibleProvider domain="example.com" />
          <Site>
            {children}
            <SpeedInsights />
          </Site>
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
