"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { GlassCard } from "./glass-card"
import { RatingRing } from "./rating-ring"
import { getTopProposals } from "@/lib/data"
import type { AppProposalWithStats } from "@/lib/data"

interface TopProposalsProps {
  onSelect: (proposal: AppProposalWithStats) => void
}

const medals = ["text-amber-500", "text-slate-400", "text-orange-600"]

export function TopProposals({ onSelect }: TopProposalsProps) {
  const topProposals = getTopProposals(3)

  return (
    <GlassCard className="p-5" heavy>
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-4 h-4 text-amber-500" />
        <h2 className="text-sm font-bold text-slate-900">Top Rated Proposals</h2>
      </div>
      <div className="space-y-3">
        {topProposals.map((proposal, i) => (
          <motion.button
            key={proposal.id}
            className="w-full text-left glass rounded-xl p-3 flex items-center gap-3"
            onClick={() => onSelect(proposal)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`text-lg font-bold ${medals[i]} w-6 text-center`}>
              {i + 1}
            </span>
            <RatingRing rating={proposal.averageRating} size={40} strokeWidth={3} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-900 truncate">
                {proposal.app_title}
              </div>
              <div className="text-xs text-slate-500">
                {proposal.totalVotes} votes
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </GlassCard>
  )
}
