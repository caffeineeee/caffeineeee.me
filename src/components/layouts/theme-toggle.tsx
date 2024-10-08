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
		return null;
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() =>
				setTheme(
					theme === "light" ? "dark" : "light",
					// Include "system" theme
					// theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
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
