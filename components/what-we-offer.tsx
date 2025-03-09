"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const offerings = [
  {
    number: "01",
    title: "Digital Marketing",
    description: "Strategic online campaigns that drive engagement, conversions, and brand awareness across multiple digital channels.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    number: "02",
    title: "Public Relations - PR",
    description: "Building and maintaining a positive brand image through strategic communication with media and target audiences.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    number: "03",
    title: "Media Production",
    description: "High-quality video, photo, and audio content creation that tells your brand story in compelling ways.",
    image: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  }, 
  {
    number: "04",
    title: "Offline Marketing",
    description: "Traditional marketing strategies including print, events, and direct mail that complement your digital presence.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
]

export function WhatWeOffer() {
  return (
    <section className="py-16 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[#FF6B00]/20" />
        
        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-[20%] right-[10%] w-32 h-32 border-2 border-[#FF6B00] rotate-45"
          animate={{ 
            rotate: [45, 90, 45],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-[30%] right-[30%] w-24 h-24 border-2 border-[#FF6B00] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-[10%] w-[1px] h-full bg-[#FF6B00]/30 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-0 left-[30%] w-[1px] h-full bg-[#FF6B00]/30 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div 
          className="absolute top-0 left-[50%] w-[1px] h-full bg-[#FF6B00]/30 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.div 
          className="absolute top-0 left-[70%] w-[1px] h-full bg-[#FF6B00]/30 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-12 sm:mb-20 text-left">
            WHAT WE <span className="text-[#FF6B00] relative inline-block">
              OFFER
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00] w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          
          {/* Decorative element */}
          <motion.div 
            className="absolute -top-10 -right-10 text-[120px] font-bold text-white/5 select-none hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            SERVICES
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full relative"
            >
              {/* Number and title */}
              <div className="flex items-center gap-4 mb-6">
                <motion.span 
                  className="text-3xl font-bold text-[#FF6B00]"
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {offering.number}
                </motion.span>
                <div className="w-16 h-[1px] bg-[#FF6B00]"></div>
                <h3 className="text-2xl font-bold">{offering.title}</h3>
              </div>
              
              {/* Image with animated border */}
              <div className="relative mb-6">
                <motion.div 
                  className="absolute -inset-2 border border-[#FF6B00] rounded-lg z-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[240px] sm:h-[280px] rounded-lg overflow-hidden z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Animated corner accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#FF6B00] z-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                </motion.div>
              </div>
              
              {/* Description */}
              <p className="text-base text-gray-300 mb-6 font-light">{offering.description}</p>
              
              {/* Learn more button */}
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center text-[#FF6B00] font-medium mt-auto group"
              >
                <span className="mr-2">Learn more</span>
                <motion.div
                  className="relative w-6 h-6 rounded-full border border-[#FF6B00] flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.svg 
                    className="w-3 h-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.button>
              
              {/* Absolute positioned number for background effect */}
              <div className="absolute -right-4 -bottom-10 text-[100px] font-bold text-white/5 select-none hidden md:block">
                {offering.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

