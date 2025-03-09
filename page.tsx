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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a0e00] z-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF6B00]/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
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
                  DIGITAL AGENCY
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We Create <br />
                <span className="text-[#FF6B00] relative">
                  Digital Experiences
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-[#FF6B00]" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-lg"
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
                <Button className="group bg-[#FF6B00] px-6 py-3 text-lg hover:bg-[#FF6B00]/90 transition-all duration-300">
                  Get Started
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
                <Button variant="outline" className="group border-white/20 text-white hover:bg-white/10 px-6 py-3 text-lg transition-all duration-300">
                  Our Work
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div>
                  <CountUp end={150} duration={2} title="Projects Completed" suffix="+" className="text-left" />
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <CountUp end={98} duration={2} title="Client Satisfaction" suffix="%" className="text-left" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Abstract shape elements */}
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9D5C] filter blur-md"
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
                  className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#FF6B00]/70 to-[#FF9D5C]/70 filter blur-md"
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
                
                {/* Center showcase element */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 h-40 rounded-lg bg-gradient-to-br from-[#FF6B00]/30 to-[#FF9D5C]/30 backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 left-4 right-4 h-16 rounded-lg bg-white/5"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
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
        
        {/* Parallax Text */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden">
          <ParallaxText baseVelocity={-5}>Strategic Marketing • Creative Solutions • Digital Innovation • </ParallaxText>
        </div>
      </section>

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Glimpse of Work Section */}
      <GlimpseOfWork />

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 sm:mb-16 text-left">
            Our Expertise
          </h2>
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
              >
                <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-[#FF6B00]/10 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#FF6B00]">{service.title}</h3>
                  <p className="text-base sm:text-lg">{service.desc}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Portfolio Section */}
      {/* <CreativePortfolio /> */}

      {/* Innovative Design Section */}
      {/* <InnovativeDesignSection /> */}

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">Our Impact</h2>
              <p className="text-lg sm:text-xl">
                At ArcOne, we don't just market - we transform. Our strategies have revolutionized industries and
                propelled brands to unprecedented heights.
              </p>
              <Button
                variant="outline"
                className="group text-base sm:text-lg py-3 sm:py-6 px-6 sm:px-8 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
              >
                Explore Our Success
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CountUp className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl" end={250} suffix="+" title="Brands Elevated" />
              <CountUp className="bg-white/10 p-4 sm:p-6 rounded-2xl" end={15} suffix="+" title="Years of Innovation" />
              <CountUp className="bg-white/10 p-4 sm:p-6 rounded-2xl" end={98} suffix="%" title="Client Satisfaction" />
              <CountUp
                className="bg-[#FF6B00] p-4 sm:p-6 rounded-2xl"
                end={500}
                suffix="M+"
                title="Impressions Delivered"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">Let's Ignite</h2>
              <p className="text-lg sm:text-xl">
                Ready to set your brand ablaze? Our team of marketing virtuosos is poised to launch your success into
                the stratosphere.
              </p>
              <Button className="group bg-[#FF6B00] px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl hover:bg-[#FF6B00]/80 transition-all duration-300">
                Fuel Your Success
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
            <GlassmorphicCard className="p-6 sm:p-8 rounded-2xl bg-white/5">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#FF6B00]">Connect With Us</h3>
              <p className="mb-2">
                <strong>Email:</strong> ignite@arcone.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="mb-4">
                <strong>Location:</strong> 123 Innovation Ave, Digital City, DC 90210
              </p>
              <p className="text-sm sm:text-base">Follow our signal for the latest in marketing brilliance.</p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </main>
  )
}

