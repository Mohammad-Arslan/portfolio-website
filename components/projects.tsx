"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Layers3 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  role: string;
  details: string;
  contributions?: string[];
  demoVideo?: string;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects: Project[] = [
    {
      id: 8,
      title: "Supernova SIS",
      description: "A multi-branch school ERP serving 10,000+ students, with billing, payments, accounting and payroll workflows.",
      images: [],
      technologies: ["PHP", "Laravel", "React", "MySQL", "Queues"],
      role: "Senior Software Engineer · Beaconhouse Technology",
      details: "Develop and maintain business-critical modules in a school ERP. My work focuses on accurate financial workflows, reliable background processing and safe changes to production systems. This overview describes my engineering contribution without exposing client data or administrative access.",
      contributions: [
        "Investigated billing, concession and carry-forward discrepancies across challans, payments and journal entries.",
        "Added transaction handling, per-student locking and duplicate-processing safeguards for concurrent billing and payment imports.",
        "Moved dependent job dispatches after transaction commit and added regression coverage for financial edge cases.",
      ],
    },
    {
      id: 1,
      title: "iProsper CRM",
      description: "A comprehensive CRM system with payment integration and third-party service synchronization.",
      images: [
        "/images/i1.png",
        "/images/i2.png",
        "/images/i3.png",
        "/images/i4.png",
        "/images/i5.png",
      ],
      technologies: ["PHP", "Cervo", "React JS", "MySQL"],
      role: "Full Stack Developer",
      details: "Integrated Stripe and PayPal for seamless transactions, and synchronized data with Google and Microsoft services. Implemented user authentication, role-based access control, and real-time notifications. The system includes contact management, sales pipeline tracking, email integration, and comprehensive reporting dashboards.",

    },
    {
      id: 2,
      title: "KeyConnect CRM",
      description: "A CRM system tailored for call center solutions, built with Laravel, Vue.js, MySQL, and Elasticsearch.",
      images: [
        "/images/crm1.jpg",
        "/images/crm2.jpg",
        "/images/crm3.jpg",
        "/images/crm4.jpg",
        "/images/crm5.jpg",
        "/images/crm6.jpg",
      ],
      technologies: ["Laravel", "MySQL", "Ajax", "Blade", "VueJS", "Elasticsearch"],
      role: "Full Stack Developer",
      details: "Contributed as a senior full stack developer to the development of a comprehensive CRM system tailored for call center operations. The platform incorporates VoIP and SIP integration to facilitate efficient communication and call handling. Utilized Laravel for building robust backend services, Vue.js and Blade with AJAX for creating responsive and dynamic user interfaces, and Elasticsearch for high-performance real-time search capabilities.",

    },
    {
      id: 3,
      title: "Ting - Event Management System",
      description: "An event management system with NFC technology integration.",
      images: [
        "/images/t1.png",
        "/images/t2.png",
        "/images/t3.png",
        "/images/t4.png",
        "/images/t5.png",
        "/images/t6.png",
        "/images/t7.png",
        "/images/t8.png",
        "/images/t9.png",
        "/images/t10.png",
      ],
      technologies: ["Laravel", "MySQL", "NFC Technology"],
      role: "Backend Developer",
      details: "Led the development of an event management system integrating NFC technology for seamless attendance tracking and user management. Implemented features like event creation, ticket sales, attendee management, and reporting. The system supports multiple event types, custom registration forms, and real-time analytics for event organizers.",

    },
    {
      "id": 4,
      "title": "Capex BNU",
      "description": "A comprehensive management system developed for Beaconhouse National University and its affiliated schools, focusing on staff budgeting, inventory tracking, and accounts management.",
      "images": [
        "/images/b1.jpg",
        "/images/b2.jpg",
        "/images/b3.jpg",
      ],
      "technologies": ["Core PHP", "JavaScript", "Oracle"],
      "role": "Software Engineer",
      "details": "Worked on the budgeting, accounts, and inventory modules as a Software Engineer. Responsibilities included developing and maintaining modules to streamline financial planning, procurement workflows, and stock management. Utilized Core PHP for backend development, JavaScript for client-side interactions, and Oracle for database management to ensure system reliability and efficiency across the university's operations.",

    },    
    {
      id: 5,
      title: "Jane Bond BBQ",
      description: "Square Point API integration for a restaurant management system.",
      images: [
        "/images/j1.jpg",
        "/images/j2.jpg",
        "/images/j3.jpg",
        "/images/j4.jpg",
      ],
      technologies: ["React JS", "Square API"],
      role: "Frontend Developer",
      details: "Integrated Square Point APIs to enhance the functionality of a restaurant management system. Implemented features like payment processing, inventory management, and sales reporting. The system provides real-time sales analytics, employee management, and customer relationship tools specifically designed for BBQ restaurants.",

    },
    {
      id: 6,
      title: "MineIQ",
      description: "A comprehensive mine management system with ticket-based workflow.",
      images: [
        "/images/mi1.png",
        "/images/mi2.png",
        "/images/mi3.png",
        "/images/mi4.png",
      ],
      technologies: ["React JS", "Laravel", "MySQL"],
      role: "Full-Stack Developer",
      details: "Developed a comprehensive mine management system, implementing a ticket-based workflow for task tracking and team management. Implemented features like resource allocation, progress monitoring, and reporting. The system includes safety compliance tracking, equipment maintenance scheduling, and production analytics for mining operations.",

    },
    {
      id: 7,
      title: "RetailPulse",
      description: "A retail ERP and POS SaaS with branch-aware access, accounting, inventory and queued imports.",
      images: ["/videos/retailpulse-poster.jpg"],
      technologies: ["Laravel 13", "React", "Inertia", "MySQL", "Redis", "Docker"],
      role: "Founder & Sole Developer",
      details: "Own product requirements, architecture, implementation and deployment of a multi-tenant retail platform. Built as a modular monolith with workflows spanning POS, purchasing, accounting, HR/payroll, inventory and fixed assets.",
      contributions: [
        "Designed branch-aware authorization and approval workflows across business modules.",
        "Built a streaming import/export engine with separate validation and processing stages, alongside queued jobs and real-time updates using Laravel Reverb.",
        "Implemented accounting journal workflows and configured Docker-based deployment on a Contabo VPS with Nginx, Laravel Octane and Horizon.",
      ],
      demoVideo: "/videos/retailpulse.mp4",
    },
  ].sort((a, b) => {
    const priority = [7, 8]
    const rank = (id: number) => priority.includes(id) ? priority.indexOf(id) : id + 2
    return rank(a.id) - rank(b.id)
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Featured Projects
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
            Selected SaaS and ERP work, followed by client projects across CRM, operations, events and commerce.
          </motion.p>
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          Explore screenshots, project overviews and a recorded RetailPulse walkthrough. Source code and client admin access remain private.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden border border-slate-100 dark:border-slate-600 group hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-center bg-slate-900 px-6 text-white">
                    <Layers3 className="mb-3 h-8 w-8 text-teal-400" />
                    <p className="text-xs uppercase tracking-widest text-teal-300">Engineering case study</p>
                    <p className="mt-2 text-xl font-semibold">School billing &amp; operations</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => {
                      setCurrentImageIndex(0)
                      setSelectedProject(project)
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                <p className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {project.demoVideo ? "Screenshots & recorded walkthrough" : project.images.length ? "Screenshot gallery" : "Project overview"}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.role}</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-teal-500 hover:text-teal-600 p-0 h-auto"
                      onClick={() => {
                        setCurrentImageIndex(0)
                        setSelectedProject(project)
                      }}
                    >
                      <span className="mr-1">Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null) }}>
          {selectedProject && (
            <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto bg-white p-6 text-slate-800 dark:bg-slate-800 dark:text-white">
              <DialogTitle className="pr-8 text-2xl leading-tight">{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
              {selectedProject.images.length > 0 && (
                <figure>
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1} of ${selectedProject.images.length}`}
                    width={1200}
                    height={800}
                    className="max-h-[50vh] w-full rounded-md bg-slate-100 object-contain dark:bg-slate-900"
                  />
                  <figcaption className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Screenshot {currentImageIndex + 1} of {selectedProject.images.length}
                  </figcaption>
                  {selectedProject.images.length > 1 && (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <Button variant="outline" aria-label="Previous screenshot" onClick={() => setCurrentImageIndex((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length)}>
                        Previous
                      </Button>
                      <Button variant="outline" aria-label="Next screenshot" onClick={() => setCurrentImageIndex((index) => (index + 1) % selectedProject.images.length)}>
                        Next
                      </Button>
                    </div>
                  )}
                </figure>
              )}
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-teal-100 px-2 py-1 text-xs text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">{tech}</span>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{selectedProject.role}</p>
              <p className="leading-7 text-slate-700 dark:text-slate-300">{selectedProject.details}</p>
              {selectedProject.contributions && (
                <div>
                  <h4 className="mb-3 font-semibold">Engineering contribution</h4>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
                    {selectedProject.contributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
              {selectedProject.demoVideo && (
                <div>
                  <h4 className="mb-2 font-semibold">Recorded walkthrough</h4>
                  <video className="w-full rounded-lg bg-slate-950" controls preload="none" poster={selectedProject.images[0]}>
                    <source src={selectedProject.demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <p className="border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {selectedProject.title === "RetailPulse"
                  ? "Privately developed product. The screenshots and recording show the application without providing source code or a public login."
                  : "Client project. Administrative access and source code are private; this portfolio presents only the project overview and available screenshots."}
              </p>
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  )
}
