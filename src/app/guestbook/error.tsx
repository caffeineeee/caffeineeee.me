"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuestbookError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);
	const router = useRouter();
	return (
		<div>
			<h2>Something went wrong!</h2>
			<Button
				onClick={() => {
					router.refresh();
					reset();
				}}
			>
				Try again
			</Button>
		</div>
	);
}
