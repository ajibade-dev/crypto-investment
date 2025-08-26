import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const METHODS = [
  { id: "usdc", label: "USDC", note: "Network: ETH" },
  { id: "usdt-erc20", label: "usdt(erc20)", note: "Network: ETH" },
  { id: "usdt-trc20", label: "usdt(trc20)", note: "Network: TRON" },
  { id: "btc", label: "bitcoin", note: "On-chain" },
  { id: "eth", label: "ethereum", note: "On-chain" },
];

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Success state (controlled by param initially)
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.get("success") === "1") {
      setShowSuccess(true);
      // clean URL so refresh won’t bring it back
      navigate("/dashboard/deposit", { replace: true });
    }
  }, [searchParams, navigate]);

  const canProceed = useMemo(
    () => Number(amount) > 0 && !!method,
    [amount, method]
  );

  const handleProceed = (e) => {
    e.preventDefault();
    if (!canProceed) return;
    navigate("/dashboard/deposit/payment", {
      state: { amount: Number(amount), method },
    });
  };

  return (
    <div className="px-4 py-6 md:px-8">
      <div className="max-w-4xl">
        {showSuccess && (
          <Alert className="mb-4 flex justify-between items-start gap-2">
            <div>
              <AlertTitle className="text-2xl font-bold text-[#222ad6]">
                Account Fund Successful!
              </AlertTitle>
              <AlertDescription>
                Please wait for the system to validate this transaction.
              </AlertDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-600"
              onClick={() => setShowSuccess(false)}
            >
              Cancel
            </Button>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-[#222ad6] text-3xl font-bold">
              Fund your account balance
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {/* Amount */}
            <div className="grid gap-2">
              <Label htmlFor="amount">Enter Amount</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <Separator />

            {/* Payment methods */}
            <div className="grid gap-3">
              <Label>Choose Payment Method from the list below</Label>
              <RadioGroup
                value={method}
                onValueChange={setMethod}
                className="grid gap-3 sm:grid-cols-2"
              >
                {METHODS.map((m) => (
                  <label
                    key={m.id}
                    className={`flex items-center justify-between rounded-lg border p-3 cursor-pointer transition hover:border-primary ${
                      method === m.id ? "border-primary ring-1 ring-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={m.id} id={m.id} />
                      <div className="leading-tight">
                        <div className="font-medium">{m.label.toUpperCase()}</div>
                        <div className="text-xs text-muted-foreground">{m.note}</div>
                      </div>
                    </div>
                    {method === m.id && <Badge>Selected</Badge>}
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Proceed */}
            <div>
              <Button
                className="bg-[#222ad6] hover:bg-[#434cec] cursor-pointer"
                onClick={handleProceed}
                disabled={!canProceed}
              >
                Proceed to Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
