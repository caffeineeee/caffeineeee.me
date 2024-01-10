import { clsx, type ClassValue } from "clsx";
import { formatDistance, subDays, format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const targetDate = new Date(date);

	const formattedDate = formatDistance(subDays(new Date(date), 0), new Date(), {
		addSuffix: true,
	});

	const fullDate = format(targetDate, "iiii, MMMM d, yyyy");

	return `${fullDate} (${formattedDate})`;
}
