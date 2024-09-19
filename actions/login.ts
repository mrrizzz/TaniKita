"use server";

import { signIn } from "@/auth";
import { LoginInput, LoginSchema } from "@/lib/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: LoginInput) => {
  console.log(values);

  const validateFields = LoginSchema.safeParse(values);
  console.log(validateFields);

  if (!validateFields.success) {
    return { errors: "ERROR COY" };
  }

  const { emailOrUsername, password } = validateFields.data;
  console.log(emailOrUsername, password);
  // return { success: "logged in" };

  try {
    await signIn("credentials", {
      emailOrUsername,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credential" };

        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
