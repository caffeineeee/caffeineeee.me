"use client";

import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { useSession } from "next-auth/react";
import Form from "./form";

type Props = {};

export function UserSession(props: Props) {
    const { data: session } = useSession();

    return (
        <>
            {session?.user ? (
                <>
                    <Form />
                    <SignOut />
                </>
            ) : (
                <SignIn />
            )}
        </>
    );
};