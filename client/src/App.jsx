import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShopDetails from "./pages/ShopDetails";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManageServices from "./pages/ManageServices";
import AdminAuth from "./pages/AdminAuth";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";

const App = () => {
  useState(() => {
    fetch("https://beauty-wellness.onrender.com/connected")
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          console.log("Backend connected successfully ✅", data);
        } else {
          console.error("Backend connection failed ❌", data);
        }
      })
      .catch((err) => {
        console.error("Backend connection error ❌", err);
      });
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen app-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar />
        <main className="flex-grow main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop/:id" element={<ShopDetails />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin/manage" element={<ManageServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
