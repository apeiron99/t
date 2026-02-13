"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  heavy?: boolean
  hoverable?: boolean
}

export function GlassCard({
  children,
  className,
  onClick,
  heavy = false,
  hoverable = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        heavy ? "glass-heavy" : "glass",
        "rounded-2xl",
        hoverable && "cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={
        hoverable
          ? { scale: 1.015, y: -2 }
          : undefined
      }
      whileTap={
        hoverable
          ? { scale: 0.985 }
          : undefined
      }
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}
