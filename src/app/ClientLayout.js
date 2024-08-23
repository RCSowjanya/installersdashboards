// app/ClientLayout.jsx
"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import DashboardHeader from "@/Components/DashboardHeader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login"]; // Routes without sidebar and header

  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  return (
    <div>
      {!isNoLayoutRoute && (
        <div>
          <Sidebar />
          <DashboardHeader />
        </div>
      )}
      {children}
    </div>
  );
}
