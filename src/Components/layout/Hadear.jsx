import React from "react";
import { FaUserCircle, FaSignOutAlt, FaBars } from "react-icons/fa";

const Hadear = ({ setIsOpen }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-[#092a5f] text-white">
      {/* Left Section - Icons */}
      <div className="hidden md:flex items-center gap-3 flex-wrap">
        {/* Reusable Notification Button */}
        {[
          { icon: FaUserCircle, alt: "Notification" },
          { icon: FaSignOutAlt, alt: "Plus" },
          { icon: FaUserCircle, alt: "Doc" },
          { icon: FaUserCircle, alt: "Message" },
          { icon: FaUserCircle, alt: "Profile" },
        ].map((icon, index) => (
          <div className="relative" key={index}>
            <button className="relative p-2 rounded">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
              <icon.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        ))}
      </div>

      {/* Right Section - User Info and Log Out Button */}
      <div className="flex flex-row items-center gap-4 sm:justify-between justify-center">
        <button className="sm:hidden text-2xl" onClick={() => setIsOpen(true)}>   
          <FaBars />
        </button>
        <div className="flex items-center gap-2">
          <FaUserCircle className="w-7 h-7 rounded-full" />
        </div>
        <span className="text-sm sm:text-base font-semibold">Admin Name</span>
        <button className="sm:flex-1 sm:order-none order-last bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 absolute md:relative right-4 md:right-auto">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Hadear;
