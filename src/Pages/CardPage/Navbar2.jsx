import React from "react";

export default function Navbar() {
  const categories = [
    "All",
    "Premium Picks",
    "In-Person Consultation",
    "Online_consultation",
    "Emergency Vet Care",
    "Exoctic Animals Care Specialists",
    "Athletics",
    "Works in Private Clinic",
    "Own a Clinic",
    "Dual Expertise",
    "Works for NHS",
    "Works for Agency",
    "Available Now",
    "Availability 24/7",

  ];

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
     

        {/* Category Buttons  */}
        <div className="flex space-x-4">
          {categories.map((item, index) => (
            <button
              key={index}
              className="font-[400px] text-[14px]  text-black "
            >
              {item}
            </button>
          ))}
        </div>

       
      </div>
    </nav>
  );
}
