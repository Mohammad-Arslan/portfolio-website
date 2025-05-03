"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Award, Calendar, Building } from "lucide-react"

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      title: "Performance Recognition Award",
      organization: "IKS Logics",
      date: "2022",
      description: "Awarded for outstanding performance and contributions to key projects.",
      image: "/images/performance.jpg",
    },
    // You can add more achievements here in the future
  ]

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
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Achievements & Recognition
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
            Recognition for excellence and contributions in the field
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full h-[300px] md:h-full">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-teal-500 mr-2" />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{achievement.title}</h3>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                    <Building className="h-4 w-4 text-teal-500 mr-2" />
                    <span>{achievement.organization}</span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="h-4 w-4 text-teal-500 mr-2" />
                    <span>{achievement.date}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
