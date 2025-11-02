import dropdown_arrow from "../assets/HomePage/NavbarImages/dropdown_arrow.svg"
import loc_icon from "../assets/HomePage/SearchBar/loc_icon.svg"
import loc_icon2 from "../assets/HomePage/SearchBar/loc2_icon.svg"
import calender_icon from "../assets/HomePage/SearchBar/calender_icon.svg"
import time_icon from "../assets/HomePage/SearchBar/time_icon.svg"
import time_icon2 from "../assets/HomePage/SearchBar/time2_icon.svg"
import search_icon from "../assets/HomePage/SearchBar/search_icon.svg"
import S1 from "../assets/HomePage/SearchBar/S1.svg"
import S2 from "../assets/HomePage/SearchBar/S2.svg"
import S3 from "../assets/HomePage/SearchBar/S3.svg"
import S4 from "../assets/HomePage/SearchBar/S4.svg"
import S5 from "../assets/HomePage/SearchBar/S5.svg"
import S6 from "../assets/HomePage/SearchBar/S6.svg"
import S7 from "../assets/HomePage/SearchBar/S7.svg"
import S8 from "../assets/HomePage/SearchBar/S8.svg"
import S9 from "../assets/HomePage/SearchBar/S9.svg"
import S10 from "../assets/HomePage/SearchBar/S10.svg"
import S11 from "../assets/HomePage/SearchBar/S11.svg"
import S12 from "../assets/HomePage/SearchBar/S12.svg"
import S13 from "../assets/HomePage/SearchBar/S13.svg"
import S14 from "../assets/HomePage/SearchBar/S14.svg"
import dropdown_arrow2 from "../assets/HomePage/SearchBar/dropdown_arrow2.svg"
import { useState } from "react"

const SearchBar = () => {

   const [Specialist,setSpecialist]=useState(false) 
   const [location,setLocation]=useState(false)
   const [date,setDate]=useState(false)
   const [time,setTime]=useState(false)
   

     
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(11); 
  const [currentYear, setCurrentYear] = useState(2025);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // For aligning the first day correctly
  const emptySlots = Array(firstDayOfMonth).fill(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date.toDateString());
    setShowCalendar(false);
  };

   const SpecialistMethod=()=>{
      setSpecialist(prev=>!prev)
   }
   

   const locationMethod=()=>{
      setLocation(prev=>!prev)
   }

   const dateMethod=()=>{
      setDate(prev=>!prev)
   }

   const timeMethod=()=>{
      setTime(prev=>!prev)
   }

   const searchMethod=()=>{
      setSearch(prev=>!prev)
   }

  return (
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white/20 md:shadow-md   p-4 min-h-20 min-w-88 max-w-[1043px] mx-1 md:mx-auto mt-6 md:border-none border border-black/10 rounded-md">
      
      {/* Specialist */}
      <button 
      onClick={SpecialistMethod}
      className="flex items-center justify-between md:gap-2  ">
        <span className="font-semibold text-black/80">Type in a Specialist Name</span>
        <img className="font-semibold text-black/80" src={dropdown_arrow} alt="dropdown" />
      </button>
      {/* Set Speacialist */}

      {Specialist && 
       
      <div className="absolute top-12 md:top-22 bg-linear-to-b from-sky-50 via-rose-50 to-blue-50 border  border-rose-200 p-3 w-84 md:w-60 md:shadow-lg rounded-md z-10">
          <div className="flex gap-3 rounded-md border  border-gray-300 py-2 px-3.5 font-semibold text-[14px]"> 
            <h1>Select Specialist</h1>
            <img src={dropdown_arrow2} alt="dropdown" />
          </div>

          <ul className="flex flex-col gap-3">

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Physiotherapist</span>
              <img src={S1} alt="S1" />
            </li>

             {/* Dotted Line */}
            <div className="  border-t w-full border-dotted border-gray-400 "></div>

            <li className="flex gap-2">
                <span className="text-[14px] font-semibold">Occupational Therapist</span>
                <img  src={S2} alt="S2" />
            </li>  
             {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Nurse</span>
              <img src={S3} alt="S3" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Podiatrist</span>
              <img src={S4} alt="S4" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Optician</span>
              <img src={S5} alt="S5" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Chiropractor</span>
              <img src={S6} alt="S6" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Osteopath</span>
              <img src={S7} alt="S7" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Medical Vet</span>
              <img src={S8} alt="S8" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Sports Rehabilitator</span>
              <img src={S9} alt="S9" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Rehabilitation Assistant</span>
              <img src={S10} alt="S10" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Massage Therapist</span>
              <img src={S11} alt="S11" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>

            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Doctor</span>
              <img src={S12} alt="S12" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>
            
            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Midwife</span>
              <img src={S13} alt="S13" />
            </li>
            {/* Dotted Line */}
             <div className=" border-t w-full border-dotted border-gray-400"></div>
            
            <li className="flex gap-2">
              <span className="text-[14px] font-semibold">Carer/(HCA)</span>
              <img src={S14} alt="S14" />
            </li>
          </ul>
      </div>
        }

       
       {/* Dotted Line */}
      <div className="self-stretch  border-l border-dotted border-gray-400"></div>

      {/* Location */}
      <button 
      onClick={locationMethod}
      className="flex items-center  justify-between md:gap-2 ">
        <span className="font-semibold text-black/80">Choose your location</span>
        <img className="font-semibold text-black/80" src={loc_icon} alt="location" />
      </button>

      {/* Set location */}
      {location && 
      <div className="absolute top-30 md:top-22 gap-2.5 md:left-66 w-[378px] md:w-[228px] h-[76px] md:h-[66px] flex items-center justify-between md:justify-center  border border-black/10 px-4 md:px-0 md:shadow-lg  z-10 rounded-md ">
         <img className="border-none shadow-md rounded-full bg-gray-600" src={loc_icon2} alt="location" />
         <h1 className="font-semibold">Current Location</h1>
      </div>
      }

      {/* Dotted Line */}
      <div className="self-stretch   border-l border-dotted border-gray-400"></div>

      {/* Date */}
      <button 
      onClick={dateMethod}
      className="flex items-center justify-between md:gap-2">
        <span className="font-semibold text-black/80">Choose your Date</span>
        <img className="font-semibold text-black/80" src={calender_icon} alt="calendar" />
      </button>
      
      {/* Set Date */}
       {date && (
        <div className="absolute top-42 md:top-22 md:right-60 bg-white border border-gray-200 shadow-lg rounded-lg p-4 w-92 md:w-72 z-10">
          {/* Month header */}
          <div className="flex justify-between items-center mb-3">

            <button
              onClick={handlePrevMonth}
              className="px-2 py-1 rounded hover:bg-gray-100"
            >
              ‹
            </button>
            <span className="font-semibold text-gray-700">
              {monthNames[currentMonth]} {currentYear}
            </span>

            <button
              onClick={handleNextMonth}
              className="px-2 py-1 rounded hover:bg-gray-100"
            >
              ›
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 text-center gap-y-2">
            {emptySlots.map((_, index) => (
              <div key={index}></div>
            ))}
            {[...Array(daysInMonth)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDateClick(i + 1)}
                className={`py-1 rounded-full hover:bg-indigo-100 transition ${
                  selectedDate &&
                  new Date(selectedDate).getDate() === i + 1 &&
                  new Date(selectedDate).getMonth() === currentMonth
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
 
      {/* Dotted Line */}
      <div className="self-stretch   border-l border-dotted border-gray-400"></div>

      {/* Time */}
      <button 
      onClick={timeMethod}
      className="flex items-center justify-between md:gap-2 ">
        <span className="font-semibold text-black/80">9:00pm to 10:00pm</span>
        <img className="font-semibold text-black/80" src={time_icon} alt="time" />
      </button>

      {/* Set Time */}
      {time &&
      <div className="absolute py-5 px-3 top-54 md:top-22 md:right-0 ap-2.5 w-[398px] md:w-[292px]  flex flex-col  justify-start bg-white border border-black/10 rounded-md md:shadow-lg  z-10 ">

        <div className="flex gap-[5px] text-[20px] font-semibold text-black">
          <h1 className="">Now</h1>
          <img src={time_icon2} alt="time_icon2" />
        </div>

        <div className="flex gap-2.5 w-[268px] ">

          <div  className="flex  border border-black/20 rounded-md w-[129px] justify-between py-1.5 px-2 ">
            <h1 className="font-semibold ">From</h1>
            <img src={dropdown_arrow} alt="dropdown_arrow" />
          </div>

             <div className="flex   border border-black/20
              rounded-md w-[129px] justify-between py-1.5 px-2 ">
            <h1 className="font-semibold">To</h1>
            <img src={dropdown_arrow} alt="dropdown_arrow" />
          </div>
        </div>
      </div>
      }

      {/* Search Icon Button */}
      <button
      onClick={searchMethod}
      className="flex md:items-center justify-center py-4 bg-linear-to-r from-[#5B8DEF] to-[#A177F1] rounded-sm w-full md:w-[70px] md:h-[70px] ">
        <img src={search_icon} alt="search" className="w-6 h-6" />
      </button>
    </div>
  )
}

export default SearchBar
