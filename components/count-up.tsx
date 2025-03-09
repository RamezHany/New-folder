"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  title: string
  className?: string
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "", title, className = "" }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 16)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className={className}>
      <h3 className="text-6xl font-bold mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-xl">{title}</p>
    </div>
  )
}

