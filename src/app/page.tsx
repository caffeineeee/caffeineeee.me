import { Balancer } from "react-wrap-balancer";

import { Shell } from "@/components/shells/shell";
import { revalidatePath } from "next/cache";

export default function IndexPage() {

  const intervDuration = 1000 * 60 * 60 * 24; // 24 hours
  setInterval(() => {
    revalidatePath("/", "layout"); // revalidating all data. See: https://nextjs.org/docs/app/api-reference/functions/revalidatePath#revalidating-all-data
  }, intervDuration);

  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          hey, I&apos;m caffeineeee👋
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          {new Date().getFullYear() - 2002} yo • he/him
        </Balancer>
        <Balancer className="max-w-[46rem] text-lg sm:text-xl">
          I&apos;m a full-stack web developer and a final-year Informatics
          undergrad student.
        </Balancer>
      </section>
    </Shell>
  );
}
