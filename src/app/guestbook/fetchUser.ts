import { headers } from "next/headers";

export interface User {
    name: string;
}

export async function fetchUser() {
    const resp = await fetch("http://localhost:3000/api/whoAmI", {
        method: "GET",
        headers: headers(),
    }).then((res) => res.json());

    return (resp as User);
}