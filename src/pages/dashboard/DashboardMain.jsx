  import React from "react";
  import {
    FaShoppingCart,
    FaDollarSign,
    FaChartLine,
    FaInfoCircle,
  } from "react-icons/fa";

  const cardData = [
    {
      id: 1,
      title: "Dues - Amount: 64750",
      value: 27,
      color: "bg-red-500",
      icon: <FaShoppingCart />,
    },
    {
      id: 2,
      title: "Total Income This Year",
      value: 5000,
      color: "bg-blue-400",
      icon: <FaDollarSign />,
    },
    {
      id: 3,
      title: "Income This Month",
      value: 5000,
      color: "bg-green-500",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      title: "Income Today",
      value: 0,
      color: "bg-blue-700",
      icon: <FaChartLine />,
    },
    {
      id: 5,
      title: "Expense This Month",
      value: 0,
      color: "bg-green-600",
      icon: <FaInfoCircle />,
    },
    {
      id: 6,
      title: "Total Expense This Year",
      value: 0,
      color: "bg-red-600",
      icon: <FaInfoCircle />,
    },
    {
      id: 7,
      title: "Profit This Month",
      value: 5000,
      color: "bg-yellow-500",
      icon: <FaChartLine />,
    },
    {
      id: 8,
      title: "Expense Today",
      value: 0,
      color: "bg-cyan-500",
      icon: <FaShoppingCart />,
    },
  ];
    

  function DashboardTop() {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col justify-between rounded-lg text-white p-4 h-32 shadow-md ${card.color}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{card.value}</h2>
                <p className="text-sm">{card.title}</p>
              </div>
              <div className="text-4xl opacity-30">{card.icon}</div>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span>More info</span>
              <FaInfoCircle className="text-white text-xs" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default DashboardTop;
