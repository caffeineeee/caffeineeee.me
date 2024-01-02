import { differenceInYears } from "date-fns";
import { revalidatePath } from "next/cache";

export default function IndexPage() {

  const intervDuration = 1000 * 60 * 60 * 24; // 24 hours
  setInterval(() => {
    revalidatePath("/", "layout"); // revalidating all data. See: https://nextjs.org/docs/app/api-reference/functions/revalidatePath#revalidating-all-data
  }, intervDuration);

  const myYearsOfAge = differenceInYears(new Date(), new Date(2002, 2, 11)); // Note: Months are 0-indexed in JavaScript, so March is 2.

  return (
    <div className="container grid items-center  gap-12 pb-8 pt-6 md:py-8">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          hey, I&apos;m caffeineeee👋
        </h1>
        <div className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          {myYearsOfAge} yo • he/him
        </div>
        <div className="max-w-[46rem] text-lg sm:text-xl">
          I&apos;m a full-stack web developer and a final-year Informatics
          undergrad student.
        </div>
      </section>
    </div>
  );
}
