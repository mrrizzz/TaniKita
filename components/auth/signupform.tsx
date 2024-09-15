"use client";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { SignUpInput, signUpSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/actions/signup";
import { InputField } from "@/components/ui/input-field";

export function SignupForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: SignUpInput) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      signup(data).then((data) => {
        setError(data.errors);
        setSuccess(data.success);
      });
    });
  };

  const inputFields = [
    { name: "username", type: "text", placeholder: "Username" },
    { name: "name", type: "text", placeholder: "Your name" },
    { name: "email", type: "email", placeholder: "Email" },
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
            Let's Get Started, Farmer!
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
            type="submit"
            disabled={isPending}
          >
            Create New Account
          </Button>
          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-muted" />
            <span className="px-2 text-foreground">Or</span>
            <hr className="w-full border-muted" />
          </div>
          <Button
            variant="outline"
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            disabled={isPending}
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Continue with Google
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
