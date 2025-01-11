"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

export function CaffeineeeeMeCoverImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={cn(
        theme === "dark" || theme === "system"
          ? "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/caffeineeee.me-darkmode.png"
          : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/caffeineeee.me-lightmode.png"
      )}
      alt="Cover image of the project: caffeineeee.me"
      width={1024}
      height={1024}
      className="border border-neutral-800 dark:border-neutral-200 w-full"
    />
  );
}
