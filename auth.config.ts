import Google from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { LoginInput, LoginSchema } from "./lib/schemas";
import type { NextAuthConfig } from "next-auth";
import { getUsernameOrEmail } from "./data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        console.log("Google Profile:", profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),

    Credential({
      async authorize(credentials: LoginInput) {
        const validateFields = LoginSchema.safeParse(credentials);
        console.log(validateFields);

        if (validateFields.success) {
          const { emailOrUsername, password } = validateFields.data;

          const user = await getUsernameOrEmail(
            emailOrUsername,
            emailOrUsername,
          );
          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          console.log(passwordMatch);

          if (passwordMatch) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
  // cookies: {
  //   pkce: {
  //     name: "next-auth.pkce.code_verifier",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },
} satisfies NextAuthConfig;
