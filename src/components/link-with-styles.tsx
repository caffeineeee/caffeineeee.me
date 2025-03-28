import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import type { UrlObject } from "url";

export function LinkWithStyles({
  children,
  href,
  as,
  target,
  rel,
  className,
  ...props
}: {
  children?: ReactNode;
  href: string | UrlObject;
  as?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "align-middle break-all gap-1 underline font-bold underline-offset-2 w-fit text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 *:inline",
        className
      )}
      href={href}
      as={as}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}
