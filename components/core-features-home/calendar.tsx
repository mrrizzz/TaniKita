import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Cal = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 1)); 
  const [selectedDate, setSelectedDate] = useState(today);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (day: number) => {
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const selectDate = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const renderCalendarDays = () => {
    const days = [];
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 

    for (let i = 0; i < offset; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div 
          key={day} 
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full
            ${isSelected(day) ? 'bg-primary text-white' : ''}
            ${!isToday(day) && !isSelected(day) ? 'hover:bg-gray-200' : ''}
          `}
          onClick={() => selectDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full p-7">
      <div className="flex justify-between items-center  mb-5">
        <button onClick={prevMonth} className="p-1 text-white bg-primary rounded">
          <ChevronLeft size={40} />
        </button>
        <h3 className="text-2xl font-bold">
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button onClick={nextMonth} className="p-1 text-white bg-primary rounded">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 place-items-center">
        {DAYS.map(day => (
          <div key={day} className="w-8 h-8 flex items-center justify-center font-bold">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Cal;