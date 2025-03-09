import type React from "react"

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
}

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-lg shadow-lg`}>
      {children}
    </div>
  )
}

