import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  username: z.string().regex(/^[a-zA-Z0-9._]+$/, {
    message:
      "Username hanya boleh mengandung huruf, angka, _ (underscore), dan . (titik), tanpa spasi",
  }),
  password: z.string().min(8).max(100),
});

export const LoginSchema = z.object({
  emailOrUsername: z.string().min(1),
  password: z.string().min(1),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
