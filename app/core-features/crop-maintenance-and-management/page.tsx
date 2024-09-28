"use client"
import React, { useState } from "react";

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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DetailDialog from "../smart-crop-planner/detail-dialog";
import { CiSearch } from "react-icons/ci";
import { Checkbox } from "@/components/ui/checkbox";

const plantData = [
  {
    name: "Carrot",
    growthTime: 75,
    yield: 2,
    type: "vegetable",
    imageUrl: "/plants/carrot.jpg",
  },
  {
    name: "Tomato",
    growthTime: 60,
    yield: 5,
    type: "vegetable",
    imageUrl: "/plants/tomato.jpg",
  },
  {
    name: "Lettuce",
    growthTime: 45,
    yield: 1.5,
    type: "vegetable",
    imageUrl: "/plants/lettuce.jpg",
  },
  {
    name: "Cucumber",
    growthTime: 50,
    yield: 3,
    type: "vegetable",
    imageUrl: "/plants/cucumber.jpg",
  },
  {
    name: "Pepper",
    growthTime: 70,
    yield: 4,
    type: "vegetable",
    imageUrl: "/plants/pepper.jpg",
  },
  {
    name: "Rose",
    growthTime: 30,
    yield: 0,
    type: "flower",
    imageUrl: "/plants/rose.jpg",
  },
  {
    name: "Sunflower",
    growthTime: 70,
    yield: 0,
    type: "flower",
    imageUrl: "/plants/sunflower.jpg",
  },
];

const SmartCropPlanner = () => {
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState(" ");
  const [cardCount, setCardCount] = useState(6);
  let counter = 0;

  function handleSearch(term: string) {
    setSearchValue(term);
    console.log(searchValue);
  }

  function handleType(term: string) {
    setTypeValue(term);
    console.log(typeValue);
  }

  function handleMore() {
    if (cardCount === 6) setCardCount(plantData.length);
    else setCardCount(6);

    counter = 0;
  }

  return (
    <div>

      <div className="my-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold ">Maintenance and Manage Your Project</h2>
          {/* Konten halaman Smart Crop Planner */}
          <div>
            <Button variant="outline" className="mr-2">
              List Project
            </Button>
            <Button>Publish Calendar</Button>
          </div>
        </div>

        <div className="mb-2">
          <form action="">
            <div className="relative flex items-center">
              <CiSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <Input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                name="search"
                placeholder="Search plants"
                className="pl-10 lg:max-w-md"
              />
            </div>
          </form>
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
                    <TableCell>Project Name</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Due Date</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Checkbox id="terms1" /></TableCell>
                    <TableCell>Project's 1</TableCell>
                    <TableCell>Watering</TableCell>
                    <TableCell>08:00 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Checkbox id="terms1" /></TableCell>
                    <TableCell>Project's 2</TableCell>
                    <TableCell>Fertilizing</TableCell>
                    <TableCell>08:00 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Checkbox id="terms1" /></TableCell>
                    <TableCell>Project's 3</TableCell>
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
                    <TableCell>Project Name</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Due Date</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project's 1</TableCell>
                    <TableCell>Watering</TableCell>
                    <TableCell>Done</TableCell>
                    <TableCell>21 October 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project's 1</TableCell>
                    <TableCell>Fertilizing</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>21 October 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project's 2</TableCell>
                    <TableCell>Fertilizing</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>24 October 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project's 2</TableCell>
                    <TableCell>Watering</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>24 October 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project's 3</TableCell>
                    <TableCell>Pest Control</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>25 October 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4 my-2">
        {plantData.map((item, index) => {
          if (counter < cardCount) {
            if (searchValue === "" && typeValue === " ") {
              counter++;
              return (
                <Card className="overflow-hidden">
                  <div className="w-full relative pt-[33%]">
                    <Image
                      src={item.imageUrl}
                      alt="profile"
                      objectFit="cover"
                      fill
                      className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
                      <span className="text-sm text-gray-600">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="px-2 flex items-center justify-center">
                              <span className="p-2 text-[10px] md:text-[12px] line-clamp-1">
                                See Progress
                              </span>
                              <FaAngleRight className="text-md" />
                            </Button>
                          </DialogTrigger>
                          <DetailDialog plant={item} />
                        </Dialog>
                      </span>
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#E5E7EB"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-gray-200"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray="175.92"
                            strokeDashoffset="52.78"
                            fill="transparent"
                            className="text-green-500"
                          />
                        </svg>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                          70%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            } else {
              if (item.name.toLowerCase().match(searchValue)) {
                if (typeValue === item.type) {
                  counter++;
                  return (
                    <Card className="overflow-hidden">
                      <div className="w-full relative pt-[33%]">
                        <Image
                          src={item.imageUrl}
                          alt="profile"
                          objectFit="cover"
                          fill
                          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {item.name}
                        </h2>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            <Button className="flex items-center gap-2">
                              <span className="max-w-0 lg:w-full lg:max-w-max line-clamp-1">
                                See Progress
                              </span>
                              <FaAngleRight className="text-md" />
                            </Button>
                          </span>
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#E5E7EB"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-200"
                              />
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeDasharray="175.92"
                                strokeDashoffset="52.78"
                                fill="transparent"
                                className="text-green-500"
                              />
                            </svg>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                              70%
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                } else if (typeValue === " ") {
                  counter++;
                  return (
                    <Card className="overflow-hidden">
                      <div className="w-full relative pt-[33%]">
                        <Image
                          src={item.imageUrl}
                          alt="profile"
                          objectFit="cover"
                          fill
                          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {item.name}
                        </h2>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            <Button className="flex items-center gap-2">
                              <span className="max-w-0 lg:w-full lg:max-w-max line-clamp-1">
                                See Progress
                              </span>
                              <FaAngleRight className="text-md" />
                            </Button>
                          </span>
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#E5E7EB"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-200"
                              />
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeDasharray="175.92"
                                strokeDashoffset="52.78"
                                fill="transparent"
                                className="text-green-500"
                              />
                            </svg>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                              70%
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                } else {
                  return;
                }
              } else {
                return;
              }
            }
          }
        })}
      </div>

      <Separator className="my-4" />

      <div className="flex flex-grow items-center justify-center my-2">
        <Button
          className="flex gap-1 bg-transparent w-full hover:bg-slate-200 text-black"
          onClick={handleMore}
        >
          <span>{cardCount === 6 ? "Show more" : "Show less"}</span>{" "}
          {cardCount === 6 ? <FaAngleDown /> : <FaAngleUp />}
        </Button>
      </div>
    </div>
  );
};

export default SmartCropPlanner;
