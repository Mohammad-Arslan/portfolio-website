"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Download, MapPin, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#07111f] pt-24 text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.05] bg-[size:50px_50px]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="w-[300px] h-[300px] rounded-full bg-teal-500/20 blur-3xl -ml-40 mt-40" />
      </div>

      <div className="container mx-auto px-5 lg:px-8 z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-2 text-sm text-teal-200"><Radio className="h-4 w-4" /> Open to remote and relocation opportunities</div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[.22em] text-teal-400">Senior Full-Stack Engineer</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] md:text-7xl">
              I build dependable <span className="text-teal-400">SaaS and ERP systems</span> that scale.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Mohammad Arslan — nearly six years delivering PHP/Laravel backends, React experiences, REST APIs, data-heavy workflows and enterprise integrations.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-400" /> Lahore, Pakistan</span><span>Remote: US · UK · UAE · KSA</span><span>On-site: UAE · KSA</span></div>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
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
                View selected work <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="/Mohammad_Arslan_Resume.pdf" download="Mohammad_Arslan_Resume.pdf">
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
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : .96 }} transition={{ duration: .8, delay: .35 }} className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-5 rounded-[2rem] border border-teal-400/15" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800 shadow-2xl">
              <Image src="/images/pic.jpg" alt="Mohammad Arslan, Senior Full-Stack Engineer" fill className="object-cover object-top" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/80 to-transparent p-7 pt-24"><p className="text-sm text-teal-300">Core stack</p><p className="mt-1 text-xl font-semibold">Laravel · React · MySQL · Docker</p></div>
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
