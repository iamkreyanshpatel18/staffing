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
      question: "Where can I apply for jobs?",
      answer:
        "Go to Jobs page and click Apply."
    }
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-187 bg-zinc-100 py-20 px-10 mb-50">
      <h1 className="text-5xl font-serif text-green-800 mb-10">
        Frequently asked questions
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} className="border border-green-800 mb-4 rounded-md">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <p>{faq.question}</p>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </div>

          {activeIndex === index && (
            <div className="px-4 pb-4">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function FeatureSection() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className="bg-black text-white">

      {/* Section 1 */}
      <div className="grid grid-cols-2 min-h-screen">
        <div className="p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p>Modern tools for staffing and hiring.</p>
        </div>

        <motion.div style={{ y: y1 }}>
          <img
            src="/mainhero.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-2 min-h-screen">
        <motion.div style={{ y: y2 }}>
          <img
            src="/mainhero.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        <div className="p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">
            Seamless Hiring
          </h2>
          <p>Connect candidates with employers easily.</p>
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
      <img src="/mainhero.jpg" className="w-full h-180 object-cover" />

      {/* JOB LIST */}
      <main className="border w-150 m-auto mt-20 p-4 flex flex-col gap-4 rounded-3xl bg-white">

        {currentJobs.map((job, index) => (
          <div key={index} className="border rounded-2xl p-2 hover:bg-violet-100">
            <div className="flex items-center">
              <p className="w-1/3">{job.title}</p>
              <p className="w-1/3 text-center">{job.openings}</p>

              <div className="w-1/3 text-right">
                <Link href={`/job/${job.slug}`}>
                  <button className="border rounded-2xl p-1.5 hover:bg-green-300">
                    apply now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

      </main>

      {/* PAGINATION */}
      <div className="m-auto w-50 mt-4 flex justify-between text-2xl mb-15">
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