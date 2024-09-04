import React from "react";

export const metadata = {
  title: "Sign Up - TaniKita",
  description: "Create your TaniKita account",
};

const SignUpPage = () => {
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
            Create your account
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
