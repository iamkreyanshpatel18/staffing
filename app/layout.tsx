import Link from "next/link";
import "./globals.css";
import type { ReactNode } from 'react';
import Image from "next/image";
import { Toaster } from "react-hot-toast";



 function Footer() {
  return (
    <footer className="w-full bg-slate-400 py-10 ">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6 text-center">

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold">Essence Hire</h2>
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
  return (
    <html lang="en">
      <head>
        <title>Essence Hire</title>
        
      </head>
      <body>

  <header>
     {/* navbar */}
     

    <div className="mt-8 border w-full h-20 flex items-center tracking-[0.4em] uppercase fixed bg-gray-50">
      <div className="flex items-center ml-12 gap-3">
        <Image src="/next.svg" alt="Logo" width={120} height={50} />
        <p>Essence Hire</p>
      </div>

      <nav className="flex ml-175 gap-8">
        <Link href="/">Jobs</Link>
        <Link href="/forms">Form</Link>
        <Link href="/contactus">Contact Us</Link>
      </nav>
    </div>

  </header>
    <Toaster/>
  {children}

    <section className="w-full h-90 bg-slate-400 flex gap-70 mt-20">
        <div className="mt-20">
          <p className="text-5xl ml-25">Our Journey</p>
          <p className="ml-25 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sapiente ipsam <br /> incidunt at deleniti est architecto. Libero error numquam hic porro odio, labore iusto maxime, <br />voluptatem vel  ducimus sunt? Reiciendis!</p>
        </div>

        <div className="mt-14">
          <img src="/mainhero.jpg" alt="" className="w-60 h-60"/>
        </div>
    </section>


  <footer>
    <Footer/>
  </footer>
</body>
    </html>
  );
}
