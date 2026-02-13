"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Clock, Users, MessageSquarePlus } from "lucide-react"
import { format } from "date-fns"
import type { AppProposalWithStats } from "@/lib/data"
import { RatingRing } from "./rating-ring"
import { RoleBadge } from "./role-badge"
import { StarRating } from "./star-rating"

interface ProposalDetailProps {
  proposal: AppProposalWithStats | null
  onClose: () => void
}

export function ProposalDetail({ proposal, onClose }: ProposalDetailProps) {
  const [newRating, setNewRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitVote = () => {
    if (newRating > 0) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setNewRating(0)
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {proposal && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg overflow-y-auto glass-heavy"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-slate-900 text-balance">
                    {proposal.app_title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{proposal.user_email}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {format(new Date(proposal.created_at), "MMM d, yyyy")}
                    </span>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="glass rounded-full p-2 text-slate-500 hover:text-slate-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close detail panel"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Rating Summary */}
              <div className="glass rounded-xl p-4 mb-6">
                <div className="flex items-center gap-4">
                  <RatingRing
                    rating={proposal.averageRating}
                    size={72}
                    strokeWidth={6}
                  />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {proposal.averageRating.toFixed(1)}
                    </div>
                    <div className="text-sm text-slate-500">
                      {proposal.totalVotes} vote{proposal.totalVotes !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
                  Description
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {proposal.app_description}
                </p>
              </div>

              {/* Vote History */}
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  <Users className="w-4 h-4" />
                  Vote History
                </h3>
                <div className="space-y-2">
                  {proposal.votes.map((vote, i) => (
                    <motion.div
                      key={vote.vote_id}
                      className="glass rounded-xl p-3 flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {vote.voter_email.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-900 truncate">
                            {vote.voter_email.split("@")[0]}
                          </div>
                          <div className="text-xs text-slate-400">
                            {format(new Date(vote.voted_at), "MMM d, h:mm a")}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <RoleBadge role={vote.voter_role} />
                        <StarRating value={vote.rating} readonly size={14} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cast Vote */}
              <div className="glass rounded-xl p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  <MessageSquarePlus className="w-4 h-4" />
                  Cast Your Vote
                </h3>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-4"
                    >
                      <div className="text-green-600 font-semibold text-sm">
                        Vote submitted successfully!
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between">
                        <StarRating value={newRating} onChange={setNewRating} size={28} />
                        <motion.button
                          onClick={handleSubmitVote}
                          disabled={newRating === 0}
                          className="glass rounded-full px-5 py-2 text-sm font-semibold text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed"
                          whileHover={newRating > 0 ? { scale: 1.05 } : undefined}
                          whileTap={newRating > 0 ? { scale: 0.95 } : undefined}
                        >
                          Submit
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
