"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React JS", level: 75 },
        { name: "NEXT JS", level: 60 },
        { name: "JavaScript", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 50 },
        { name: "Bootstrap", level: 60 },
        { name: "jQuery", level: 70 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "PHP", level: 75 },
        { name: "Laravel", level: 90 },
        { name: "SQL", level: 80 },
        { name: "Ajax", level: 70 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQL Server", level: 80 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      name: "Third-Party API Integrations",
      skills: [
        { name: "Google APIs", level: 65 },
        { name: "Facebook API", level: 70 },
        { name: "Instagram API", level: 70 },
        { name: "Twitter API", level: 60 },
        { name: "Shopify API", level: 85 },
        { name: "Square POS", level: 90 },
        { name: "YouTube API", level: 80 },
        { name: "Twillio", level: 80 },
      ],
    },
    {
      name: "Payment Gateways",
      skills: [
        { name: "Stripe", level: 80 },
        { name: "EasyPaisa", level: 80 },
        { name: "JazzCash", level: 80 },
      ],
    },
    {
      name: "Other",
      skills: [
        { name: "Elasticsearch", level: 60 },
        { name: "Convex", level: 50 },
      ],
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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Technical Skills
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
            Proficient in a wide range of technologies and frameworks
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-teal-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
            Skills Cloud
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[...new Set(skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)))].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 text-slate-700 dark:text-slate-200 rounded-full border border-teal-500/30"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
