"use client"; // Ensure this component is client-side

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 14+
import { MdDashboard, MdShoppingCart, MdInsertDriveFile } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const sidebarItems = [
  {
    name: "dashboard",
    label: "Dashboard",
    address: "/dashboard",
    icon: MdDashboard,
  },
  { name: "orders", label: "Orders", address: "/orders", icon: MdShoppingCart },
  {
    name: "quotations",
    label: "Quotations",
    address: "/quotations",
    icon: MdInsertDriveFile,
  },
  {
    name: "proposals",
    label: "Proposals",
    address: "/proposals",
    icon: MdInsertDriveFile,
  },
  {
    name: "profile",
    label: "Profile",
    address: "/profile",
    icon: MdInsertDriveFile,
  },
  {
    name: "orders1",
    label: "Orders1",
    address: "/orders1",
    icon: MdInsertDriveFile,
  },
  {
    name: "quotations1",
    label: "Quotations1",
    address: "/quotations1",
    icon: MdInsertDriveFile,
  },
  {
    name: "quotations2",
    label: "Quotations2",
    address: "/quotations2",
    icon: MdInsertDriveFile,
  },
];

export default function Sidebar({ isActiveItem, setIsActiveItem }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  console.log("Sidebar - isActiveItem:", isActiveItem);
  console.log("Sidebar - setIsActiveItem:", setIsActiveItem);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    console.log("setIsActiveItem type:", typeof setIsActiveItem);
    if (typeof setIsActiveItem === "function") {
      setIsActiveItem(item.name);
    } else {
      console.error("setIsActiveItem is not a function");
    }
    router.push(item.address);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[#4348BD] text-white ${
        isOpen ? "w-60" : "w-16"
      } transition-width duration-300 z-50`}
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="mx-auto mb-8 flex justify-center">
          <img
            src="/Images/cusp-logo.webp"
            alt="cusp-logo"
            className={`w-40 h-auto mr-4 ${isOpen ? "block" : "hidden"}`}
          />
        </div>

        <button
          onClick={handleToggle}
          className={`mb-4 ${isOpen ? "hidden" : "block"}`}
        >
          <span
            className={`transform ${
              isOpen ? "rotate-90" : ""
            } transition-transform duration-300 `}
          >
            <FaArrowLeft className="text-white" />
          </span>
        </button>

        <div className="flex flex-col items-start w-full px-2">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`py-4 px-8 cursor-pointer rounded-lg flex gap-4 text-[16px] font-[500] transition-colors duration-300 ${
                isActiveItem === item.name
                  ? "bg-white text-[#4348BD]"
                  : "text-white"
              }`}
            >
              <item.icon
                className={`text-[18px] font-[500] transition-colors duration-300 ${
                  isActiveItem === item.name ? "text-[#4348BD]" : "text-white"
                }`}
                style={{ width: "20px", height: "20px" }}
              />
              {isOpen && <span className="ml-2">{item.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
