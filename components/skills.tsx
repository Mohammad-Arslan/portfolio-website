"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Braces, Database, Layers3, PlugZap, ServerCog, Workflow } from "lucide-react"

const expertise = [
  { icon: ServerCog, title: "Backend & architecture", text: "Production-grade Laravel and PHP systems with clean domain boundaries, queues, caching and maintainable service layers.", skills: ["PHP", "Laravel", "REST APIs", "Queues", "Redis"] },
  { icon: Braces, title: "Frontend applications", text: "Responsive product interfaces for complex workflows, dashboards and role-based platforms.", skills: ["React", "Next.js", "Vue.js", "JavaScript", "Inertia.js"] },
  { icon: Database, title: "Data & search", text: "Relational modelling, query optimization and fast search for operational, reporting and content-heavy systems.", skills: ["MySQL", "SQL Server", "Oracle", "MongoDB", "Elasticsearch"] },
  { icon: Layers3, title: "Business platforms", text: "Hands-on delivery across SaaS, ERP, CRM, CMS, LMS and multi-role enterprise workflows.", skills: ["SaaS", "ERP", "CRM", "CMS", "LMS"] },
  { icon: PlugZap, title: "Integrations", text: "Reliable payments, communications and third-party services designed around failure handling and data consistency.", skills: ["Stripe", "PayPal", "Square", "Google APIs", "Twilio"] },
  { icon: Workflow, title: "Delivery & operations", text: "Pragmatic engineering practices from testing and performance tuning through containerized deployment.", skills: ["Docker", "Git", "Testing", "Performance", "CI/CD"] },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="skills" className="bg-[#07111f] py-24 text-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[.2em] text-teal-400">Technical expertise</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">A senior toolkit, organized around outcomes.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">No arbitrary proficiency scores—just the technologies and system types I use to ship dependable products.</p>
        </div>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }} className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map(({ icon: Icon, title, text, skills }) => (
            <motion.article key={title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="bg-[#0b1727] p-7 transition hover:bg-[#102033]">
              <Icon className="h-7 w-7 text-teal-400" />
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{skill}</span>)}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
