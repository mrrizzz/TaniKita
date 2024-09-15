"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex justify-center items-center">
      <h1>HELLOOOOOOOOOOOO</h1>
      <div>
        <Button onClick={() => router.push("/login")} size="lg">
          HALLOOOOO SELAMAT BERHASIL LOGIN
        </Button>
      </div>
    </main>
  );
}
