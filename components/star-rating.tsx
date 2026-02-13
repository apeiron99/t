"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  value: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: number
}

export function StarRating({
  value,
  onChange,
  readonly = false,
  size = 24,
}: StarRatingProps) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = readonly ? star <= value : star <= (hovered || value)
        return (
          <motion.button
            key={star}
            type="button"
            disabled={readonly}
            className={cn(
              "relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm",
              !readonly && "cursor-pointer"
            )}
            onMouseEnter={() => !readonly && setHovered(star)}
            onMouseLeave={() => !readonly && setHovered(0)}
            onClick={() => onChange?.(star)}
            whileHover={!readonly ? { scale: 1.2 } : undefined}
            whileTap={!readonly ? { scale: 0.9 } : undefined}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
          >
            <Star
              size={size}
              className={cn(
                "transition-colors duration-200",
                isFilled
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-slate-300"
              )}
            />
          </motion.button>
        )
      })}
    </div>
  )
}
