import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, PiggyBank, Gift, Wallet } from "lucide-react";

const stats = [
  { title: "Balance", value: "$0", icon: Wallet },
  { title: "Profits", value: "$0.0", icon: PiggyBank },
  { title: "Bonus", value: "$0.0", icon: Gift },
  { title: "Ref. Bonus", value: "$0.0", icon: BadgeDollarSign },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome strip */}
      {/* <Card>
        <CardContent className="py-4">
          <div className="text-sm text-gray-600">
            Welcome to <span className="font-medium">Coinflow Analysis</span>, the #1 Trading Module.
          </div>
        </CardContent>
      </Card> */}

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-2xl font-semibold">{value}</div>
              <div className="rounded-full p-3 bg-[#222ad6]/10 text-[#222ad6]">
                <Icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholders for tables/widgets */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Fundamental & Technical Outlook</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">Add your markets table/chart here…</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Plan(s) (0)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              You do not have an active investment plan at the moment.
            </p>
            <a
              href="/dashboard/plans"
              className="inline-flex items-center justify-center rounded-md bg-[#22ad66] px-4 py-2 text-white text-sm"
            >
              Buy a plan
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions (0)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">No record yet</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refer Us & Earn</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-gray-600">
              Use the link below to invite your friends.
            </div>
            <div className="rounded-md border p-2 text-sm overflow-x-auto">
              https://secure.yourdomain.com/ref/YourName
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
