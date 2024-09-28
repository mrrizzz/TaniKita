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
import ProjectDialog from "./project-dialog";
import Link from "next/link";

const MaintenanceProject = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Crop Maintenance</h2>
            {/* Konten halaman Smart Crop Planner */}
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Your Project Name</h1>
                    <div>
                        <Button variant="outline" className="mr-2">
                            List Project
                        </Button>
                        <Link href={"./calendar-maintenance-project"}>
                            <Button>Publish Calendar</Button>

                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-green-50">
                        <CardHeader>
                            <CardTitle>Crop Maintenance Reminders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-2">
                                Today, 21 October 2024
                            </p>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>CheckList</TableCell>
                                        <TableCell>Task</TableCell>
                                        <TableCell>Due Date</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Checkbox id="terms1" /></TableCell>
                                        <TableCell>Watering</TableCell>
                                        <TableCell>08:00 AM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Checkbox id="terms1" /></TableCell>
                                        <TableCell>Fertilizing</TableCell>
                                        <TableCell>08:00 AM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Checkbox id="terms1" /></TableCell>
                                        <TableCell>Pest Control</TableCell>
                                        <TableCell>07:00 AM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card className="bg-green-50">
                        <CardHeader>
                            <CardTitle>Upcoming Tasks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Task</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Due Date</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Watering</TableCell>
                                        <TableCell>Done</TableCell>
                                        <TableCell>21 October 2024</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Fertilizing</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>21 October 2024</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Fertilizing</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>24 October 2024</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Watering</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>24 October 2024</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Pest Control</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>25 October 2024</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-green-50">
                    <CardHeader>
                        <CardTitle>Crop Monitoring and Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHead>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Stage</TableCell>
                                    <TableCell>Health</TableCell>
                                    <TableCell>Yield Estimate</TableCell>
                                    <TableCell>Photo</TableCell>
                                    <TableCell>Progress</TableCell>
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                                {[...Array(5)].map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>24 October 2024</TableCell>
                                        <TableCell>Flowering</TableCell>
                                        <TableCell>Good</TableCell>
                                        <TableCell>3.5 grams</TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm">
                                                Upload Image
                                            </Button>
                                        </TableCell>
                                        <TableCell>10%</TableCell>
                                        <TableCell>
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Button variant="ghost" size="sm">
                                                        ✏️
                                                    </Button>
                                                </DialogTrigger>
                                                <ProjectDialog />
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MaintenanceProject;
