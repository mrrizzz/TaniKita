"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";

export default function AuthLinks() {
  const links = [
    { name: "Sign in", href: "/signup" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Button variant="outline" asChild>
        <Link href="/signup">Sign Up</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
