"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { SignInInput, signInSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInInput) => {
    const result = await signIn("credentials", {
      redirect: false,
      emailOrUsername: data.emailOrUsername,
      password: data.password,
    });

    if (result?.error) {
      setError("Invalid error or password");
    }
  };
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="text-center"
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
          ></Image>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back, Farmer!
          </h3>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email or Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
          {errors.emailOrUsername && (
            <span>{errors.emailOrUsername.message}</span>
          )}
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <Button className="w-full bg-primary text-white hover:bg-primary/90">
            Log In to Your Farm
          </Button>
          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-muted" />
            <span className="px-2 text-foreground">Or</span>
            <hr className="w-full border-muted" />
          </div>

          <Button
            onClick={() => signIn("google")}
            variant="outline"
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </Button>
          {error && <p>{error}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            New to TaniKita?{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              Create your free account
            </Link>
          </p>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Forgot password?{" "}
          <a href="#" className="text-primary hover:underline">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}
