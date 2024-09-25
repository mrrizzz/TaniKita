import React from "react";
import { Calendar, Info } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function SmartCropPlannerForm() {
  return (
    <div className="p-6 bg-green-50">
      <h1 className="text-2xl font-bold mb-6">New Planting Project</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Card>
            <CardHeader>Project Details</CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Name your project" />
              <Select>
                <option>Highland areas</option>
                <option>Lowland areas</option>
              </Select>
              <Select>
                <option>Tanaman cabai</option>
                <option>Tanaman padi</option>
              </Select>
              <div className="flex items-center space-x-2">
                <Input type="date" placeholder="Pick a date" />
                <Calendar className="h-5 w-5 text-gray-500" />
              </div>
              <Select>
                <option>Sandy soil</option>
                <option>Clay soil</option>
                <option>Loamy soil</option>
              </Select>
              <Input placeholder="Planting area (in sqm)" type="number" />
              <Select>
                <option>Drip irrigation</option>
                <option>Sprinkler system</option>
                <option>Flood irrigation</option>
              </Select>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>Crop Information</CardHeader>
            <CardContent>
              <img
                src="/api/placeholder/300/200"
                alt="Crop preview"
                className="w-full mb-4"
              />
              <p className="text-sm text-gray-600">
                Selected crop details and care instructions will appear here.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Weather Forecast</CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Weather information for the selected planting period will be
                displayed here.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Create Project
        </Button>
      </div>
    </div>
  );
}
