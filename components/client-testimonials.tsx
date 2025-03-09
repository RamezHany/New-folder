"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechGiant",
    quote: "ArcOne transformed our brand. Their strategies catapulted us to industry leadership.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    role: "CMO, EcoFriendly",
    quote: "The results speak for themselves. ArcOne delivered beyond our wildest expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, StartUp",
    quote: "Partnering with ArcOne was the best decision for our growth. Simply outstanding.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
]

export const ClientTestimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
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
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-[10%] right-[10%] w-32 h-32 border border-[#FF6B00]/30"
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
          className="absolute bottom-[10%] left-[10%] w-24 h-24 border border-[#FF6B00]/30 rounded-full"
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
      
      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity, scale }}>
        <div className="relative mb-16">
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Client <span className="text-[#FF6B00]">Voices</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-[#FF6B00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* Decorative text */}
          <motion.div 
            className="absolute -top-20 -left-10 text-[120px] font-bold text-white/5 select-none hidden lg:block"
            style={{ y: y1 }}
          >
            CLIENTS
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
              }}
            >
              {/* Border animation */}
              <motion.div 
                className="absolute -inset-1 border border-[#FF6B00]/0 rounded-xl z-0"
                whileHover={{ borderColor: "rgba(255,107,0,0.5)" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="bg-black border border-white/10 p-8 rounded-xl relative z-10"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote mark */}
                <div className="absolute -top-5 -left-2 text-6xl text-[#FF6B00] font-serif opacity-30">"</div>
                
                <p className="text-xl mb-8 font-light relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF6B00] mr-4 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-r-[30px] border-b-transparent border-r-[#FF6B00] z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                />
              </motion.div>
              
              {/* Animated number */}
              <div className="absolute -right-4 -bottom-10 text-[100px] font-bold text-white/5 select-none hidden md:block">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative element */}
        <motion.div 
          className="w-full h-[1px] bg-[#FF6B00]/30 mt-20 relative overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 left-0 w-20 h-full bg-[#FF6B00]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

