"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import DashboardHeader from "../../Components/DashboardHeader";
import Orders from "../orders/page";
import Profile from "../profile/page";
import Proposals from "../proposals/page";
import Quotations from "../quotations/page";
import Orders1 from "../orders1/page";
import Quotation2 from "../quotations2/page";
import Quotation1 from "../quotations1/page";
import Sales from "../sales/page";

export default function Page() {
  const [isActiveItem, setIsActiveItem] = useState("dashboard");
  console.log("Page - isActiveItem:", isActiveItem);
  console.log("Page - setIsActiveItem:", setIsActiveItem);

  const getTitle = () => {
    switch (isActiveItem) {
      case "dashboard":
        return "Dashboard";
      case "orders":
        return "Orders";
      case "quotations":
        return "Quotations";
      case "proposals":
        return "Proposals";
      case "profile":
        return "Profile";
      case "orders1":
        return "Orders1";
      case "quotation1":
        return "Quotation1";
      case "quotation2":
        return "Quotation2";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (isActiveItem) {
      case "dashboard":
        return (
          <div className="m-[2%]">
            <Sales />
          </div>
        );
      case "orders":
        return <Orders />;
      case "quotations":
        return <Quotations />;
      case "proposals":
        return <Proposals />;
      case "profile":
        return <Profile />;
      case "orders1":
        return <Orders1 />;
      case "quotation1":
        return <Quotation1 />;
      case "quotation2":
        return <Quotation2 />;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isActiveItem={isActiveItem} setIsActiveItem={setIsActiveItem} />
      <div
        className="flex-1 ml-[15rem] transition-all duration-300"
        style={{ width: `calc(100% - 15rem)` }}
      >
        <DashboardHeader title={getTitle()} />
        <div className="p-4">{renderContent()}</div>
      </div>
    </div>
  );
}
