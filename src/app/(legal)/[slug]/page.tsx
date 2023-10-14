import { Mdx } from "@/components/mdx-components";
import { Shell } from "@/components/shells/shell";
import { allLegals } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

async function getPostFromParams(slug: string) {
    const legal = allLegals.find((legal) => legal.slugAsParams === slug);
    if (!legal) notFound();

    return legal;
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
    const legal = await getPostFromParams(params.slug);
    return (
        <Shell className="gap-12" variant="markdown">
            <div className="tracking-tight text-neutral-600 dark:text-neutral-400">
                <Mdx code={legal.body.code} />
            </div>
        </Shell>
    );
}
