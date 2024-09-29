import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProjectDialog = ({ }) => {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Your task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <Label htmlFor="task" className="text-">
                    Task
                </Label>
                <div className="grid grid-cols-4 items-center gap-4">
                    <div className="col-span-3 space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="watering" />
                            <label htmlFor="watering">Watering</label>
                            <span className="ml-auto">08:00 AM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="fertilizing" />
                            <label htmlFor="fertilizing">Fertilizing</label>
                            <span className="ml-auto">08:00 AM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="pestControl" />
                            <label htmlFor="pestControl">Pest Control</label>
                            <span className="ml-auto">07:00 AM</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-left">
                        Date
                    </Label>
                    <Input id="date" value="24 October 2024" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stage" className="text-left">
                        Stage
                    </Label>
                    <Input id="stage" value="Flowering" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="health" className="text-left">
                        Health
                    </Label>
                    <Input id="health" value="Excellent" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="yieldEstimate" className="text-left">
                        Yield Estimate
                    </Label>
                    <Input id="yieldEstimate" value="2.5 grams" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="photo" className="text-left">
                        Photo
                    </Label>
                    <div className="col-span-3 h-32 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image uploaded</span>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default ProjectDialog;