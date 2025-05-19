"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mohammad Arslan</h3>
            <p className="text-slate-400 mb-4">
              Senior Software Engineer specializing in web development with PHP,
              Laravel, React, and Next.js.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mohammad-arslan-rajpoot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:shanitoor73@gmail.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Achievements
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Testimonials
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-slate-400">+92-3453221067</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-slate-400">shanitoor73@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mohammad Arslan. All rights
            reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
