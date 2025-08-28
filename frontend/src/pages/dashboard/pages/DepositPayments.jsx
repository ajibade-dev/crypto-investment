import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

// 🔹 Wallet addresses (with display + real addresses)
const ADDRESSES = {
  "usdc-erc20": {
    displayAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    realAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    network: "ETH",
  },
  "usdc-sol": {
    displayAddress: "4vmjeT42zSqVc3rnUj9dNgyejsewEqBFQtz3Jus2Wwkf",
    realAddress: "4vmjeT42zSqVc3rnUj9dNgyejsewEqBFQtz3Jus2Wwkf",
    network: "SOL",
  },
  "usdt-erc20": {
    displayAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    realAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    network: "ETH",
  },
  "usdt-trc20": {
    displayAddress: "A61J3gLsJ6onxV2WVcgBWyAZqLEkUkeNL",
    realAddress: "A61J3gLsJ6onxV2WVcgBWyAZqLEkUkeNL",
    network: "TRON",
  },
  btc: {
    displayAddress: "bc1qrjcmqsnzhjllppa0y34s3dg3d383aulz76mxxt",
    realAddress: "bc1qrjcmqsnzhjllppa0y34s3dg3d383aulz76mxxt",
    network: "BTC",
  },
  eth: {
    displayAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    realAddress: "0xEA95bC64b1bC526B5AFA67cA4F6cAF44f02265e7",
    network: "ETH",
  },
};

// new code
export default function DepositPayments() {
  const { state } = useLocation(); // { amount, method, user_name?, user_email? }
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);

  // 🔹 EmailJS configs (from .env)
  const SERVICE_ID1 = import.meta.env.VITE_EMAILJS_SERVICE_ID1;
  const PUBLIC_KEY1 = import.meta.env.VITE_EMAILJS_PUBLIC_KEY1;
  const TPL_ADMIN = import.meta.env.VITE_TPL_DEPOSIT_ADMIN;
  const TPL_USER = import.meta.env.VITE_TPL_DEPOSIT_USER;

  // 🔹 Cloudinary configs
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (!state?.amount || !state?.method) {
      navigate("/dashboard/deposit");
    }
  }, [state, navigate]);

  const info = useMemo(() => ADDRESSES[state?.method] || null, [state]);

  const handleCopy = async () => {
    if (!info) return;
    await navigator.clipboard.writeText(info.realAddress); // ✅ Copy real address
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  // 🔹 Upload helper
  const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
      const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
      const xhr = new XMLHttpRequest();
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", UPLOAD_PRESET);
      fd.append("folder", "deposits/proofs");

      xhr.open("POST", url, true);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          setUploadProgress(Math.round((e.loaded / e.total) * 100));
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (err) {
            reject(new Error("Invalid JSON response from Cloudinary"));
          }
        } else {
          reject(new Error(`Upload failed: ${xhr.status}`));
        }
      };

      xhr.onerror = () => reject(new Error("Network error during Cloudinary upload"));
      xhr.send(fd);
    });
  };

  // 🔹 Submit handler
  const handleSubmitProof = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fileInput = formRef.current.querySelector("input[type='file']");
    if (!fileInput?.files?.length) {
      alert("Please upload your payment proof before submitting.");
      return;
    }

    const file = fileInput.files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert("File too large. Please upload under 5 MB.");
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      // 1) Upload file to Cloudinary
      const uploadResp = await uploadToCloudinary(file);
      const proofUrl = uploadResp.secure_url;
      if (!proofUrl) throw new Error("No URL returned from Cloudinary");

      // 2) Add hidden proof_url input
      let proofUrlInput = formRef.current.querySelector("input[name='proof_url']");
      if (!proofUrlInput) {
        proofUrlInput = document.createElement("input");
        proofUrlInput.type = "hidden";
        proofUrlInput.name = "proof_url";
        formRef.current.appendChild(proofUrlInput);
      }
      proofUrlInput.value = proofUrl;

      // 3) Temporarily remove file input name so EmailJS ignores the raw file
      const originalName = fileInput.name;
      fileInput.removeAttribute("name");

      // 4) Send via EmailJS
      await emailjs.sendForm(SERVICE_ID1, TPL_ADMIN, formRef.current, PUBLIC_KEY1);
      await emailjs.sendForm(SERVICE_ID1, TPL_USER, formRef.current, PUBLIC_KEY1);

      // 5) Restore name (optional)
      fileInput.name = originalName;

      // 6) Redirect
      navigate("/dashboard/deposit?success=1");
    } catch (err) {
      console.error("Upload/Email error:", err);
      alert("Could not upload proof or send emails. Try again.");
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  if (!state?.amount || !state?.method || !info) return null;

  const label = state.method.toUpperCase().replace("-", " ");
  const requestId = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  const submittedAt = new Date().toISOString();

  return (
    <div className="px-2 py-6 md:px-8">
      <div className="md:max-w-3xl w-full">
        <Card className="shadow">
          <CardHeader className="flex col md:flex-row items-center justify-between gap-3">
            <CardTitle className="flex items-center gap-2">Make Payment</CardTitle>
            <Badge variant="secondary" className="ml-2 bg-[#222ad6] text-white">
              Your payment method&nbsp;{label}
            </Badge>
          </CardHeader>

          <CardContent className="grid gap-6">
            <div className="text-md text-black">
              You are to make payment of{" "}
              <span className="font-semibold text-[#222ad6]">
                ${Number(state.amount).toFixed(2)}
              </span>{" "}
              using your selected payment method.
            </div>

            {/* Address row */}
            <div className="grid gap-2">
              <Label>
                {label} Address{" "}
                <span className="text-xs text-muted-foreground">
                  ({info.network})
                </span>
              </Label>
              <div className="flex items-center gap-2">
                <Input readOnly value={info.displayAddress} className="font-mono" />
                <Button type="button" variant="outline" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Proof upload form */}
            <form ref={formRef} onSubmit={handleSubmitProof} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="proof">Upload Payment proof after payment.</Label>
                <Input id="proof" name="proof" type="file" accept="image/*,application/pdf" className="cursor-pointer" />
              </div>

              {/* Hidden inputs for EmailJS variables */}
              <input type="hidden" name="user_name" value={state.user_name || "Unknown"} />
              <input type="hidden" name="user_email" value={state.user_email || "unknown@example.com"} />
              <input type="hidden" name="amount" value={state.amount} />
              <input type="hidden" name="method" value={label} />
              <input type="hidden" name="network" value={info.network} />
              {/* <input type="hidden" name="wallet_address" value={info.realAddress} /> ✅ Send real address */}
              <input type="hidden" name="request_id" value={requestId} />
              <input type="hidden" name="submitted_at" value={submittedAt} />
              <input type="hidden" name="to_email" value="stanthemainman2@gmail.com" />

              {uploadProgress > 0 && (
                <div className="text-sm text-gray-600">Uploading: {uploadProgress}%</div>
              )}

              <Button type="submit" disabled={loading} className="bg-[#222ad6] hover:bg-[#222ad6]">
                {loading ? "Submitting..." : "Submit Payment"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
