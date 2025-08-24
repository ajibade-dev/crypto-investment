import React from "react";
import { useState } from "react";
import Loader from "./sections/Loader";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainDashboard from "./pages/dashboard/MainDashboard";
import DashboardHome from "./pages/dashboard/pages/Home";
import Deposit from "./pages/dashboard/pages/Deposit";
import Withdraw from "./pages/dashboard/pages/Withdraw";
import Plans from "./pages/dashboard/pages/Plans";
import MyPlans from "./pages/dashboard/pages/MyPlans";
import Transactions from "./pages/dashboard/pages/Transactions";
import PrivateRoutes from "./pages/dashboard/components/PrivateRoutes";
import Settings from "./pages/dashboard/pages/Settings";
import Home from "./pages/Home";
import Terms from "./pages/Support/Terms";
import Privacy from "./pages/Support/Privacy";
import Regulations from "./pages/Support/Regulations";
import Risk from "./pages/Support/Risk";
import Layout from "./sections/Layout";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
const [loading, setLoading] = useState(true);

   useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  
  return  loading ? <Loader /> : (
    <>
    <ToastContainer />
    <Routes>
      {/* Pages without shared layout */}
      <Route path="/" element={<Home />} />
    
      {/* Pages with shared Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/support/terms-and-conditions" element={<Terms />} />
        <Route path="/support/privacy-policy" element={<Privacy />} />
        <Route path="/support/regulations" element={<Regulations />} />
        <Route path="/support/risk-disclaimer" element={<Risk />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
       
       {/* for the dashboard */}
       <Route path="" element={<PrivateRoutes />}>
       <Route path="/dashboard" element={<MainDashboard />}>
    <Route index element={<DashboardHome />} />
    <Route path="deposit" element={<Deposit />} />
    <Route path="withdraw" element={<Withdraw />} />
    <Route path="plans" element={<Plans />} />
    <Route path="my-plans" element={<MyPlans />} />
    <Route path="transactions" element={<Transactions />} />
    <Route path="settings" element={<Settings />} />
  </Route>
  </Route>
    </Routes>
    </>
  );
}
