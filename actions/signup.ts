"use server";

import bcrypt from "bcryptjs";
import { SignUpInput, signUpSchema } from "@/lib/schemas";
import db from "@/lib/db";
import { getUsernameOrEmail } from "@/data/user";

export const signup = async (values: SignUpInput) => {
  console.log(values);

  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { errors: "ERROR COY" };
  }

  const { username, name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUsernameOrEmail(username, email);

  if (existingUser) {
    return { errors: "Username or email already exists" };
  }

  await db.user.create({
    data: {
      username,
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "user created" };
};
