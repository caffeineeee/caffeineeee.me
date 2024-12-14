"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import {
	useEffect,
	useRef,
	useState,
	type ReactNode,
	type TouchEvent,
} from "react";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { AccountMenu } from "@/components/layouts/account-menu";
import { SiteFooter } from "@/components/layouts/site-footer";
import type { Session } from "next-auth";

export function Site({
	children,
	// accountMenu,
	session,
}: {
	children: ReactNode;
	// accountMenu: ReactNode;
	session: Session;
}) {
	const pathname = usePathname();
	const router = useRouter(); // Initialize router
	const [bodyTranslateX, setBodyTranslateX] = useState(0);
	const lastTranslateXRef = useRef(0); // Use a ref to store the last translateX value
	const MAX_TRANSLATE_X = 100; // Set the maximum translateX value (in pixels)
	// "Reduce state updates" approach
	const THRESHOLD = 10; // Set the distance threshold for updating the bodyTranslateX (in pixels)

	// Handle swipe direction
	useEffect(() => {
		let startX: number;

		function handleTouchStart(e: TouchEvent) {
			startX = e.touches[0].clientX; // Get the starting x-coordinate of the touch
			setBodyTranslateX(0); // Reset body transform on touch start
		}

		function handleTouchMove(e: TouchEvent) {
			const currentX = e.touches[0].clientX; // Get the current x-coordinate of the touch
			const distance = currentX - startX; // Calculate the distance

			// "Reduce state updates" approach
			// Clamp the distance to the maximum translate value
			const clampedDistance = Math.min(
				Math.max(distance, -MAX_TRANSLATE_X),
				MAX_TRANSLATE_X,
			);

			// Update only if the change exceeds the threshold
			if (Math.abs(clampedDistance - lastTranslateXRef.current) >= THRESHOLD) {
				setBodyTranslateX(clampedDistance); // Set body transform based on clamped distance
				lastTranslateXRef.current = clampedDistance; // Update the last applied translateX value
			}
		}

		function handleTouchEnd(e: TouchEvent) {
			const endX = e.changedTouches[0].clientX; // Get the ending x-coordinate of the touch
			const distance = endX - startX; // Calculate the swipe distance
			const SWIPE_THRESHOLD = 50; // Minimum swipe distance to trigger navigation

			if (Math.abs(distance) > SWIPE_THRESHOLD) {
				setBodyTranslateX(0); // Reset body transform on touch start
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
			} else {
				// Reset body position if swipe is not enough
				setBodyTranslateX(0); // Reset body transform on touch start
			}
		}

		// Attach touch event listeners
		document.addEventListener(
			"touchstart",
			// TODO: fix this type error
			handleTouchStart as unknown as EventListener,
		);
		document.addEventListener(
			"touchmove",
			// TODO: fix this type error
			handleTouchMove as unknown as EventListener,
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
				"touchmove",
				// TODO: fix this type error
				handleTouchMove as unknown as EventListener,
			);
			document.removeEventListener(
				"touchend",
				// TODO: fix this type error
				handleTouchEnd as unknown as EventListener,
			);
		};
	}, [pathname, router]); // Dependencies to re-run effect when pathname or router changes
	return (
		<>
			<header className={cn("sticky top-0 z-50 w-full border-b bg-background")}>
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
							<AccountMenu session={session} />
							<ThemeToggle />
						</nav>
					</div>
				</div>
			</header>
			<main
				style={{ transform: `translateX(${bodyTranslateX}px)` }}
				className={cn("flex-1 transition-transform overflow-hidden")}
			>
				{children}
			</main>
			<SiteFooter />
		</>
	);
}
