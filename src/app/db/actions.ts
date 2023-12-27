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

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== 'cevinsam11@gmail.com') {
    throw new Error('Unauthorized');
  }

  const selectedEntriesAsNumbers = selectedEntries.map(Number);
  const arrayLiteral = `{${ selectedEntriesAsNumbers.join(',') }}`;

  await sql`
    DELETE FROM guestbook
    WHERE id = ANY(${ arrayLiteral }::int[])
  `;

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}

export async function deleteOwnGuestbookEntries(id: number) {
  try {
    await sql`
    DELETE FROM guestbook
    WHERE id = ${ id }::int
  `;
  } catch (error) {
    console.error("Error rendering Server components", error);
  }

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}