import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, PiggyBank, Gift, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const API_URL = import.meta.env.VITE_API_URL;

const stats = [
  { title: "Balance", value: "$0", icon: Wallet },
  { title: "Profits", value: "$0.0", icon: PiggyBank },
  { title: "Bonus", value: "$0.0", icon: Gift },
  { title: "Ref. Bonus", value: "$0.0", icon: BadgeDollarSign },
];

export default function DashboardHome() {
  const [recentTx, setRecentTx] = useState([]);
  const [loadingTx, setLoadingTx] = useState(true);

  useEffect(() => {
  const fetchRecent = async () => {
    try {
      setLoadingTx(true);


console.log("🌍 API_URL being used:", import.meta.env.VITE_API_URL);


      const res = await fetch(`${API_URL}/api/transactions/recent`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("Failed fetching recent transactions:", res.status);
        setRecentTx([]);
        return;
      }

      const data = await res.json();
      setRecentTx(data || []);
    } catch (err) {
      console.error("Error fetching recent transactions:", err);
      setRecentTx([]);
    } finally {
      setLoadingTx(false);
    }
  };

  fetchRecent();
}, []);


  return (
    <div className="space-y-6">
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
        {/* Recent Transactions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions ({recentTx.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingTx ? (
              <div className="text-sm text-gray-500">Loading...</div>
            ) : recentTx.length === 0 ? (
              <div className="text-sm text-gray-500">No record yet</div>
            ) : (
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-3 py-2">Amount</th>
                      <th className="px-3 py-2">Type</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTx.map((tx) => (
                      <tr key={tx._id} className="border-t">
                        <td className="px-3 py-2">${tx.amount}</td>
                        <td className="px-3 py-2">{tx.type}</td>
                        <td className="px-3 py-2">
                          <Badge variant={tx.status === "Pending" ? "destructive" : "secondary"}>
                            {tx.status}
                          </Badge>
                        </td>
                        <td className="px-3 py-2">{new Date(tx.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refer Us & Earn</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-gray-600">Use the link below to invite your friends.</div>
            <div className="rounded-md border p-2 text-sm overflow-x-auto">
              https://secure.yourdomain.com/ref/YourName
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
