"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode, type TouchEvent } from "react";
import { ThemeToggle } from "@/components/layouts/theme-toggle";

export function SiteHeader({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const router = useRouter(); // Initialize router
	const [isAnimating, setIsAnimating] = useState(false); // State for animation
	const [animationDirection, setAnimationDirection] = useState<
		"left" | "right" | ""
	>(""); // State for animation direction

	useEffect(() => {
		// Function to handle swipe direction
		let startX: number;

		function handleTouchStart(e: TouchEvent) {
			startX = e.touches[0].clientX; // Get the starting x-coordinate of the touch
		}

		function handleTouchEnd(e: TouchEvent) {
			const endX = e.changedTouches[0].clientX; // Get the ending x-coordinate of the touch
			const distance = endX - startX; // Calculate the swipe distance
			const swipeThreshold = 50; // Minimum swipe distance to trigger navigation

			if (Math.abs(distance) > swipeThreshold) {
				setIsAnimating(true); // Start animation
				setAnimationDirection(distance > 0 ? "right" : "left"); // Set animation direction

				if (distance > 0) {
					// Swiped right
					if (pathname === "/projects") {
						router.push("/"); // Navigate to home
					} else if (pathname === "/guestbook") {
						router.push("/projects"); // Navigate to projects
					}
				} else {
					// Swiped left
					if (pathname === "/") {
						router.push("/projects"); // Navigate to projects
					} else if (pathname === "/projects") {
						router.push("/guestbook"); // Navigate to guestbook
					}
				}
			}
		}

		// Attach touch event listeners
		document.addEventListener(
			"touchstart",
			// TODO: fix this type error
			handleTouchStart as unknown as EventListener,
		);
		document.addEventListener(
			"touchend",
			// TODO: fix this type error
			handleTouchEnd as unknown as EventListener,
		);

		// Clean up event listeners on component unmount
		return () => {
			document.removeEventListener(
				"touchstart",
				// TODO: fix this type error
				handleTouchStart as unknown as EventListener,
			);
			document.removeEventListener(
				"touchend",
				// TODO: fix this type error
				handleTouchEnd as unknown as EventListener,
			);
		};
	}, [pathname, router]); // Dependencies to re-run effect when pathname or router changes

	useEffect(() => {
		if (isAnimating) {
			const timer = setTimeout(() => {
				setIsAnimating(false);
				setAnimationDirection(""); // Reset animation direction
			}, 100); // Duration of the animation
			return () => clearTimeout(timer);
		}
	}, [isAnimating]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-b bg-background transition-transform duration-100",
				isAnimating
					? animationDirection === "right"
						? "translate-x-2"
						: "-translate-x-2"
					: "translate-x-0",
			)}
		>
			<div className="container flex h-16 items-center">
				<span className="space-x-4">
					<a
						href="/"
						className={cn(
							"text-primary/80 hover:text-primary",
							pathname === "/" &&
								"font-bold text-primary underline decoration-dashed underline-offset-4",
						)}
					>
						home
					</a>
					{/* <a
						href="/blog"
						className={cn(
							"text-primary/80 hover:text-primary",
							pathname === "/blog" &&
								"font-bold text-primary underline decoration-dashed underline-offset-4",
						)}
					>
						blog
					</a> */}
					<a
						href="/projects"
						className={cn(
							"text-primary/80 hover:text-primary",
							pathname === "/projects" &&
								"font-bold text-primary underline decoration-dashed underline-offset-4",
						)}
					>
						projects
					</a>
					<a
						href="/guestbook"
						className={cn(
							"text-primary/80 hover:text-primary",
							pathname === "/guestbook" &&
								"font-bold text-primary underline decoration-dashed underline-offset-4",
						)}
					>
						guestbook
					</a>
				</span>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						{children}
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
