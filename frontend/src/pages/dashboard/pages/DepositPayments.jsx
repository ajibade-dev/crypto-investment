import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";

const ADDRESSES = {
  usdc: { address: "0xUSDC_ETH_NETWORK_DEMO...", network: "ETH" },
  "usdt-erc20": { address: "0xUSDT_ERC20_DEMO...", network: "ETH" },
  "usdt-trc20": { address: "TTRON_USDT_TRC20_DEMO...", network: "TRON" },
  btc: { address: "bc1qBITCOIN_DEMO_ADDRESS...", network: "BTC" },
  eth: { address: "0xETHEREUM_DEMO_ADDRESS...", network: "ETH" },
};

export default function DepositPayments() {
  const { state } = useLocation(); // { amount, method }
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!state?.amount || !state?.method) {
      navigate("/dashboard/deposit");
    }
  }, [state, navigate]);

  const info = useMemo(() => ADDRESSES[state?.method] || null, [state]);

  const handleCopy = async () => {
    if (!info) return;
    await navigator.clipboard.writeText(info.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleSubmitProof = (e) => {
    e.preventDefault();
    // you’ll wire real upload later; for now just go back with success flag
    navigate("/dashboard/deposit?success=1");
  };

  if (!state?.amount || !state?.method || !info) return null;

  const label = state.method.toUpperCase().replace("-", " ");

  return (
    <div className="px-4 py-6 md:px-8">
      <div className="max-w-3xl">
        <Card className="shadow">
          <CardHeader className="flex-row items-center justify-between gap-3">
            <CardTitle className="flex items-center gap-2">
              Make Payment
              <Badge variant="secondary" className="ml-2 bg-[#222ad6] text-white">
                Your payment method&nbsp;{label}
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-6">
            <div className="text-md text-black">
              You are to make payment of{" "}
              <span className="font-semibold text-[#222ad6]">${Number(state.amount).toFixed(2)}</span>{" "}
              using your selected payment method.
            </div>

            {/* Address row */}
            <div className="grid gap-2">
              <Label>
                {label} Address <span className="text-xs text-muted-foreground">({info.network})</span>
              </Label>
              <div className="flex items-center gap-2">
                <Input readOnly value={info.address} className="font-mono" />
                <Button type="button" variant="outline" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Proof upload (no logic yet) */}
            <form onSubmit={handleSubmitProof} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="proof">Upload Payment proof after payment.</Label>
                <Input id="proof" type="file" accept="image/*,application/pdf" className='cursor-pointer' />
              </div>

              <Button type="submit" className="bg-[#222ad6] hover:bg-[#222ad6]">
                Submit Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
