'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { Menu, Bell, Settings, Search } from 'lucide-react';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('Smart Crop Planner');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (!isSmallScreen) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        onSelectMenu={(name) => setSelectedMenu(name)}
        isCollapsed={isSmallScreen || isSidebarCollapsed}
      />
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-md px-5 py-3 flex items-center sticky top-0 z-10 justify-between">
          <div>
            <div className='flex items-center gap-x-5'>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={toggleSidebar}>
              <Menu className="w-6 h-6" />
            </div>
              <h1 className="text-2xl font-bold text-primary">{selectedMenu}</h1>
            </div>
          </div>
          <div className='flex items-center gap-x-5 flex-grow ml-5 justify-end'>
            <div className='w-96 justify-end flex items-center gap-x-2 bg-slate-100 px-3 rounded-lg focus-within:outline'>
              <Search/>
              <input 
                  placeholder="Search all plants or your projects" 
                  className="w-full text-black border-none bg-transparent rounded-lg p-3 focus:outline-none group" 
                />
            </div>
            <Image src="/image.jpg" width={40} height={40} alt='Profil' className='border rounded-full object-cover w-10 h-10'></Image>
            <Settings className='w-6 h-6'/>
            <Bell className='w-6 h-6'/>
          </div>
        </header>
        <div className="p-7">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;