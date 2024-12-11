"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode, type TouchEvent } from "react";
import { ThemeToggle } from "@/components/layouts/theme-toggle";

export function SiteHeader({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const router = useRouter(); // Initialize router

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
	}, [pathname, router]);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
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
