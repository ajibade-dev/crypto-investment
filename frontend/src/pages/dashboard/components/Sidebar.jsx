import { NavLink } from "react-router-dom";
import { Home, Wallet, ArrowDownToLine, ArrowUpFromLine, BarChart3, Receipt, Users, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import coinflow from "@/assets/coinflow.png";

const items = [
  { to: "/dashboard", label: "Home", icon: Home, end: true },
  { to: "/dashboard/deposit", label: "Deposit", icon: ArrowDownToLine },
  { to: "/dashboard/withdraw", label: "Withdraw", icon: ArrowUpFromLine },
  { to: "/dashboard/plans", label: "Trading Plans", icon: BarChart3 },
  { to: "/dashboard/my-plans", label: "My Plans", icon: BarChart3 },
  { to: "/dashboard/transactions", label: "Transactions", icon: Receipt },
  // { to: "/dashboard/referrals", label: "Referrals", icon: Users },
  { to: "/dashboard/settings", label: "Update Profile", icon: Settings },
];

export default function Sidebar({ onNavigate }) {
  return (
    <div className="h-full flex flex-col">
      {/* Brand */}
      <div className="flex items-center justify-center gap-3 p-4">
        <a href="/"><img src={coinflow} alt="Coinflow" className=" h-28 w-28 cursor-pointer"   /></a>
        
        {/* <div className="font-semibold text-[#222ad6]">Coinflow Analysis</div> */}
      </div>
      <Separator />

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-[#222ad6]/10 text-[#222ad6] font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
            onClick={onNavigate}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Help card (optional) */}
      <div className="p-4">
        <div className="rounded-lg bg-[#222ad6] text-white p-4">
          <div className="text-sm font-medium">Need Help?</div>
          <div className="text-xs opacity-90 mb-3">Contact our 24/7 support center</div>
          <a
            href="mailto:support@yourdomain.com"
            className="inline-block rounded-md bg-white text-[#222ad6] text-sm px-3 py-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
