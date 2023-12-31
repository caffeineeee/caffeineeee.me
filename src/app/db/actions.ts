'use server';

import { getServerSession, type Session } from 'next-auth';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';


async function getSession(): Promise<Session> {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  const entry = formData.get('entry')?.toString() || '';
  const body = entry.slice(0, 500);

  await sql`
    INSERT INTO guestbook (email, body, created_by, created_at)
    VALUES (${ email }, ${ body }, ${ created_by }, NOW())
  `;

  revalidatePath('/guestbook');
}

export async function deleteOwnGuestbookEntries(id: number) {
  try {
    await sql`
    DELETE FROM guestbook
    WHERE id = ${ id }::INTEGER
  `;
  } catch (error) {
    console.error("Error in deleteOwnGuestbookEntries: ", error);
  }

  revalidatePath('/guestbook');
}