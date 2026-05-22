'use client'

import Link from "next/link";
import "./globals.css";
import { useState, type ReactNode } from 'react';
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";


 function Footer() {
  return (
    <footer className="w-full bg-slate-800 py-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6 text-center text-fuchsia-100">

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold text-fuchsia-100">Essence Hire</h2>
          <p >
            Connecting talent with opportunity
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <Link href="/">Jobs</Link>
          <Link href="/contactus">Contact</Link>
        </div>

        {/* Contact */}
        <div>
          <p>Email: your@email.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>

        {/* Social */}
        <div>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>

        {/* Privacy */}
        <div>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div>
          © 2026 Essence Hire
        </div>

      </div>
    </footer>
  );
}



export default function layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Essence Hire</title>
        
      </head>
      <body>

  <header>
     {/* navbar */}
     
        <nav className="fixed top-0 left-0 w-full z-50 shadow h-20 px-4 md:px-8 flex justify-between items-center bg-gray-50 mt-8">

        {/* logo */}
        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            className="w-14 h-14 object-contain"
          />

          <a href="/job" className="tracking-[6px] text-sm md:text-xl">
            ESSENCE HIRE
          </a>


        </div>

        {/* Desktop menu */}
        <div className="hidden min-[1022px]:flex gap-10">

          <Link href="/job">
            JOBS
          </Link>

          <Link href="/forms">
            FORM
          </Link>

          <Link href="/contactus">
            CONTACT US
          </Link>

        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="min-[1022px]:hidden"
        >
          <Menu size={30}/>
        </button>

      </nav>



      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-75 bg-white z-50 transition-all duration-500
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="bg-black h-20 flex items-center px-6">

          <button onClick={() => setOpen(false)}>
            <X
              size={35}
              color="white"
            />
          </button>

        </div>

        <div className="flex flex-col">

          <Link
            href="/job"
            className="border-b p-6"
            onClick={() => setOpen(false)}
          >
            JOBS
          </Link>

          <Link
            href="/forms"
            className="border-b p-6"
            onClick={() => setOpen(false)}
          >
            FORM
          </Link>

          <Link
            href="/contactus"
            className="border-b p-6"
            onClick={() => setOpen(false)}
          >
            CONTACT US
          </Link>

        </div>

      </div>


  </header>
    <Toaster/>
  {children}

    <section className="w-full bg-slate-800 flex flex-col md:flex-row gap-8 md:gap-12 mt-20 p-4 md:p-12">
        <div className="order-1 md:mt-20 flex-1">
          <p className="text-3xl md:text-5xl text-fuchsia-100 mb-4">Our Journey</p>
          <p className="text-fuchsia-100 text-sm md:text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sapiente ipsam incidunt at deleniti est architecto. Libero error numquam hic porro odio, labore iusto maxime, voluptatem vel ducimus sunt? Reiciendis!</p>
        </div>

        <div className="order-1 flex-">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/navbar.png"
              alt="journey"
              className="w-100 h-auto object-contain"
            />
          </motion.div>
        </div>
    </section>


  <footer>
    <Footer/>
  </footer>
</body>
    </html>
  );
}
