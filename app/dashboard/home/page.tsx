"use client";
import { Button } from "@/components/ui/button";
import SmartCropPlannerForm from "@/components/ui/smart-crop-planner";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return <SmartCropPlannerForm />;
}
