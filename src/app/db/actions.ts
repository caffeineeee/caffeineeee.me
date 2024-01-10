"use server";

import { getServerSession, type Session } from "next-auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

async function getSession(): Promise<Session> {
	const session = (await getServerSession(authOptions)) as Session;
	if (!session || !session.user) {
		throw new Error("Unauthorized");
	}

	return session;
}

export async function saveGuestbookEntry(formData: FormData) {
	const session = await getSession();
	const email = session.user?.email as string;
	const created_by = session.user?.name as string;

	if (!session.user) {
		throw new Error("Unauthorized");
	}

	const entry = formData.get("entry")?.toString() || "";
	const body = entry.slice(0, 500);

	await sql`
    INSERT INTO guestbook (email, body, created_by, created_at)
    VALUES (${email}, ${body}, ${created_by}, NOW())
  `;

	revalidatePath("/guestbook");

	// const data = await fetch("https://api.emaillabs.net.pl/api/new_sendmail", {
	// 	method: "POST",
	// 	headers: {
	// 		Authorization: `Bearer ${process.env.RESEND_SECRET}`,
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify({
	// 		from: "cevin.samuel@yahoo.com",
	// 		to: "cevinsam11@gmail.com",
	// 		subject: "New Guestbook Entry",
	// 		html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
	// 	}),
	// });

	// const response = await data.json();
	// console.log("Email sent", response);

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "cevinsam11@gmail.com",
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: "cevinsam11@gmail.com",
		to: "cevin.samuel@yahoo.com",
		subject: "New Guestbook Entry",
		html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			throw new Error(error.message);
		}
		console.log("Email sent", info.response);
		return true;
	});
}

export async function deleteOwnGuestbookEntries(id: number) {
	try {
		await sql`
    DELETE FROM guestbook
    WHERE id = ${id}::INTEGER
  `;
	} catch (error) {
		console.error("Error in deleteOwnGuestbookEntries: ", error);
	}

	revalidatePath("/guestbook");
}
