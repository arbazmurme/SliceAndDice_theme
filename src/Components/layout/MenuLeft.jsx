import { SiIbeacon } from "react-icons/si";
import { FaCog, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuLeft = ({ isOpen, setIsOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [activeSubSubIndex, setActiveSubSubIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
    setActiveSubSubIndex(null);
  };

  const toggleSubMenu = (index) => {
    setActiveSubIndex(index === activeSubIndex ? null : index);
    setActiveSubSubIndex(null);
  };

  const toggleSubSubMenu = (index) => {
    setActiveSubSubIndex(index === activeSubSubIndex ? null : index);
  };

  const menuItems = [
    {
      title: "Add-Edit",
      icon: <FaCog />,
      subItems: [
        {
          title: "Super Category",
          icon: <FaArrowRight />,
          subItems: [
            {
              title: "Add Super Category",
              icon: <FaArrowRight />,
              path: "/admin/super-category/add",
            },
            {
              title: "List Super Category",
              icon: <FaArrowRight />,
              path: "/admin/super-category/list",
            },
          ],
        },
        {
          title: "Sub Category",
          icon: <FaCog />,
          subItems: [
            {
              title: "Add Sub Category",
              path: "/add-edit/sub-category/add",
            },
            {
              title: "List Sub Category",
              path: "/add-edit/sub-category/list",
            },
          ],
        },
      ],
    },
    {
      title: "Reports",
      icon: <FaCog />,
      path: "/reports",
    },
  ];

  return (
    <aside
      className={`fixed z-50 top-0 left-0 h-full w-64 flex-shrink-0 bg-[#092a5f] text-white transform transition-transform duration-300 ease-in-out
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } sm:translate-x-0 sm:static sm:flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <SiIbeacon className="text-2xl" />
          <span className="text-lg font-bold">Dashboard</span>
        </div>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="space-y-1">
            <button
              onClick={() => toggleMenu(index)}
              className={`w-full text-left flex items-center p-2 rounded-lg hover:bg-white hover:text-[#092a5f] transition-all duration-200`}
            >
              <span className="mr-2">{menuItem.icon}</span>
              <span className="text-sm font-medium">{menuItem.title}</span>
              {menuItem.subItems && <FaChevronDown className="ml-auto" />}
            </button>

            {activeIndex === index && menuItem.subItems && (
              <ul className="pl-4 space-y-1">
                {menuItem.subItems.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <button
                      onClick={() => toggleSubMenu(subIndex)}
                      className={`text-sm text-left w-full p-1 flex items-center text-white hover:text-gray-200
                     `}
                    >
                      <span className="mr-2">{sub.icon}</span>
                      {sub.title}
                      {sub.subItems && (
                        <FaChevronDown className="ml-auto text-sm" />
                      )}
                    </button>
                    {activeSubIndex === subIndex && sub.subItems && (
                      <ul className="pl-4 space-y-1 bg-[#0f2d5f]">
                        {sub.subItems.map((subsub, subsubIndex) => (
                          <li key={subsubIndex}>
                            <Link
                              to={subsub.path}
                              onClick={() => setActiveSubSubIndex(subsubIndex)}
                              className={`block text-sm p-1 rounded-sm hover:text-gray-400
  ${
    activeSubSubIndex === subsubIndex
      ? "bg-white text-black hover:text-bold"
      : ""
  }`}
                            >
                              {subsub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default MenuLeft;
