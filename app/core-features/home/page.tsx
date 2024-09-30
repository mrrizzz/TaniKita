"use client";
import React from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import Cal from '@/components/core-features-home/calendar';
import ToDoList from '@/components/core-features-home/to-do-list';
import ProjectCard from '@/components/core-features-home/project-card';


const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-x-5'>
      <div className='col-span-8  gap-y-5 flex flex-col'>
        <h3 className="font-bold text-2xl text-primary">Welcome Back User !</h3>
        <div className="relative bg-white min-h-72 rounded-2xl shadow-md overflow-hidden">
          <div className="bg-[url('/image.jpg')] bg-cover bg-[center_top_-7rem] h-full w-full absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="relative p-6 z-1 text-white flex flex-col justify-end h-full">
            <p className="text-sm mb-2">02 September 2024</p>
            <h3 className="text-lg font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quidem ipsa veritatis sequi aspernatur repellendus, expedita obcaecati nobis dicta provident.
            </h3>
          </div>
        </div>

        <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col gap-y-5'>
          <div className='flex justify-between items-center'>
            <h3 className="font-bold text-2xl text-primary">Recently Project</h3>
            <Link href="" className='flex gap-x-2 pe-2 hover:pe-0 transition-all duration-300'>
              View All
              <MoveRight />
            </Link>
          </div>
          <div>
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
      <div className='col-span-4 flex flex-col gap-y-5'>
        <div className='bg-primary min-h-52 rounded-2xl shadow-md flex items-center p-7 justify-between'>
          <div className='text-white flex flex-col gap-y-5'>
            <h2 className='font-bold text-4xl'>Planting new plant</h2>
            <span>Start a New Plant Project</span>
          </div>
          <Link href={"./planting-new-plan"} className='w-20 h-20 bg-white rounded-lg flex items-center justify-center hover:scale-95 active:scale-75 transition-all duration-300'>
            <span className='font-bold text-5xl'>+</span>
          </Link>
        </div>
        <div className='bg-white rounded-2xl shadow-md'>
          <Cal></Cal>
        </div>
        <div className='bg-white rounded-2xl shadow-md p-7'>
          <ToDoList></ToDoList>
        </div>
      </div>
    </div>
  );
};

export default Home;