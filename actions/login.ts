"use server";

import { SignInInput, signInSchema } from "@/lib/schemas";

export const login = async (values: SignInInput) => {
  console.log(values);

  const validateFields = signInSchema.safeParse(values);

  if (!validateFields.success) {
    return { errors: "ERROR COY" };
  }

  return { success: "Email sent" };
};
