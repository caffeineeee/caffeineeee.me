import { type Session, getServerSession } from "next-auth";
import { SignOut } from "./buttons";

export async function SignedInAs() {
    const session = await getServerSession() as Session;
    const name = session.user?.name as string;

    return (
        <>
            <p className="-mt-4 text-sm">Signed in as {name}</p>
            <SignOut />
        </>
    );
}