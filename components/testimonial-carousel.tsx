import type React from "react"
import { motion } from "framer-motion"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechGiant",
    quote: "ArcOne transformed our brand. Their strategies catapulted us to industry leadership.",
  },
  {
    name: "Michael Chen",
    role: "CMO, EcoFriendly",
    quote: "The results speak for themselves. ArcOne delivered beyond our wildest expectations.",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, StartUp",
    quote: "Partnering with ArcOne was the best decision for our growth. Simply outstanding.",
  },
]

export const TestimonialCarousel: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold mb-16 text-center">Client Voices</h2>
        <div className="relative">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -100 * testimonials.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div key={index} className="w-80 flex-shrink-0" whileHover={{ scale: 1.05 }}>
                <GlassmorphicCard className="p-6 rounded-xl bg-white/10">
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#FF6B00] rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

