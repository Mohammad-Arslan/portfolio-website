"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Expertise", "#skills"],
  ["Work", "#projects"],
  ["Contact", "#contact"],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/85 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="font-semibold tracking-tight"><span className="text-teal-400">MA</span><span className="text-white/30"> / </span>Senior Engineer</a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</a>)}
          <a href="#contact" className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">Let&apos;s talk</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#07111f] px-5 py-4 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-slate-200">{label}</a>)}</div>}
    </header>
  )
}
