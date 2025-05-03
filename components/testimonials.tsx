"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Abad",
      role: "Client",
      company: "",
      quote:
        "Mohammad Arslan consistently delivers work on time and I appreciate his use of best practices and clean code. His attention to detail and commitment to quality make him a valuable developer to work with.",
      type: "client",
    },
    {
      id: 2,
      name: "IKS Logic Pvt Ltd",
      role: "Former Employer",
      company: "IKS Logic",
      quote:
        "Mohammad Arslan is truly an all-rounder. His ability to easily adapt to any new tech stack makes him an exceptional asset to any development team. His versatility and quick learning are commendable.",
      type: "employer",
    },
    {
      id: 3,
      name: "Mr. Sufan",
      role: "Team Lead",
      company: "IKS Logics",
      quote:
        "It's ethically very good to work with Mohammad Arslan. His collaborative approach and technical skills make him a valuable team member who consistently contributes to project success.",
      type: "colleague",
    },
    {
      id: 4,
      name: "Mr. Syed Zahid Kazmi",
      role: "Team Lead",
      company: "Viltco Technologies",
      quote:
        "Working with Mohammad Arslan has been a pleasure. His dedication to quality and ability to tackle complex problems make him stand out as a developer who truly cares about his craft.",
      type: "colleague",
    },
    {
      id: 5,
      name: "Mr. Asadullah",
      role: "Team Lead",
      company: "Softpers",
      quote:
        "Mohammad Arslan is a team player who brings both technical expertise and a positive attitude to every project. His willingness to help others and share knowledge makes him an invaluable team member.",
      type: "colleague",
    },
    {
      id: 6,
      name: "Mr. Faisal",
      role: "Team Lead",
      company: "Softpers",
      quote:
        "I've had the pleasure of leading Mohammad Arslan, and I'm consistently impressed by his problem-solving abilities and commitment to delivering high-quality work. He's a developer who truly understands the importance of clean, maintainable code.",
      type: "colleague",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-800 dark:text-white"
          >
            Testimonials
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
            What clients, employers, and colleagues say about my work
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8 border border-slate-100 dark:border-slate-600"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  {testimonials[currentIndex].type === "client" ? (
                    <User className="h-8 w-8 text-teal-500" />
                  ) : testimonials[currentIndex].type === "employer" ? (
                    <Briefcase className="h-8 w-8 text-teal-500" />
                  ) : (
                    <User className="h-8 w-8 text-teal-500" />
                  )}
                </div>
              </div>

              <div className="text-center mb-6">
                <Quote className="h-8 w-8 text-teal-500/30 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-teal-500">
                  {testimonials[currentIndex].role}
                  {testimonials[currentIndex].company &&
                    ` at ${testimonials[currentIndex].company}`}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/20"
            >
              <ChevronLeft className="h-5 w-5 text-teal-500" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex
                      ? "bg-teal-500"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-teal-300 dark:hover:bg-teal-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/20"
            >
              <ChevronRight className="h-5 w-5 text-teal-500" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
