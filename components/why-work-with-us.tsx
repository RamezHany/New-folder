"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const points = [
  "We craft solutions that provide tangible value in an ever-shifting digital landscape.",
  "Our design and development teams thrive on collaboration.",
  "We bring fresh, innovative designs that set you apart.",
  "We're all about creativity, honesty, and delivering on our promises.",
]

export function WhyWorkWithUs() {
  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Stepped orange background with more dynamic elements */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 w-full sm:w-[85%] md:w-[65%] lg:w-[55%] h-full"
      >
        {/* Main orange background - brighter shade */}
        <div className="absolute top-0 right-0 w-full h-full bg-[#FF7A00]" />

        {/* Steps on the left side - larger and more pronounced */}
        <div className="absolute top-0 left-0 w-1/5 h-1/5 bg-black" />
        <div className="absolute top-1/5 left-1/5 w-1/5 h-1/5 bg-black" />
        <div className="absolute top-2/5 left-2/5 w-1/5 h-1/5 bg-black" />

        {/* Steps on the bottom - larger and more pronounced */}
        <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-black" />
        <div className="absolute bottom-1/5 left-1/5 w-1/5 h-1/5 bg-black" />
        <div className="absolute bottom-2/5 left-2/5 w-1/5 h-1/5 bg-black" />
        
        {/* Additional orange accents - floating elements */}
        <motion.div 
          className="absolute top-[15%] left-[60%] w-16 h-16 bg-[#FF9500] rounded-full"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[40%] w-12 h-12 bg-[#FF5500] rounded-full"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>

      {/* Black overlay shape - adjusted for better contrast */}
      <div className="absolute top-[10%] right-[10%] w-[40%] h-[60%] bg-black z-10 hidden sm:block" />
      
      {/* Additional diagonal orange accent */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute top-0 left-0 w-[30%] h-[5px] bg-[#FF6B00] transform rotate-45 origin-left z-10 hidden md:block"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 sm:mb-10 md:mb-14">
              <span className="relative inline-block">
                WHY WORK
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00] w-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              <br />
              <span className="text-[#FF6B00]">WITH US</span>
            </h2>
            <ul className="space-y-5 sm:space-y-6 md:space-y-8 pl-2">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <span className="w-3 h-3 mt-2 rounded-full bg-[#FF6B00]" />
                  <span className="text-sm sm:text-base md:text-lg font-light">{point}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 md:mt-12 lg:mt-16"
            >
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-3 bg-[#FF6B00] text-white px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg rounded-full hover:bg-[#FF8A00] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('portfolio');
                  if (section) {
                    const navbarHeight = 80;
                    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                      top: sectionTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span className="font-bold">OUR WORKS</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 mt-10 md:mt-0"
          >
            {/* Orange decorative frame around image */}
            <motion.div 
              className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-[#FF6B00] rounded-lg z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            {/* Larger image with hover effect */}
            <motion.div 
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration in modern office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
              
              {/* Floating orange accent on the image */}
              <motion.div 
                className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#FF6B00] z-20"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

