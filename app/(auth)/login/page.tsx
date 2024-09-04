import LoginForm from "@/app/components/loginformform";
import React from "react";

export const metadata = {
  title: "Login - TaniKita",
  description: "Sign in to your TaniKita account",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/api/placeholder/48/48"
            alt="TaniKita Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
