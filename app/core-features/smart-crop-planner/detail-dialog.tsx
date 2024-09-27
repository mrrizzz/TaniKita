import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Beaker, Thermometer, Sun } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

const DetailDialog: FC<PlantProps> = ({ plant }) => {
  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{plant.name}</DialogTitle>
      </DialogHeader>
      <div className="w-full relative pt-[33%]">
        <Image
          src={plant.imageUrl}
          alt="profile"
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Optimal Soil Types</h3>
              <p className="text-sm">Sandy loam or silty loam.</p>
              <p className="text-sm mt-2">6-6.5 (slightly acidic to neutral)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Fertilizers and Nutrients</h3>
              <p className="text-sm">Well-decomposed compost or manure.</p>
              <p className="text-sm mt-2">
                Small amounts of micronutrients like boron, magnesium, and zinc
                support optimal growth.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow col-span-2">
              <h3 className="font-semibold mb-2">Ideal Vegetation Condition</h3>
              <div className="flex items-center gap-2 mb-2">
                <Thermometer className="w-5 h-5" />
                <p className="text-sm">
                  The optimal growing temperature is between 24-30°C.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5" />
                <p className="text-sm">
                  Chili peppers require full sunlight (6-8 hours a day).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Best Planting Dates</h3>
          <div className="grid grid-rows-1 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Start planting:</p>
              <Calendar
                mode="single"
                selected={new Date(2024, 8, 14)}
                className="rounded-md border flex justify-center items-center"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Harvest time:</p>
              <Calendar
                mode="single"
                selected={new Date(2024, 8, 14)}
                className="rounded-md border flex justify-center items-center"
              />
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Link href={"./planting-new-plan"} className="w-full">
          <Button className="w-full mt-4">Start Planting</Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  );
};

export default DetailDialog;
