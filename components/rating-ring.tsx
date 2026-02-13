"use client"

import { motion } from "framer-motion"

interface RatingRingProps {
  rating: number
  maxRating?: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function RatingRing({
  rating,
  maxRating = 5,
  size = 56,
  strokeWidth = 5,
  className,
}: RatingRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percentage = rating / maxRating
  const offset = circumference - percentage * circumference

  // Color based on rating
  const getColor = () => {
    if (rating >= 4.5) return "#34C759" // Green
    if (rating >= 3.5) return "#007AFF" // Blue
    if (rating >= 2.5) return "#FF9F0A" // Orange
    return "#FF3B30" // Red
  }

  return (
    <div className={className} style={{ width: size, height: size, position: "relative" }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
        style={{ color: getColor() }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  )
}
