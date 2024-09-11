import AuthHeroSection from "@/app/components/auth/authhero";
import { LoginForm } from "@/app/components/auth/loginform";
import React from "react";

export const metadata = {
  title: "Login - TaniKita",
  description: "Sign in to your TaniKita account",
};

const LoginPage = () => {
  return (
    // px-4 sm:px-6 lg:px-8 justify-center
    <div className="flex h-screen bg-white">
      <AuthHeroSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
