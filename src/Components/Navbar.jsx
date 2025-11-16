import { useState } from "react";
import logoImg from "../assets/HomePage/NavbarImages/NavLogo.svg";
import profileIcon from "../assets/HomePage/NavbarImages/Profile_Icon.svg";
import dropdownIcon from "../assets/HomePage/NavbarImages/dropdown_arrow.svg";
import dottedLine from "../assets/HomePage/NavbarImages/dottedLine.svg";
import GiftIcon from "../assets/HomePage/NavbarImages/Gift_Icon.svg";
import { Menu, X } from "lucide-react"; // for hamburger icons
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const DropDownMethod = () => setIsOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center bg-[#EAE6EF] px-6 md:px-12 py-3 relative">
      {/* Logo */}
      <img src={logoImg} alt="logo" className="w-32 md:w-40" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center py-3 px-6 gap-5 font-medium">
        <li className="flex items-center gap-1">
          <h1>Specialist</h1>
          <img src={dropdownIcon} alt="dropdown" />
        </li>

        <img src={dottedLine} alt="line" />

        <li>Reviews</li>

        <img src={dottedLine} alt="line" />

        <li className="flex items-center gap-2">
          <h1>Gift</h1>
          <img className="w-4 h-4" src={GiftIcon} alt="gift" />
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {/* Profile */}
        <div className="relative">
          <button
            onClick={DropDownMethod}
            className="flex items-center gap-3 border border-gray-400 rounded-full px-3 py-1"
          >
            <img
              src={profileIcon}
              alt="profile"
              className="w-10 h-10 shadow-lg bg-white/30 p-2 rounded-full"
            />
            <img src={dropdownIcon} alt="arrow" className="w-6 h-6" />
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-3 w-56 bg-white p-3 border border-black/20 z-20 flex flex-col gap-2 rounded-lg shadow-md">
              <li className="font-semibold">Customer</li>
              <Link to="/signIn" className="text-black/60">Sign Up</Link>
              <li>Memberships</li>
              <hr className="border-dotted border-gray-300" />
              <li className="font-semibold">Healthcare Professionals</li>
              <Link to="/signIn" className="text-black/60">Login</Link>
              <Link to="/signIn" className="text-black/60">Sign Up</Link>
              <li>Memberships</li>
            </ul>
          )}
        </div>

        <button className="border border-black px-4 py-2 rounded-full text-sm">
          Join HealthCare Professional
        </button>
        <button className="px-4 py-2 rounded-full bg-[#F3A391] text-sm">
          Find Local HealthCare
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white shadow"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#EAE6EF] border-t border-gray-300 shadow-lg md:hidden z-20">
          <ul className="flex flex-col items-center gap-3 py-4 font-medium">
            <li className="flex items-center gap-1">
              <h1>Specialist</h1>
              <img src={dropdownIcon} alt="dropdown" />
            </li>
            <li>Reviews</li>
            <li className="flex items-center gap-2">
              <h1>Gift</h1>
              <img className="w-4 h-4" src={GiftIcon} alt="gift" />
            </li>
            <hr className="border-gray-300 w-3/4" />
            <button className="border border-black px-4 py-2 rounded-full text-sm">
              Join HealthCare Professional
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F3A391] text-sm">
              Find Local HealthCare
            </button>

            <div className="mt-2">
              <button
                onClick={DropDownMethod}
                className="flex items-center gap-3 border border-gray-400 rounded-full px-3 py-1"
              >
                <img
                  src={profileIcon}
                  alt="profile"
                  className="w-10 h-10 shadow-lg bg-white/30 p-2 rounded-full"
                />
                <img src={dropdownIcon} alt="arrow" className="w-6 h-6" />
              </button>

              {isOpen && (
                <ul className="mt-3 bg-white p-3 border border-black/20  flex flex-col gap-2 rounded-lg shadow-md z-20">
                  <li className="font-semibold">Customer</li>
                  <Link to="/signIn" className="text-black/60">Login</Link>
                  <Link to="/signIn" className="text-black/60">Sign Up</Link>
                  <li>Memberships</li>
                  <hr className="border-dotted border-gray-300" />
                  <li className="font-semibold">Healthcare Professionals</li>
                  <Link to="/signIn" className="text-black/60">Login</Link>
                  <Link to="/signIn" className="text-black/60">Sign Up</Link>
                  <li>Memberships</li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
