import dropdown_arrow from "../assets/HomePage/NavbarImages/dropdown_arrow.svg";
import loc_icon from "../assets/HomePage/SearchBar/loc_icon.svg";
import loc_icon2 from "../assets/HomePage/SearchBar/loc2_icon.svg";
import calender_icon from "../assets/HomePage/SearchBar/calender_icon.svg";
import time_icon from "../assets/HomePage/SearchBar/time_icon.svg";
import time_icon2 from "../assets/HomePage/SearchBar/time2_icon.svg";
import search_icon from "../assets/HomePage/SearchBar/search_icon.svg";
import S1 from "../assets/HomePage/SearchBar/S1.svg";
import S2 from "../assets/HomePage/SearchBar/S2.svg";
import S3 from "../assets/HomePage/SearchBar/S3.svg";
import S4 from "../assets/HomePage/SearchBar/S4.svg";
import S5 from "../assets/HomePage/SearchBar/S5.svg";
import S6 from "../assets/HomePage/SearchBar/S6.svg";
import S7 from "../assets/HomePage/SearchBar/S7.svg";
import S8 from "../assets/HomePage/SearchBar/S8.svg";
import S9 from "../assets/HomePage/SearchBar/S9.svg";
import S10 from "../assets/HomePage/SearchBar/S10.svg";
import S11 from "../assets/HomePage/SearchBar/S11.svg";
import S12 from "../assets/HomePage/SearchBar/S12.svg";
import S13 from "../assets/HomePage/SearchBar/S13.svg";
import S14 from "../assets/HomePage/SearchBar/S14.svg";
import dropdown_arrow2 from "../assets/HomePage/SearchBar/dropdown_arrow2.svg";

import { useState } from "react";

const SearchBar = () => {
  const [Specialist, setSpecialist] = useState(false);
  const [location, setLocation] = useState(false);
  const [date, setDate] = useState(false);
  const [time, setTime] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(11);
  const [currentYear, setCurrentYear] = useState(2025);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptySlots = Array(firstDayOfMonth).fill(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setDate(false);
  };

  return (
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white/20 md:shadow-md p-4 max-w-[1043px] mx-2 md:mx-auto mt-6 border border-black/10 md:border-none rounded-md">

      {/* Specialist */}
      <button
        onClick={() => setSpecialist(!Specialist)}
        className="flex items-center justify-between gap-2 w-full md:w-auto"
      >
        <span className="font-semibold text-black/80">Type in a Specialist Name</span>
        <img src={dropdown_arrow} alt="dropdown" />
      </button>

      {/* Specialist Dropdown */}
      {Specialist && (
        <div className="absolute left-0 md:left-auto top-full mt-2 bg-white border p-3 w-full md:w-60 rounded-md shadow-md z-10">
          <div className="flex gap-3 border px-3 py-2 rounded-md">
            <h1 className="font-semibold text-sm">Select Specialist</h1>
            <img src={dropdown_arrow2} alt="" />
          </div>

          <ul className="mt-3 flex flex-col gap-3 h-[260px] overflow-y-auto pr-2">

            {[
              ["Physiotherapist", S1],
              ["Occupational Therapist", S2],
              ["Nurse", S3],
              ["Podiatrist", S4],
              ["Optician", S5],
              ["Chiropractor", S6],
              ["Osteopath", S7],
              ["Medical Vet", S8],
              ["Sports Rehabilitator", S9],
              ["Rehabilitation Assistant", S10],
              ["Massage Therapist", S11],
              ["Doctor", S12],
              ["Midwife", S13],
              ["Carer/(HCA)", S14],
            ].map(([name, icon], i) => (
              <div key={i}>
                <li className="flex items-center justify-between text-sm font-semibold">
                  {name}
                  <img src={icon} alt={name} />
                </li>

                {/* dotted divider */}
                {i !== 13 && <div className="border-t border-dotted border-gray-400"></div>}
              </div>
            ))}
          </ul>
        </div>
      )}

      {/* Divider for desktop */}
      <div className="hidden md:block self-stretch border-l border-dotted border-gray-400"></div>

      {/* Location */}
      <button
        onClick={() => setLocation(!location)}
        className="flex items-center justify-between gap-2 w-full md:w-auto"
      >
        <span className="font-semibold text-black/80">Choose your location</span>
        <img src={loc_icon} alt="loc" />
      </button>

      {location && (
        <div className="absolute left-0 md:left-auto top-full mt-2 bg-white px-4 py-3 w-full md:w-56 rounded-md shadow-md border z-10 flex items-center gap-3">
          <img src={loc_icon2} className="bg-gray-600 rounded-full p-1" />
          <h1 className="font-semibold">Current Location</h1>
        </div>
      )}

      {/* Divider */}
      <div className="hidden md:block self-stretch border-l border-dotted border-gray-400"></div>

      {/* Date */}
      <button
        onClick={() => setDate(!date)}
        className="flex items-center justify-between gap-2 w-full md:w-auto"
      >
        <span className="font-semibold text-black/80">Choose your Date</span>
        <img src={calender_icon} alt="" />
      </button>

      {date && (
        <div className="absolute right-0 top-full mt-2 bg-white border shadow-lg rounded-lg p-4 w-full md:w-72 z-10">
          {/* Header */}
          <div className="flex justify-between mb-3">
            <button onClick={handlePrevMonth}>‹</button>
            <span className="font-semibold">{monthNames[currentMonth]} {currentYear}</span>
            <button onClick={handleNextMonth}>›</button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <span>{d}</span>)}
          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7 text-center gap-y-2">
            {emptySlots.map(() => <div></div>)}

            {[...Array(daysInMonth)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDateClick(i+1)}
                className={`py-1 rounded-full ${
                  selectedDate?.getDate() === i+1 &&
                  selectedDate?.getMonth() === currentMonth
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-100 text-gray-700"
                }`}
              >
                {i+1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="hidden md:block self-stretch border-l border-dotted border-gray-400"></div>

      {/* Time */}
      <button
        onClick={() => setTime(!time)}
        className="flex items-center justify-between gap-2 w-full md:w-auto"
      >
        <span className="font-semibold text-black/80">9:00pm to 10:00pm</span>
        <img src={time_icon} alt="" />
      </button>

      {time && (
        <div className="absolute right-0 top-full mt-2 bg-white border shadow-md p-4 rounded-md w-full md:w-[292px] flex flex-col gap-3 z-10">
          <div className="flex items-center gap-1 text-xl font-semibold">
            Now <img src={time_icon2} />
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-between border px-2 py-1 rounded-md w-1/2">
              <h1 className="font-semibold">From</h1>
              <img src={dropdown_arrow} />
            </div>
            <div className="flex items-center justify-between border px-2 py-1 rounded-md w-1/2">
              <h1 className="font-semibold">To</h1>
              <img src={dropdown_arrow} />
            </div>
          </div>
        </div>
      )}

      {/* Search button */}
      <button className="flex items-center justify-center py-4 bg-linear-to-r from-[#5B8DEF] to-[#A177F1] rounded-sm w-full md:w-[70px] md:h-[70px]">
        <img src={search_icon} className="w-6 h-6" />
      </button>

    </div>
  );
};

export default SearchBar;
