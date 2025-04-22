  import React from "react";
  import {
    FaPlus, FaUserFriends, FaDollarSign, FaShoppingCart, FaHeart,
    FaChartLine, FaInfoCircle, FaEnvelope, FaUndo, FaBell,
    FaEdit, FaClipboard, FaCheckCircle, FaList, FaBook,
    FaGlobe, FaFolder,
  } from "react-icons/fa";

  const icons = [
    { id: 1, icon: <FaPlus />, color: "bg-blue-600" },
    { id: 2, icon: <FaUserFriends />, color: "bg-red-500" },
    { id: 3, icon: <FaDollarSign />, color: "bg-green-600" },
    { id: 4, icon: <FaShoppingCart />, color: "bg-cyan-500" },
    { id: 5, icon: <FaHeart />, color: "bg-pink-500" },
    { id: 6, icon: <FaChartLine />, color: "bg-yellow-500" },
    { id: 7, icon: <FaInfoCircle />, color: "bg-black" },
    { id: 8, icon: <FaEnvelope />, color: "bg-blue-700" },
    { id: 9, icon: <FaUndo />, color: "bg-red-600" },
    { id: 10, icon: <FaBell />, color: "bg-green-500" },
    { id: 11, icon: <FaEdit />, color: "bg-cyan-600" },
    { id: 12, icon: <FaClipboard />, color: "bg-yellow-400" },
    { id: 13, icon: <FaCheckCircle />, color: "bg-green-600" },
    { id: 14, icon: <FaList />, color: "bg-gray-800" },
    { id: 15, icon: <FaBook />, color: "bg-blue-500" },
    { id: 16, icon: <FaGlobe />, color: "bg-red-500" },
    { id: 17, icon: <FaFolder />, color: "bg-cyan-500" },
  ];

  const DashboardTop = () => {
    return (
      <div className="bg-blue-900 w-[350px] my-2 mx-auto md:mx-4 md:flex md:justify-center md:w-auto p-2 rounded-lg overflow-x-auto">
        <div className="flex gap-3 whitespace-nowrap min-w-max">
          {icons.map((item) => (
            <div
              key={item.id}
              className={`w-10 h-10 ${item.color} text-white rounded-md flex items-center justify-center hover:opacity-80 transition-all duration-200`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default DashboardTop;

