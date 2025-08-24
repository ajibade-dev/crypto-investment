import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MainDashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile top bar with menu button */}
      <div className="flex items-center justify-between p-3 border-b bg-white md:hidden">
        <div className="text-lg font-semibold text-[#222ad6]">Dashboard</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <Sidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-72 shrink-0 border-r bg-white">
          <Sidebar />
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Persistent header */}
          <Header />

          {/* Page body */}
          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
