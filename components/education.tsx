"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const certifications = [
    {
      title: "Mastering In Full Stack Laravel/React JS",
      issuer: "Udemy",
      date: "2022",
      icon: <BookOpen className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "SQL Mastering",
      issuer: "Udemy",
      date: "2021",
      icon: <BookOpen className="h-6 w-6 text-teal-500" />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Education & Certifications
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
            My academic background and professional development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Education</h3>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-teal-500"></div>
              <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">BS Software Engineering</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-2">Virtual University of Pakistan, Lahore</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Graduated: 2018</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0 last:border-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-teal-500"></div>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{cert.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">{cert.issuer}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Completed: {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
