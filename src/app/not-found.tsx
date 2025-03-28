"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import notFound from "../../public/notFound.jpg";

export default function NotFound() {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className="flex flex-col items-center">
			<Card className="m-8 flex max-w-md flex-col items-center justify-center text-center">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						404 Page not found
						<Separator className="mt-2 w-full" />
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Image
						className="p-2"
						src={notFound}
						alt="404 page not found"
						width={375}
						height={300}
					/>
					<p className="pb-2">There is no &ldquo;{pathname}&rdquo; page.</p>
					<Button
						type="button"
						variant="secondary"
						onClick={() => {
							router.refresh();
						}}
					>
						<Link href="/" as="/">
							Return home
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
