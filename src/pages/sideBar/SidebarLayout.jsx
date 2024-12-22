import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/217b050a94ccae14a5a2f83a1c782bb50cb5e168b74c6159aff04116e342ddce?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "Repositories",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f5e628af5815e16d70ec8b6c8d984f9bde39a72ef4865fddd3460e3508bc88?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "AI Code Review",
    isActive: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3dda072e701767527f31db4d5a592ca96e474128e60b41df76501da8dd03256?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "Cloud Security",
    isActive: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34561f54ab588af25d4927cc4d57bd130089f853f2bd1eb18afa3fcd0c11c7d1?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "How to Use",
    isActive: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a81f67af2b9a54d74c5125ec7f56008aa7c5199ec23f58712430e1ff145f5722?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "Settings",
    isActive: false,
  },
];

function SidebarLayout() {
  const [navItems, setNavItems] = useState(navigationItems);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      isActive: i === index
    }));
    setNavItems(updatedNavItems);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:h-screen md:w-1/5 md:bg-gray-50">
        <SidebarHeader />
        <div className="flex-grow overflow-auto mt-6">
          <nav className="flex flex-col px-4 mt-4 w-full text-base font-semibold leading-6 text-gray-700">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleOnClick(index)}
                className={`flex cursor-pointer items-center p-2 rounded-md transition-colors ${
                  item.isActive ? "bg-[#1570EF] text-[#fafafa]" : "text-gray-700"
                }`}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="h-6 w-6 mr-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <SidebarFooter />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 bg-gray-50 shadow-sm z-50">
          <div className="flex justify-between items-center p-4">
          <div className="flex gap-3 items-center self-start text-2xl leading-none">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d4891dfdd616dafb2053d14f46382dc859349911973c60dacc81f8db0601e8?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7"
          className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.87]"
          alt="CodeAnt AI Logo"
        />
        <div className="self-stretch my-auto">CodeAnt AI</div>
      </div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`fixed left-0 right-0 bg-gray-50 shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'top-14' : '-top-full'
        }`}>
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="p-4">
              <SidebarHeader />
            </div>
            <nav className="px-4 py-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleOnClick(index)}
                  className={`flex items-center w-full p-3 rounded-md mb-2 ${
                    item.isActive ? "bg-[#1570EF] text-[#fafafa]" : "text-gray-700"
                  }`}
                >
                  <img src={item.icon} alt={item.label} className="w-6 h-6 mr-3" />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="p-4">
              <SidebarFooter />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default SidebarLayout;