"use client";

import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
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

	return (
		<div>
			<h2>Something went wrong!</h2>
			<Button
				onClick={() => {
					reset();
					revalidatePath("/guestbook");
				}}
			>
				Try again
			</Button>
		</div>
	);
}
