import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Link from "next/link";

const MaintenanceProject = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentMonth = 'September 2024';

    // Mock data for events
    const events = [
        { date: 8, title: 'Event 1', color: 'bg-red-200' },
        { date: 10, title: 'Event 2', color: 'bg-red-200' },
        { date: 12, title: 'Event 3', color: 'bg-red-200' },
        { date: 15, title: 'Event 4', color: 'bg-blue-200' },
        { date: 16, title: 'Event 5', color: 'bg-blue-200' },
        { date: 23, title: 'Event 6', color: 'bg-green-200' },
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Crop Maintenance</h2>
            {/* Konten halaman Smart Crop Planner */}
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Your Project Name</h1>
                    <div>
                        <Link href={"./crop-maintenance-project"}>
                            <Button variant="outline" className="mr-2">
                                List Project
                            </Button>
                        </Link>
                        <Button>Publish Calendar</Button>
                    </div>
                </div>

                <Card className="w-full max-w-4xl mx-auto my-2">
                    <CardContent>
                        <div className="flex justify-between items-center mb-4">
                            <Button variant="ghost">&lt;</Button>
                            <h2 className="text-xl font-semibold">{currentMonth}</h2>
                            <Button variant="ghost">&gt;</Button>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {days.map(day => (
                                <div key={day} className="text-center font-semibold p-2">{day}</div>
                            ))}
                            {Array.from({ length: 30 }, (_, i) => i + 1).map(date => {
                                const event = events.find(e => e.date === date);
                                return (
                                    <div key={date} className={`border p-2 min-h-[80px] ${event ? event.color : ''}`}>
                                        <span className="font-semibold">{date}</span>
                                        {event && <p className="text-xs mt-1">{event.title}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MaintenanceProject;
