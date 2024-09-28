"use client";
import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaPlusSquare,
  FaAngleDown,
  FaAngleUp,
  FaEye,
  FaAngleRight,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { it } from "node:test";
import DetailDialog from "./detail-dialog";
import Link from "next/link";

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
    <div className='grid grid-cols-12 gap-x-5'>
      <h2 className="text-2xl font-bold mb-4">Smart Crop Planner</h2>

      <div className="flex flex-row gap-2">
        <Link href={"./planting-new-plan"}>
          <Button className="flex items-center gap-2">
            <span>Planting new plant</span> <FaPlusSquare className="text-xl" />
          </Button>
        </Link>

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

      <div className="my-2">
        <Select
          onValueChange={(e) => {
            handleType(e);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-700">
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="flower">Flowers</SelectItem>
              <SelectItem value="vegetable">Vegetables</SelectItem>
              <SelectItem value=" ">All type</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-4" />

      <div className="flex my-2">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
        >
          {plantData.map((item, index) => {
            return (
              <SwiperSlide>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Separator className="my-4" />

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
