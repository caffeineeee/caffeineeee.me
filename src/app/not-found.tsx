import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import notFound from "public/notFound.jpg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center">
			<Card className="m-8 flex max-w-md flex-col items-center justify-center bg-stone-950 text-center">
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
					<Button type="button" className="">
						<Link href="/">Return home</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
