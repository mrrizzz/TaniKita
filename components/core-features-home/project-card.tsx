import React from 'react';
import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-24 overflow-hidden">
            <Image src="/image.jpg" width={40} height={40} alt='Progress' className='w-full h-full object-cover'></Image>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Cabai</h3>
            <div className="flex items-center justify-between">
              <button className="bg-green-800 text-white px-3 py-1 rounded-md text-sm">
                See Progress
              </button>
              <div className="relative w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;