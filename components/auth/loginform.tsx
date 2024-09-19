"use client";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LoginInput, LoginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { login } from "@/actions/login";
import { InputField } from "@/components/ui/input-field";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    console.log(data);
    setError("");
    setSuccess("");
    startTransition(() => {
      login(data).then((data) => {
        setError(data?.errors ?? "");
      });
    });
  };

  const googleOnClick = (providers: string) => {
    signIn(providers, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  const inputFields = [
    { name: "emailOrUsername", type: "text", placeholder: "Email or Username" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

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
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back, Farmer!
          </h3>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              register={register}
              errors={errors}
              disabled={isPending}
            />
          ))}
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90"
            disabled={isPending}
            type="submit"
          >
            Log In to Your Farm
          </Button>
          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-muted" />
            <span className="px-2 text-foreground">Or</span>
            <hr className="w-full border-muted" />
          </div>

          <Button
            disabled={isPending}
            onClick={() => googleOnClick("google")}
            variant="outline"
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
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
