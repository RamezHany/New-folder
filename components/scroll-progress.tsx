import type React from "react"
import { motion, useScroll } from "framer-motion"

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#FF6B00] origin-[0%] z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

