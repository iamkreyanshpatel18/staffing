"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Users, FileText, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber:string
  skill:string
  address:string
  experience:string
  gender:string
};

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");

    if (!isAdmin) {
      router.push("/admin_pannel");
      return;
    }

    fetch("/api/users")
      .then((res) => res.json())
      .then((users) => setData(users));
  }, []);

  const logout = () => {
    localStorage.removeItem("adminAuth");
    toast.error("Logged out");
    router.push("/admin_pannel");
  };

  return (
    <div className="flex min-h-screen bg-zinc-100 mt-25">

      {/* Sidebar */}
      <div className="w-70 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          ESSENCE HIRE
        </h1>

        <div className="flex flex-col gap-4">

          <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800">
            <Users size={20}/>
            User Data
          </button>

          <Link href="/admin_pannel/adminjobapp">
            <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 w-full">
              <FileText size={20}/>
              Job Applications
            </button>
          </Link>

          <button
            onClick={logout}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800"
          >
            <LogOut size={20}/>
            Logout
          </button>

        </div>
      </div>




     {/* Right Side */}
<div className="flex-1 p-8 overflow-x-auto">

  <h1 className="text-4xl font-extralight mb-5">
    Form's data
  </h1>

 

  <div className="bg-white rounded-3xl shadow p-6">

    <table className="w-full">

      <thead>

        <tr className="border-b text-left">

          <th className="p-4">Name</th>
          <th className="p-4">Email</th>
          <th className="p-4">Phone</th>
          <th className="p-4">Skill</th>
          <th className="p-4">Experience</th>
          <th className="p-4">Gender</th>
          <th className="p-4">Address</th>

        </tr>

      </thead>

      <tbody>

        {data.map((v) => (

          <tr
            key={v.id}
            className="border-b hover:bg-zinc-100"
          >

            <td className="p-4">
              {v.firstname} {v.lastname}
            </td>

            <td className="p-4">
              {v.email}
            </td>

            <td className="p-4">
              {v.phonenumber}
            </td>

            <td className="p-4">
              {v.skill}
            </td>

            <td className="p-4">
              {v.experience}
            </td>

            <td className="p-4">
              <span
                className="
                px-3
                py-1
                rounded-full"
              >
                {v.gender}
              </span>
            </td>

            <td className="p-4">
              {v.address}
            </td>

          </tr>
          

        ))}

      </tbody>

    </table>

  </div>
        <a href="http://localhost:5555/" className="mx-5 bg-amber-400 p-5  rounded-2xl hover:bg-amber-500">Modify</a>

</div>

    </div>
  );
}