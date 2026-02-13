"use client"

import { motion } from "framer-motion"
import { Clock, ChevronRight } from "lucide-react"
import { format } from "date-fns"
import { GlassCard } from "./glass-card"
import { RatingRing } from "./rating-ring"
import type { AppProposalWithStats } from "@/lib/data"

interface ProposalListProps {
  proposals: AppProposalWithStats[]
  onSelect: (proposal: AppProposalWithStats) => void
}

export function ProposalList({ proposals, onSelect }: ProposalListProps) {
  return (
    <div className="space-y-3">
      {proposals.map((proposal, i) => (
        <motion.div
          key={proposal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
        >
          <GlassCard
            hoverable
            onClick={() => onSelect(proposal)}
            className="p-4"
          >
            <div className="flex items-center gap-4">
              {/* Rating Ring */}
              <RatingRing rating={proposal.averageRating} size={52} strokeWidth={4} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-slate-900 truncate">
                  {proposal.app_title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                  {proposal.app_description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {format(new Date(proposal.created_at), "MMM d, yyyy")}
                  </span>
                  <span className="text-xs text-blue-500 font-medium">
                    {proposal.totalVotes} vote{proposal.totalVotes !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
