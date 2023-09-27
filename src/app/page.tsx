import { Balancer } from "react-wrap-balancer";

import { Shell } from "@/components/shells/shell";

export default function IndexPage() {

  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          kepinsam.tech
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Personal site of Cevin Samuel
        </Balancer>
      </section>
    </Shell>
  );
}
