export default function HomePage() {
	return (
		<div className="container grid items-center pb-8 pt-6 md:py-8">
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
			>
				<h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] font-display">
					hey, I&apos;m caffeineeee👋
				</h1>
				<div className="max-w-[46rem] text-base">
					I&apos;m a full-stack web developer and a final-year Informatics
					undergrad student.
				</div>
			</section>
		</div>
	);
}
