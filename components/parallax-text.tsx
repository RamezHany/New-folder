"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"

interface ParallaxProps {
  children: string
  baseVelocity: number
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * Duplicate the text multiple times to ensure smooth infinite scroll
   */
  const repeatedText = `${children} `.repeat(4)

  return (
    <div className="parallax overflow-hidden relative w-full">
      <motion.div className="scroller whitespace-nowrap flex text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider" style={{ x }}>
        <span className="block mr-6">{repeatedText}</span>
        <span className="block mr-6">{repeatedText}</span>
        <span className="block mr-6">{repeatedText}</span>
      </motion.div>
    </div>
  )
}
