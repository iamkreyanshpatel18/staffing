'use client'

import { Users, FileText, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type jobsdata={
  id:string
  firstname:string
  lastname:string
  email:string
  jobtitle:string
  createdAt:string
}

export default function Page() {
  const[jobs,setjobs]=useState<jobsdata[]>([])

const router=useRouter()
useEffect(()=>{
const admin=localStorage.getItem("adminAuth")

if(!admin){
    router.push('/admin_pannel')
}

async function fetchdata(){
 try {
    const res = await fetch("/api/jobapp")
    const data = await res.json()
    console.log("data:", data)

    setjobs(data)
  } catch(err) {
    console.log(err)
  }
}
fetchdata()

},[])

const logout=()=>{
  localStorage.removeItem("adminAuth")
  router.push("/admin_pannel")
  toast.error("log-out")
}

  return (

    <div className="flex min-h-screen bg-zinc-100 mt-25">

      {/* SIDEBAR */}
      <div className="w-70 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          ESSENCE HIRE
        </h1>

      
        <div className="flex flex-col gap-4">

          {/* USER DATA */}

         <a href="/admin_pannel/adminuserdata">
             <button
            className="
            flex items-center
            gap-3
            p-3
            rounded-xl
            hover:bg-zinc-800
            transition"
          >

            <Users size={20}/>

            User Data

          </button>
         </a>


          {/* JOB APPLICATION */}

         <a href="/admin_pannel/adminjobapp">
           <button
            className="
            flex items-center
            gap-3
            p-3
            rounded-xl
            hover:bg-zinc-800
            transition"
          >

            <FileText size={20}/>

            Job Applications

          </button>
         </a>

          {/* logout */}

          <button
            className="
            flex items-center
            gap-3
            p-3
            rounded-xl
            hover:bg-zinc-800
            transition"
            onClick={logout}
          >
            
          <LogOut />
          
            logout

          </button>

        </div>

      </div>







      {/* RIGHT SIDE */}
<div className="flex-1 p-8 overflow-x-auto">

  <h1 className="text-4xl font-extralight mb-5">
    Job Application
  </h1>

 

  <div className="bg-white rounded-3xl shadow p-6">

    <table className="w-full">

      <thead>

        <tr className="border-b text-left">

          <th className="p-4">Name</th>
          <th className="p-4">Email</th>
          <th className="p-4">jobtitle</th>
          <th className="p-4">createdAt</th>
          

        </tr>

      </thead>

      <tbody>

        {jobs.map((v) => (

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
              {v.jobtitle}
            </td>

            <td className="p-4">
              {v.createdAt}
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