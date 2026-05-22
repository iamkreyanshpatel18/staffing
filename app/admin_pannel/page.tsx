"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Admin = {
  adminid: string;
  password: string;
};

export default function Page() {
  const [admin, setAdmin] = useState<Admin>({
    adminid: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      admin.adminid === "k" &&
      admin.password === "e"
    ) {
      setAdmin({
        adminid: "",
        password: "",
      });
      { localStorage.setItem("adminAuth","true");}

      toast.success("Login successful");
      router.push("/admin_pannel/adminuserdata");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to access the admin panel
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            
            <input
              type="text"
              name="adminid"
              required
              autoComplete="new-password"
              value={admin.adminid}
              onChange={handleChange}
              placeholder="Enter admin id"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
          
            <input
              type="password"
              name="password"
              required
              autoComplete="new-password"
              value={admin.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}