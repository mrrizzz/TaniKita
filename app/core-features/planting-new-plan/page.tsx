"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { nullable } from "zod";

const vegetableData: { name: string; growthTime: number; yield: number }[] = [
  { name: "Carrot", growthTime: 75, yield: 2 },
  { name: "Tomato", growthTime: 60, yield: 5 },
  { name: "Lettuce", growthTime: 45, yield: 1.5 },
  { name: "Cucumber", growthTime: 50, yield: 3 },
  { name: "Pepper", growthTime: 70, yield: 4 },
];

const PlantingNewPlan = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">New Planting Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-green-50">
          <CardContent className="p-6">
            <form action="./smart-crop-planner">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name your project:
                  </label>
                  <Input id="project-name" placeholder="Name your project" />
                </div>
                <div>
                  <label
                    htmlFor="plant-select"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Choose plant:
                  </label>
                  <Select>
                    <SelectTrigger id="plant-select">
                      <SelectValue placeholder="Talaman cabai" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      <SelectItem value="talaman-cabai">
                        Talaman cabai
                      </SelectItem>
                      {/* Add more plant options here */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="soil-condition"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your soil condition:
                  </label>
                  <Select>
                    <SelectTrigger id="soil-condition">
                      <SelectValue placeholder="Sandy soil" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="sandy-soil">Sandy soil</SelectItem>
                      <SelectItem value="sandy-soil">Sandy soil</SelectItem>
                      <SelectItem value="sandy-soil">Sandy soil</SelectItem>
                      <SelectItem value="sandy-soil">Sandy soil</SelectItem>
                      <SelectItem value="sandy-soil">Sandy soil</SelectItem>
                      {/* Add more soil condition options here */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="area-condition"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your areas condition:
                  </label>
                  <Select>
                    <SelectTrigger id="area-condition">
                      <SelectValue placeholder="Highland areas" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      <SelectItem value="highland-areas">
                        Highland areas
                      </SelectItem>
                      {/* Add more area condition options here */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="planting-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Start planting date:
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date!}
                        onSelect={(e) => {
                          setDate(e);
                        }}
                        initialFocus
                        className="bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white">
                Create Project
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Crop Information</h3>
              <p className="text-sm text-gray-600">
                Selected crop details and care instructions will appear here.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Weather Forecast</h3>
              <p className="text-sm text-gray-600">
                Weather information for the selected planting period will be
                displayed here.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlantingNewPlan;
