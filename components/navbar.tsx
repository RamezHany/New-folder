"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react"

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      
      // Update active item based on scroll position
      const sections = [
        { id: "hero", name: "Home" },
        { id: "services", name: "Services" },
        { id: "portfolio", name: "Portfolio" },
        { id: "about", name: "About" },
        { id: "contact", name: "Contact" }
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section.name);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string, itemName: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset for the navbar height
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setActiveItem(itemName);
    }
  };

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <motion.nav
      className="fixed w-full z-50 transition-all duration-300 flex justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${
        scrollPosition > 50 ? "bg-black/90 border border-[#FF6B00]/20 shadow-lg shadow-black/20" : ""
      } max-w-6xl mx-auto transition-all duration-300 ${
        scrollPosition > 50 ? "mt-2 px-8 rounded-full" : "px-6"
      }`}>
        <div className="flex justify-between items-center py-4">
          <Link 
            href="#hero" 
            className="relative group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero", "Home");
            }}
          >
            <motion.div
              className="absolute -inset-2 bg-[#FF6B00]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span 
              className="text-xl font-bold text-[#FF6B00] relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ArcOne
            </motion.span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 px-7 py-2 rounded-full relative">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 -mx-3 -my-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 z-0"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={item.href} 
                      className={`text-base relative px-3 py-1.5 rounded-full transition-colors duration-300 ${
                        activeItem === item.name ? "text-[#FF6B00] font-medium" : "text-white"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id, item.name);
                      }}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <motion.span 
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 h-0.5 bg-[#FF6B00] w-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
            
            <motion.button
              className="bg-[#FF6B00] text-white px-5 py-2 rounded-full font-medium ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={() => scrollToSection("contact", "Contact")}
            >
              Get Started
            </motion.button>
          </div>
          
          <motion.button
            className="md:hidden text-white focus:outline-none relative"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute -inset-3 bg-[#FF6B00]/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
            <svg
              className="w-7 h-7 relative z-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-4 left-4 max-w-lg mx-auto bg-black/95 border border-[#FF6B00]/20 rounded-2xl p-5 md:hidden shadow-lg shadow-black/20"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeMobileNavBackground"
                      className="absolute inset-0 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 z-0"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full relative z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`block w-full py-2.5 px-4 text-base transition-all duration-300 rounded-xl flex items-center ${
                          activeItem === item.name 
                            ? "text-[#FF6B00] font-medium" 
                            : "text-white hover:bg-white/5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id, item.name);
                          setIsOpen(false);
                        }}
                      >
                        {activeItem === item.name && (
                          <motion.span 
                            layoutId="activeMobileNavIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mr-2"
                          />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
              
              {/* Decorative element */}
              <motion.div 
                className="w-full h-[1px] bg-[#FF6B00]/20 my-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              
              <motion.button
                className="mt-2 w-full py-3 bg-[#FF6B00] text-white rounded-xl font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                onClick={() => {
                  scrollToSection("contact", "Contact");
                  setIsOpen(false);
                }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
