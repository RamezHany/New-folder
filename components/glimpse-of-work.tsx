"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

const works = [
  {
    title: "Luxury Brand Campaign",
    category: "Social Media",
    description: "Sophisticated social media strategy for a premium spirits brand that increased engagement by 45%",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    color: "#FF6B00",
  },
  {
    title: "Tech Startup Rebrand",
    category: "Brand Identity",
    description: "Complete visual identity overhaul for an emerging tech company entering global markets",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "#3B82F6",
  },
  {
    title: "Eco-Friendly Product Launch",
    category: "Marketing Campaign",
    description: "Integrated marketing campaign for sustainable product line that achieved 200% ROI",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "#10B981",
  },
  {
    title: "Fashion Week Coverage",
    category: "Media Production",
    description: "Comprehensive media coverage of international fashion event with live streaming components",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    color: "#EC4899",
  },
  {
    title: "Restaurant Chain Promotion",
    category: "Digital & Print",
    description: "Multi-channel campaign for restaurant franchise that increased foot traffic by 30%",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "#F59E0B",
  },
  {
    title: "Financial App UX Design",
    category: "Digital Product",
    description: "User experience redesign for banking application that improved customer satisfaction scores by 60%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "#8B5CF6",
  },
]

export function GlimpseOfWork() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10])
  
  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background elements - replaced blur with patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern instead of blur */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 opacity-10">
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              Array.from({ length: 12 }).map((_, colIndex) => (
                <motion.div 
                  key={`${rowIndex}-${colIndex}`}
                  className="border border-[#FF6B00]/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (rowIndex + colIndex) * 0.02 
                  }}
                />
              ))
            ))}
          </div>
        </div>
        
        {/* Animated diagonal lines */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[1px] bg-[#FF6B00]/20 origin-left"
          style={{ 
            rotate: -35,
            y: y1
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-[1px] bg-[#FF6B00]/20 origin-right"
          style={{ 
            rotate: -35,
            y: y2
          }}
        />
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-[20%] left-[10%] w-40 h-40 border border-[#FF6B00]/30"
          animate={{ 
            rotate: [0, 180, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-40 h-40 border border-[#FF6B00]/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animated elements */}
        <div className="flex flex-col mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              A GLIMPSE OF <br />
              <span className="text-[#FF6B00] relative inline-block">
                OUR WORK
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00]" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-xl font-light">
              Transforming brands through strategic creativity and innovative digital solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <Link
              href="#case-studies"
              className="group flex items-center gap-3 bg-black border border-[#FF6B00] hover:bg-[#FF6B00]/10 text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              <span className="font-medium">VIEW ALL PROJECTS</span>
              <span className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 text-[120px] font-bold text-white/5 select-none hidden md:block"
            style={{ y: y1, rotate: rotate1 }}
          >
            WORK
          </motion.div>
          <motion.div 
            className="absolute -bottom-20 -right-10 text-[120px] font-bold text-white/5 select-none hidden md:block"
            style={{ y: y2, rotate: rotate2 }}
          >
            PROJECTS
          </motion.div>
        </div>
        
        {/* Projects grid with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {works.map((work, index) => {
            // Determine grid placement for each item
            const colSpan = index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4";
            const rowSpan = index === 0 || index === 3 ? "md:row-span-2" : "md:row-span-1";
            const height = index === 0 || index === 3 ? "h-[500px]" : "h-[320px]";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer ${colSpan} ${rowSpan}`}
              >
                <div className="relative overflow-hidden rounded-2xl h-full">
                  {/* Border animation */}
                  <motion.div 
                    className="absolute -inset-1 border border-white/0 z-20 rounded-2xl pointer-events-none"
                    initial={{ borderColor: "rgba(255,255,255,0)" }}
                    whileHover={{ borderColor: work.color }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`relative w-full ${height}`}
                  >
                    {/* Image with parallax effect */}
                    <Image 
                      src={work.image} 
                      alt={work.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ objectPosition: "center" }}
                    />
                    
                    {/* Custom gradient overlay with work-specific color */}
                    <div 
                      className="absolute inset-0 opacity-80 mix-blend-multiply"
                      style={{ 
                        background: `linear-gradient(to top, ${work.color}, transparent)`,
                      }}
                    ></div>
                    
                    {/* Diagonal line accent */}
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-[1px] bg-white/20 origin-left z-10"
                      initial={{ scaleX: 0, rotate: -35 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      {/* Category tag */}
                      <div 
                        className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm w-fit border border-white/20"
                        style={{ backgroundColor: `${work.color}90` }}
                      >
                        {work.category}
                      </div>
                      
                      {/* Title with animated underline */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {work.title}
                      </h3>
                      
                      {/* Description with reveal animation */}
                      <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                        <p className="text-white/90 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light">
                          {work.description}
                        </p>
                        
                        {/* View project button */}
                        <motion.div 
                          className="flex items-center gap-2 text-white font-medium"
                          whileHover={{ x: 5 }}
                        >
                          Explore Case Study
                          <span 
                            className="w-6 h-6 rounded-full flex items-center justify-center border border-white/20"
                            style={{ backgroundColor: work.color }}
                          >
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </motion.div>
                      </div>
                      
                      {/* Corner accent */}
                      <motion.div 
                        className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-transparent z-10"
                        style={{ borderRightColor: work.color }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile view button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center md:hidden"
        >
          <Link
            href="#case-studies"
            className="group flex items-center gap-3 bg-black border border-[#FF6B00] hover:bg-[#FF6B00]/10 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            <span className="font-medium">VIEW ALL PROJECTS</span>
            <span className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
