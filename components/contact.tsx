"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Get In Touch
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
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Contact Information
            </motion.h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300">+92-3453221067</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">shanitoor73@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">LMDC, Lahore, Pakistan</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mohammad-arslan-rajpoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 hover:bg-teal-200 dark:hover:bg-teal-800/30 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 hover:bg-teal-200 dark:hover:bg-teal-800/30 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="/files/mohammad-arslan-resume.pdf"
                  download="Mohammad_Arslan_Resume.pdf"
                  className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 hover:bg-teal-200 dark:hover:bg-teal-800/30 transition-colors"
                >
                  <Download className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 border border-slate-100 dark:border-slate-600"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Send Me a Message
            </motion.h3>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitSuccess ? (
                    <span className="flex items-center">Message Sent Successfully!</span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
