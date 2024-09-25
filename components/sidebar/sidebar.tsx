'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Home, Lightbulb, NotepadText, LogOut } from 'lucide-react';

interface SidebarProps {
  onSelectMenu: (name: string) => void;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectMenu, isCollapsed }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>('Home');

  const menuItems = [
    { name: 'Home', href: '/core-features/home', icon: Home },
    { name: 'Smart Crop Planner', href: '/core-features/smart-crop-planner', icon: Lightbulb },
    { name: 'Crop Maintenance', href: '/core-features/crop-maintenance-and-management', icon: NotepadText },
  ];

  const handleMenuClick = (name: string) => {
    setSelectedMenu(name);
    onSelectMenu(name);
  };

  return (
    <aside className={`bg-primary text-white h-screen p-5 flex flex-col transition-all duration-300 
      ${isCollapsed ? 'w-20' : 'lg:w-64'} md:w-20 sm:w-20`}>
      <Link href="/core-features/home" className="pb-3 border-b flex gap-3 items-center" onClick={() => handleMenuClick('Home')}>
        <div className="flex-shrink-0">
          <Image src="/tanikita-logo-white.png" width={42} height={40} alt="TaniKita Logo" />
        </div>
        {!isCollapsed && <h1 className="text-2xl font-bold hidden lg:block">TaniKita</h1>}
      </Link>
      <nav className='mt-5 flex-1'>
        <ul>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} onClick={() => handleMenuClick(item.name)}>
              <li
                className={`mb-2 flex items-center text-white hover:bg-green-700 p-2 rounded gap-x-5 
                ${selectedMenu === item.name ? 'bg-green-700' : ''}`}
              >
                <div>
                  <item.icon className="text-white" />
                </div>
                {!isCollapsed && <span className="text-nowrap hidden lg:inline">{item.name}</span>}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Link href="">
        <div className="mt-auto w-full flex items-center text-gray-400 hover:bg-red-500 hover:text-white group p-2 rounded gap-x-5">
          <div>
            <LogOut className="text-gray-400 group-hover:text-white" />
          </div>
          {!isCollapsed && <span className="text-nowrap hidden lg:inline">Logout</span>}
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
