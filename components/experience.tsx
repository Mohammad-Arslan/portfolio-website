"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Sr. Software Engineer",
      company: "Back Bone Technology",
      location: "Lahore",
      period: "July 2024 - Present",
      description: [
        "CRM: Contributing as a full-stack developer to a robust CRM platform tailored for call center operations, utilizing Laravel, Vue.js, MySQL, and Elasticsearch.",
        "Content Management System (CMS): Contributing as a full-stack developer to a scalable and high-performance CMS built with Laravel, Vue.js, MySQL, Redis, and Elasticsearch, ensuring seamless content workflows and system reliability.",
        "Customer Service & Relationship (CSR) Portal: Spearheading backend and frontend enhancements for a comprehensive CSR portal designed for efficient customer support and engagement, leveraging Laravel, Vue.js, MySQL, Redis, and Elasticsearch.",
      ],
    },
    {
      title: "Sr. Software Engineer",
      company: "Softpers Interactive",
      location: "Lahore",
      period: "Jul 2023 - Jul 2024",
      description: [
        "Contributed to MineIQ, a comprehensive mine management system, implementing a ticket-based workflow for tracking tasks and monitoring progress.",
        "Developed Congo Cloth Company (CCC) using Laravel, Inertia, and React JS, incorporating roles for Personnel User, Business User, and Admin.",
        "Implemented a points system for orders and referrals.",
      ],
    },
    {
      title: "Software Engineer",
      company: "IKS Logics Pvt Ltd",
      location: "Lahore",
      period: "Nov 2021 - Jul 2023",
      description: [
        "Developed iProsper CRM using PHP, Cervo, and React JS, integrating Stripe and PayPal for seamless transactions and synchronizing data with Google and Microsoft services.",
        "Built a Pet Health Data Website using Laravel, allowing veterinary professionals to manage pet health records and communicate with pet owners.",
        "Led the development of Ting, an Event Management system using Laravel, integrating NFC technology for seamless attendance tracking and user management.",
        "Enhanced Jane Bond BBQ, a restaurant management system using React JS and Square Point APIs.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Viltco Technologies",
      location: "Lahore",
      period: "Dec 2020 - Nov 2021",
      description: [
        "Developed a Capex Budget Management System using Core PHP, enabling efficient inventory requests and budget management.",
        "Created a Time Sheet Management System using Core PHP, enhancing time tracking and HR operations.",
        "Developed the online food service module for a Restaurant Management System using Laravel and React JS, enhancing food ordering and delivery processes.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: inView ? 1 : 0, width: inView ? "120px" : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-teal-500 mx-auto mt-2 mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Over 5+ years of professional experience building web applications
            and systems
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:ml-auto md:mr-[50%]"
                  : "md:mr-auto md:ml-[50%]"
              } md:w-[45%]`}
            >
              <div className="absolute top-0 left-1/2 md:left-auto md:right-0 md:translate-x-1/2 transform -translate-x-1/2 -translate-y-1/3 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center z-10">
                <Briefcase className="h-5 w-5 text-white" />
              </div>

              <div className="relative bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg border border-slate-100 dark:border-slate-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-teal-500 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {exp.company}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <ChevronRight className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
