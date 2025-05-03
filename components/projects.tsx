"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  role: string;
  details: string;
  link: string;
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
      link: "#",
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
      link: "#",
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
      link: "#",
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
      "link": "#"
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
      link: "#",
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
      link: "#",
    },
  ]

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
            A selection of my recent work and contributions
          </motion.p>
        </div>

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
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{project.description}</p>
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
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.role}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-teal-500 hover:text-teal-600 p-0 h-auto"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span className="mr-1">Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-red-500 backdrop-blur-sm p-2 rounded-full text-white hover:bg-red-600 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <button
                    className="bg-teal-500 p-2 rounded-full text-white hover:bg-teal-600 transition-colors shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === 0 ? selectedProject.images.length - 1 : prev - 1
                      );
                    }}
                  >
                    <ChevronRight className="h-5 w-5 rotate-180" />
                  </button>
                  <div className="flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentImageIndex === index
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                      />
                    ))}
                  </div>
                  <button
                    className="bg-teal-500 p-2 rounded-full text-white hover:bg-teal-600 transition-colors shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === selectedProject.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Role</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selectedProject.role}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Description</h4>
                  <p className="text-slate-700 dark:text-slate-300">{selectedProject.details}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
