import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

