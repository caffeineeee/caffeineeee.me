interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  return (
    <div className="container grid max-w-3xl items-center gap-12 py-8 pt-6 md:py-10 lg:py-10">
      <div className="tracking-tight text-neutral-600 dark:text-neutral-400">
      </div>
    </div>
  );
}
