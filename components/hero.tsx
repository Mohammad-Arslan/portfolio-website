"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.05] bg-[size:50px_50px]" />

      {/* Background image overlay with reduced opacity */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/mohammad-arslan.png"
          alt="Background"
          fill
          className="object-cover object-center blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="w-[300px] h-[300px] rounded-full bg-teal-500/20 blur-3xl -ml-40 mt-40" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-teal-400 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
              Mohammad Arslan
            </h1>
            <h3 className="text-xl md:text-3xl font-semibold mb-6 text-slate-200">Senior Software Engineer</h3>
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Building robust web applications with PHP, Laravel, React, and Next.js with over 5+ years of experience.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white px-6 py-2 rounded-md"
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Projects
              </Button>
              <a href="/files/mohammad-arslan-resume.pdf" download="Mohammad_Arslan_Resume.pdf">
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 flex items-center"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown className="h-6 w-6 text-white/70" />
      </motion.div>
    </section>
  )
}
