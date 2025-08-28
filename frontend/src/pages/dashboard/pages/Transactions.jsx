import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";


const API_URL = import.meta.env.VITE_API_URL;

// 🔹 API fetch
const fetchTransactions = async () => {
  
 

console.log("🌍 API_URL being used:", import.meta.env.VITE_API_URL);
console.log("📡 Full endpoint:", `${import.meta.env.VITE_API_URL}/api/transactions/recent`);

  const res = await fetch(`${API_URL}/api/deposits`, {
    method: "GET",
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
      // Authorization: token ? `Bearer ${token}` : "", // send token
    },
  });

  if (!res.ok) throw new Error("Failed to fetch deposits");
  const deposits = await res.json();

  return {
    deposits: deposits.map((d) => ({
      id: d._id,
      amount: d.amount,
      method: d.paymentMode,
      status: d.status,
      date: new Date(d.createdAt).toLocaleString(),
    })),
    withdrawals: [], // add withdrawals API later
  };
};

export default function Transactions() {
  const [transactions, setTransactions] = useState({ deposits: [], withdrawals: [] });
  const location = useLocation();

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        console.error("Error loading transactions:", err);
      }
    };

    // load when page mounts or when redirected with refresh flag
    loadTransactions();
  }, [location.state]);

  return (
    <div className="px-4 py-6 md:px-8">
      <div className="md:max-w-4xl w-full">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Transaction Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="deposit" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-xl p-1">
                <TabsTrigger value="deposit">Deposit</TabsTrigger>
                <TabsTrigger value="withdrawal">Withdrawal</TabsTrigger>
                <TabsTrigger value="others">Others</TabsTrigger>
              </TabsList>

              <TabsContent value="deposit" className="mt-6">
                <TransactionTable data={transactions.deposits} type="Deposit" />
              </TabsContent>

              <TabsContent value="withdrawal" className="mt-6">
                <TransactionTable data={transactions.withdrawals} type="Withdrawal" />
              </TabsContent>

              <TabsContent value="others" className="mt-6">
                <div className="text-gray-500 text-sm">No other transactions available.</div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TransactionTable({ data, type }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Payment mode</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date created</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No {type.toLowerCase()} transactions found.
              </td>
            </tr>
          ) : (
            data.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="px-4 py-2">${tx.amount}</td>
                <td className="px-4 py-2">{tx.method}</td>
                <td className="px-4 py-2">
                  <Badge variant={tx.status === "Pending" ? "destructive" : "secondary"}>
                    {tx.status}
                  </Badge>
                </td>
                <td className="px-4 py-2">{tx.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
