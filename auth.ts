import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { AuthError } from "next-auth";
import db from "./lib/db";

const prisma = new PrismaClient();

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign In Attempt:", { user, account, profile });
      const existingUser = await getUserById(user?.id);
      console.log("Existing User:", existingUser);
      // if (!existingUser || !existingUser.emailVerified) {
      //   return false;
      // }
      return true;
    },

    async session({ session, token }) {
      console.log("Session Callback - Input:", { session, token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      session.user.emailVerified = new Date();
      session.user.customField = "Testing";
      console.log("Session Callback - Output:", session);
      return session;
    },

    async jwt({ token }) {
      console.log("JWT Callback - Input:", token);
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      console.log("JWT Callback - Existing User:", existingUser);
      if (!existingUser) return token;
      console.log("JWT Callback - Output:", token);
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});

declare type ExtendedUser = DefaultSession["user"] & {
  customField: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
