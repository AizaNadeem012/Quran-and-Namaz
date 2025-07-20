import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace with your own logic
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin123"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" as const }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 