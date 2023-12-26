import { redirect } from 'next/navigation';
import Form from './form';
import { getGuestbookEntries } from '../db/queries';
import { type Session, getServerSession } from 'next-auth';

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  const session = await getServerSession() as Session;
  if (session?.user?.email !== 'cevinsam11@gmail.com') {
    redirect('/');
  }

  const entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
