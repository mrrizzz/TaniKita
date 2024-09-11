import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(4).max(100),
  email: z.string().email(),
  username: z.string().min(5).max(20),
  password: z.string().min(8).max(100),
});

export const signInSchema = z.object({
  emailOrUsername: z.string().min(5),
  password: z.string().min(5),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
