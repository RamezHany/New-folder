"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CustomCursor } from "@/components/custom-cursor"
import { ParallaxText } from "@/components/parallax-text"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { InteractiveBackground } from "@/components/interactive-background"
import { CountUp } from "@/components/count-up"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { WhatWeOffer } from "@/components/what-we-offer"

import { ClientTestimonials } from "@/components/client-testimonials"
import { GlimpseOfWork } from "@/components/glimpse-of-work"
import { WhyWorkWithUs } from "@/components/why-work-with-us"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <InteractiveBackground />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a0e00] z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#FF6B00]/15 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * -50 - 10 + "%"],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px"
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium mb-4">
                  DIGITAL MARKETING AGENCY
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We Create <br />
                <span className="text-[#FF6B00]">Digital Experiences</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Transform your brand with cutting-edge digital solutions that drive growth and engagement in today's competitive landscape.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button 
                  className="group bg-[#FF6B00] px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg hover:bg-[#FF6B00]/90 transition-all duration-300"
                  onClick={() => {
                    const section = document.getElementById('contact');
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
                  Get Started
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="group bg-white/5 border-[#FF6B00]/50 text-white hover:bg-[#FF6B00]/10 hover:border-[#FF6B00] px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg transition-all duration-300"
                  onClick={() => {
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
                  <span className="flex items-center">
                    <span>Our Work</span>
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-5 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-[#FF6B00] mr-1">150</span>
                  <span className="text-2xl font-bold text-[#FF6B00]">+</span>
                  <span className="text-xs text-gray-400 ml-1 block">Projects<br/>Completed</span>
                </div>
                <div className="w-px h-8 bg-white/20 mx-2"></div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-[#FF6B00] mr-1">98</span>
                  <span className="text-2xl font-bold text-[#FF6B00]">%</span>
                  <span className="text-xs text-gray-400 ml-1 block">Client<br/>Satisfaction</span>
                </div>
              </motion.div>
              
              {/* Partner logos - smaller version */}
              <motion.div 
                className="mt-5 overflow-hidden max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <p className="text-sm text-gray-300 mb-3 font-medium">Trusted by leading brands</p>
                <div className="flex items-center gap-4 overflow-hidden">
                  <motion.div 
                    className="flex items-center gap-4"
                    animate={{ x: [0, -500, 0] }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Partner logos - real logos */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" 
                          alt="Google" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" 
                          alt="Amazon" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" 
                          alt="Microsoft" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" 
                          alt="Spotify" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                          alt="Slack" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" 
                          alt="Adobe" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    {/* Duplicate for infinite scroll */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" 
                          alt="Google" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" 
                          alt="Amazon" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" 
                          alt="Microsoft" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" 
                          alt="Spotify" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                          alt="Slack" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center">
                        <img 
                          src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" 
                          alt="Adobe" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden md:block"
            >
              <div className="relative h-[500px] w-full">
                {/* Main showcase elements - 3D grid of images */}
                <div className="absolute inset-0 perspective-1000">
                  {/* Image 1 - Main showcase */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-48 rounded-lg bg-gradient-to-br from-[#FF6B00]/30 to-[#FF9D5C]/30 backdrop-blur-sm overflow-hidden">
                      {/* Marketing campaign image */}
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Digital Marketing Campaign" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-20 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-16 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 2 - Secondary showcase */}
                  <motion.div 
                    className="absolute top-[10%] right-[5%] w-64 h-64 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 5 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-36 rounded-lg bg-gradient-to-tr from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Social media campaign image */}
                      <img 
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                        alt="Social Media Campaign" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-16 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-12 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 3 - Tertiary showcase */}
                  <motion.div 
                    className="absolute bottom-[10%] left-[15%] w-56 h-56 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: -5 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-32 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Brand identity image */}
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Brand Identity" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-12 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-10 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 4 - Fourth showcase */}
                  <motion.div 
                    className="absolute top-[70%] right-[15%] w-48 h-48 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateY: 10 }}
                    animate={{ opacity: 1, y: 0, rotateY: 3 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-28 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* Web design image */}
                      <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Web Design" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-8 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-8 bg-white/30 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Image 5 - Fifth showcase (new) */}
                  <motion.div 
                    className="absolute top-[15%] left-[15%] w-52 h-52 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: -50, rotateY: -8 }}
                    animate={{ opacity: 1, y: 0, rotateY: -2 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#FF6B00]/15 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 h-30 rounded-lg bg-gradient-to-tl from-[#FF6B00]/20 to-[#FF9D5C]/20 backdrop-blur-sm overflow-hidden">
                      {/* SEO/Analytics image */}
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                        alt="Analytics Dashboard" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-10 rounded-lg bg-white/5 flex flex-col justify-center px-3">
                      <div className="h-2 w-14 bg-white/30 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Abstract shape elements */}
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9D5C] filter blur-md opacity-30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#FF6B00]/70 to-[#FF9D5C]/70 filter blur-md opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center"
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="w-10 h-10 rounded-md bg-[#FF6B00]/80"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => {
            const section = document.getElementById('services');
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
          <span className="text-sm text-gray-400 mb-2 cursor-pointer hover:text-[#FF6B00] transition-colors">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 cursor-pointer hover:border-[#FF6B00] transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section id="services">
        <WhatWeOffer />
      </section>

      {/* Glimpse of Work Section */}
      <section id="portfolio">
        <GlimpseOfWork />
      </section>

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal lines */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-[#FF6B00]/20 origin-left"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-full h-[1px] bg-[#FF6B00]/20 origin-right"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute top-[20%] right-[10%] w-40 h-40 border border-[#FF6B00]/30"
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
            className="absolute bottom-[20%] left-[10%] w-32 h-32 border border-[#FF6B00]/30 rounded-full"
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
          <div className="relative mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our <span className="text-[#FF6B00] relative inline-block">
                Expertise
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00] w-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </motion.h2>
            
            {/* Decorative text */}
            <motion.div 
              className="absolute -top-20 -right-10 text-[120px] font-bold text-white/5 select-none hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              SERVICES
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Digital Strategy", desc: "Data-driven approaches for online dominance" },
              { title: "Brand Evolution", desc: "Crafting identities that resonate and endure" },
              { title: "Social Amplification", desc: "Boosting engagement across all platforms" },
              { title: "Performance Analytics", desc: "Turning data into actionable insights" },
              { title: "Content Mastery", desc: "Compelling narratives that captivate audiences" },
              { title: "SEO Domination", desc: "Climbing to the top of search results" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Border animation */}
                <motion.div 
                  className="absolute -inset-1 border border-[#FF6B00]/0 rounded-2xl z-0"
                  whileHover={{ borderColor: "rgba(255,107,0,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-black border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300">
                    {/* Number indicator */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Corner accent */}
                    <motion.div 
                      className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-[#FF6B00] z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    />
                    
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#FF6B00]">{service.title}</h3>
                    <p className="text-base sm:text-lg font-light">{service.desc}</p>
                    
                    <motion.div 
                      className="mt-6 flex items-center text-[#FF6B00] font-medium group"
                      whileHover={{ x: 5 }}
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
                    </motion.div>
                  </GlassmorphicCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal lines */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-[#FF6B00]/20 origin-left"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-full h-[1px] bg-[#FF6B00]/20 origin-right"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute top-[30%] left-[10%] w-32 h-32 border border-[#FF6B00]/30"
            animate={{ 
              rotate: [0, 180, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Our <span className="text-[#FF6B00]">Impact</span>
                </motion.h2>
                
                {/* Decorative element */}
                <motion.div 
                  className="w-24 h-1 bg-[#FF6B00]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At ArcOne, we don't just market - we transform. Our strategies have revolutionized industries and
                propelled brands to unprecedented heights.
              </motion.p>
           
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CountUp className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl border border-[#FF6B00]/50" end={250} suffix="+" title="Brands Elevated" />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CountUp className="bg-black p-4 sm:p-6 rounded-2xl border border-white/10" end={15} suffix="+" title="Years of Innovation" />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CountUp className="bg-black p-4 sm:p-6 rounded-2xl border border-white/10" end={98} suffix="%" title="Client Satisfaction" />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CountUp
                  className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl border border-[#FF6B00]/50"
                  end={500}
                  suffix="M+"
                  title="Impressions Delivered"
                />
              </motion.div>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-10 -right-10 text-[120px] font-bold text-white/5 select-none hidden lg:block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                IMPACT
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal lines */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-[#FF6B00]/20 origin-left"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-full h-[1px] bg-[#FF6B00]/20 origin-right"
            initial={{ scaleX: 0, rotate: -35 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute bottom-[30%] right-[10%] w-32 h-32 border border-[#FF6B00]/30"
            animate={{ 
              rotate: [0, 180, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          
          {/* Grid pattern */}
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 opacity-5">
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              Array.from({ length: 6 }).map((_, colIndex) => (
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Let's <span className="text-[#FF6B00] relative inline-block">
                    Ignite
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00] w-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </span>
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to set your brand ablaze? Our team of marketing virtuosos is poised to launch your success into
                the stratosphere.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button className="group bg-[#FF6B00] px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg hover:bg-[#FF6B00]/80 transition-all duration-300 relative overflow-hidden">
                  <motion.span 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Fuel Your Success</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 relative z-10">→</span>
                </Button>
              </motion.div>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-20 -left-10 text-[120px] font-bold text-white/5 select-none hidden lg:block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                CONNECT
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Border animation */}
              <motion.div 
                className="absolute -inset-1 border border-[#FF6B00]/0 rounded-2xl z-0"
                whileHover={{ borderColor: "rgba(255,107,0,0.5)" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-black border border-white/10">
                  {/* Corner accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-[#FF6B00] z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#FF6B00]">Connect With Us</h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-2 flex items-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <strong>Email:</strong> <span className="ml-1">ignite@arcone.com</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-2 flex items-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <strong>Phone:</strong> <span className="ml-1">+1 (555) 123-4567</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-4 flex items-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <strong>Location:</strong> <span className="ml-1">123 Innovation Ave, Digital City, DC 90210</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm sm:text-base font-light border-t border-white/10 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Follow our signal for the latest in marketing brilliance.
                  </motion.p>
                  
                  <motion.div 
                    className="flex space-x-3 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                      <motion.div 
                        key={social}
                        className="w-8 h-8 rounded-full bg-[#FF6B00]/20 flex items-center justify-center cursor-pointer"
                        whileHover={{ y: -5, backgroundColor: '#FF6B00' }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-xs">{social[0].toUpperCase()}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </GlassmorphicCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
