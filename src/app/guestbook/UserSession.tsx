"use client";

import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { useSession } from "next-auth/react";
import Form from "./form";

export function UserSession() {
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