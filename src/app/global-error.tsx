"use client";

import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<h2>Something went wrong!</h2>
				<Button
					onClick={() => {
						reset();
						revalidatePath("/");
					}}
				>
					Try again
				</Button>
			</body>
		</html>
	);
}
