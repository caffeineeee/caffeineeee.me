interface GuestbookLayoutProps {
	children: React.ReactNode;
}

export default async function GuestbookLayout({
	children,
}: GuestbookLayoutProps) {
	return (
		<div className="container grid max-w-3xl items-center gap-12 py-8 pt-6 md:py-10 lg:py-10">
			{children}
		</div>
	);
}
