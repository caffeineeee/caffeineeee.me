import NextAuth from "next-auth/next";

import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions);
// console.log(handler);

export { handler as GET, handler as POST };