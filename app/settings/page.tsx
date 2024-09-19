import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Coba() {
  const session = await auth();

  async function handleSignOut() {
    "use server";
    console.log("handleSignOut executing");
    await signOut();
    console.log("signOut completed");
    redirect("/login");
  }

  return (
    <main className="flex justify-center items-center">
      <h1>HELLOOOOOOOOOOOO</h1>
      <div>
        HALLOOOOO SELAMAT BERHASIL LOGIN
        {JSON.stringify(session)}
        <form action={handleSignOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
    </main>
  );
}
