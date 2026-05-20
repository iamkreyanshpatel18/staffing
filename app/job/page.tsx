'use client'
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type Job = {
  title: string;
  openings: string;
};

type FAQ = {
  question: string;
  answer: string;
};

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "What is an FAQ section?",
      answer:
        "An FAQ section helps answer common questions about your services."
    },
    {
      question: "Why do FAQs matter?",
      answer:
        "They reduce confusion and improve trust."
    },
    {
      question: "Why do FAQs matter?",
      answer:
        "They reduce confusion and improve trust."
    },
    {
      question: "Where can I apply for jobs?",
      answer:
        "Go to Jobs page and click Apply."
    }
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className="bg-zinc-100 w-full px-4 sm:px-8 md:px-12 py-10 mb-15">

  <div className="w-full max-w-3xl">

    <h1 className="text-3xl sm:text-5xl md:text-4xl text-green-800 mb-5">
      Frequently asked questions
    </h1>

    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-green-800 mb-4 p-4 md:p-3 rounded-2xl"
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle(index)}
        >
          <p className="text-base md:text-xl">
            {faq.question}
          </p>

          <span className="text-sm md:text-lg">
            {activeIndex === index ? "▲" : "▼"}
          </span>
        </div>

        {activeIndex === index && (
          <div className="pt-2 text-sm md:text-lg text-green-800">
            {faq.answer}
          </div>
        )}
      </div>
    ))}

  </div>
</div>
  );
}






function FeatureSection() {



  return (
    <div className="bg-black text-white">

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="order-2 md:order-1 p-6 md:p-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Connecting Talent with Opportunity</h2>
          <p className="text-sm md:text-base">We connect businesses with qualified professionals across healthcare,
             skilled trades, and specialized industries. Fast hiring, reliable candidates,
             and personalized staffing solutions..</p>
        </div>


 <motion.div className="order-2 md:order-2" animate={{y: [0, -20, 0]}} transition={{duration: 3,repeat: Infinity,ease: "easeInOut"}}>
  <img src="/demo2.png" className="w-full h-full object-cover rounded-2xl" alt=""/>
</motion.div>


      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <motion.div
  className="order-2 md:order-1"
  animate={{
    y: [0, 20, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <img
    src="/animation2.png"
    className="w-full h-full object-cover rounded-4xl"
    alt=""
  />
</motion.div>

        <div className="order-1 md:order-2 p-6 md:p-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Hire Smarter. Grow Faster.
          </h2>
          <p className="text-sm md:text-base">From sourcing top candidates to delivering tailored staffing solutions, we help your business grow with the right people.</p>
        </div>
      </div>

    </div>
  );
}









type Job1 = {
  title: string;
  slug: string;
  openings: string;
  image: string;
  description: string;
};

export default function Page() {

  const jobList: Job1[] = [
    {
      title: "Nurse",
      slug: "nurse",
      openings: "10 job opening",
      image: "/mainhero.jpg",
      description: "Responsible for patient care and medical support."
    },
    {
      title: "Care Worker",
      slug: "care-worker",
      openings: "8 job opening",
      image: "/mainhero.jpg",
      description: "Assist patients with daily activities."
    },
    {
      title: "Electrician",
      slug: "electrician",
      openings: "6 job opening",
      image: "/mainhero.jpg",
      description: "Handle electrical work."
    },
    {
      title: "Plumber",
      slug: "plumber",
      openings: "5 job opening",
      image: "/mainhero.jpg",
      description: "Fix pipes and plumbing systems."
    },
    {
      title: "Builder",
      slug: "builder",
      openings: "7 job opening",
      image: "/mainhero.jpg",
      description: "Construction and site work."
    },
    {
      title: "Carpenter",
      slug: "carpenter",
      openings: "9 job opening",
      image: "/mainhero.jpg",
      description: "Woodwork and furniture making."
    },
    {
      title: "Shop Assistant",
      slug: "shop-assistant",
      openings: "4 job opening",
      image: "/mainhero.jpg",
      description: "Assist customers in store."
    },
    {
      title: "Sales Executive",
      slug: "sales-executive",
      openings: "11 job opening",
      image: "/mainhero.jpg",
      description: "Drive sales and client relationships."
    },
    {
      title: "Cashier",
      slug: "cashier",
      openings: "3 job opening",
      image: "/mainhero.jpg",
      description: "Handle billing and payments."
    },
    {
      title: "Chef",
      slug: "chef",
      openings: "6 job opening",
      image: "/mainhero.jpg",
      description: "Prepare and cook food."
    },
    {
      title: "Waiter",
      slug: "waiter",
      openings: "12 job opening",
      image: "/mainhero.jpg",
      description: "Serve food and assist customers."
    },
    {
      title: "Hotel Staff",
      slug: "hotel-staff",
      openings: "8 job opening",
      image: "/mainhero.jpg",
      description: "Handle hotel operations."
    },
    {
      title: "Barista",
      slug: "barista",
      openings: "5 job opening",
      image: "/mainhero.jpg",
      description: "Prepare coffee and beverages."
    },
    {
      title: "Driver",
      slug: "driver",
      openings: "9 job opening",
      image: "/mainhero.jpg",
      description: "Transport goods or passengers."
    },
    {
      title: "Warehouse Worker",
      slug: "warehouse-worker",
      openings: "7 job opening",
      image: "/mainhero.jpg",
      description: "Manage warehouse operations."
    },
    {
      title: "Delivery Person",
      slug: "delivery-person",
      openings: "10 job opening",
      image: "/mainhero.jpg",
      description: "Deliver goods to customers."
    },
    {
      title: "Cleaner",
      slug: "cleaner",
      openings: "6 job opening",
      image: "/mainhero.jpg",
      description: "Maintain cleanliness."
    },
    {
      title: "Maintenance Worker",
      slug: "maintenance-worker",
      openings: "4 job opening",
      image: "/mainhero.jpg",
      description: "Repair and maintain facilities."
    },
    {
      title: "Photographer",
      slug: "photographer",
      openings: "3 job opening",
      image: "/mainhero.jpg",
      description: "Capture photos professionally."
    },
    {
      title: "Video Editor",
      slug: "video-editor",
      openings: "5 job opening",
      image: "/mainhero.jpg",
      description: "Edit video content."
    }
  ];

  const [page, setPage] = useState<number>(1);

  const itemsPerPage = 4;
  const start = (page - 1) * itemsPerPage;
  const currentJobs = jobList.slice(start, start + itemsPerPage);

  return (
    <div className="w-full bg-zinc-50">

      {/* HERO */}
      <img src="/mainhero.jpg" className="w-full max-w-full h-auto" />

      {/* JOB LIST */}
      <main className="border max-w-4xl mx-auto mt-20 p-4 sm:p-6 flex flex-col gap-4 rounded-3xl bg-white">

        {currentJobs.map((job, index) => (
          <div key={index} className="border rounded-2xl p-3 sm:p-4 hover:bg-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              <p className="sm:w-1/3 font-extralight text-sm sm:text-base">{job.title}</p>
              <p className="sm:w-1/3 sm:text-center text-sm sm:text-base">{job.openings}</p>

              <div className="sm:w-1/3 sm:text-right">
                <Link href={`/job/${job.slug}`}>
                  <button className="border rounded-2xl p-2 sm:p-1.5 hover:bg-gray-200 text-sm sm:text-base w-full sm:w-auto">
                    apply now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

      </main>

      {/* PAGINATION */}
   <div className="mx-auto mt-4 flex justify-center gap-4 sm:gap-6 md:gap-10 text-xl md:text-2xl mb-15 flex-wrap">
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
      </div>

      <FAQSection />
      <FeatureSection />

    </div>
  );
}