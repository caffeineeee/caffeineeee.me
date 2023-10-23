import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const targetDate = new Date(date);

  const fullDate = format(targetDate, "iiii, MMMM d, yyyy");

  return `${fullDate}`;
}
