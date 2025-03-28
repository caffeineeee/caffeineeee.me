"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="min-w-10 min-h-10" />; // Prevent rendering until mounted
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() =>
				setTheme(
					theme === "light" ? "dark" : "light",
					// Enable "system" theme
					// theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
					// Change the property of `<ThemeProvider>` too to enable system theme.
				)
			}
			className="dark:bg-neutral-700 hover:dark:bg-inherit bg-neutral-300 hover:bg-inherit"
		>
			<Icons.sun
				className={cn("absolute h-5 w-5", theme === "light" ? "" : "hidden")}
			/>
			<Icons.moon
				className={cn("absolute h-5 w-5", theme === "dark" ? "" : "hidden")}
			/>
			{/* Include "system" theme */}
			{/* <Icons.laptop
				className={cn("absolute h-5 w-5", theme === "system" ? "" : "hidden")}
			/> */}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
