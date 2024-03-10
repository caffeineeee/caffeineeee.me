interface GuestbookLayoutProps {
	children: React.ReactNode;
}

export default async function GuestbookLayout({
	children,
}: GuestbookLayoutProps) {
	return (
		<div className="container grid max-w-3xl items-center">{children}</div>
	);
}
