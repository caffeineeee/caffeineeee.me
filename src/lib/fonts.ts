import { DM_Sans, Bricolage_Grotesque } from "next/font/google";

export const bricolageGrotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bricolage-grotesque",
	fallback: ["system-ui", "arial"],
});

export const dmSans = DM_Sans({
	subsets: ["latin-ext"],
	display: "swap",
	variable: "--font-dm-sans",
	fallback: ["system-ui", "arial"],
});
