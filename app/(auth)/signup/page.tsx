import AuthHeroSection from "@/components/auth/authhero";
import { SignupForm } from "@/components/auth/signupform";
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
