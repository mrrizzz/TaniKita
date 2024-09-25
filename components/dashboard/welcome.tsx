import * as React from "react";
import { Button } from "../ui/button";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center h-full space-y-8">
      <h1 className="text-[3.5rem] font-bold text-left">
        Welcome to <span className="text-primary">TaniKita</span>
      </h1>
      <p className="text-lg text-left font-bold">
        Assisting farmers with effective agricultural management.
      </p>
      <Button className="w-2/5" size="lg">
        Get Started{" "}
        <span aria-hidden className="font-extrabold ml-3 text-xl">
          →
        </span>
      </Button>
    </div>
  );
}
