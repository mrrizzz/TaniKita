import AuthHeroSection from "@/app/components/auth/authhero";
import { LoginForm } from "@/app/components/auth/loginform";
import { SignupForm } from "@/app/components/auth/signupform";
import { Card } from "@/components/ui/card";
import React from "react";

export const metadata = {
  title: "SignUp - TaniKita",
  description: "Sign up your new TaniKita account",
};

const SignupPage = () => {
  return (
    <div className="flex h-screen bg-white">
      <AuthHeroSection />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
