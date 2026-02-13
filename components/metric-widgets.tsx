"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, FileText, Star } from "lucide-react"
import { GlassCard } from "./glass-card"
import { getProposalsWithStats, getMostActiveVoters, voteLogs } from "@/lib/data"

export function MetricWidgets() {
  const proposals = getProposalsWithStats()
  const topAvg = Math.max(...proposals.map((p) => p.averageRating))
  const totalVotes = voteLogs.length
  const activeVoters = getMostActiveVoters().length

  const metrics = [
    {
      label: "Total Proposals",
      value: proposals.length.toString(),
      icon: FileText,
      color: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/20",
    },
    {
      label: "Total Votes",
      value: totalVotes.toString(),
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400",
      shadow: "shadow-green-500/20",
    },
    {
      label: "Active Voters",
      value: activeVoters.toString(),
      icon: Users,
      color: "from-amber-500 to-orange-400",
      shadow: "shadow-amber-500/20",
    },
    {
      label: "Highest Rating",
      value: topAvg.toFixed(1),
      icon: Star,
      color: "from-rose-500 to-pink-400",
      shadow: "shadow-rose-500/20",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, i) => (
        <GlassCard key={metric.label} className="p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg ${metric.shadow} mb-3`}
            >
              <metric.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900">
              {metric.value}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{metric.label}</div>
          </motion.div>
        </GlassCard>
      ))}
    </div>
  )
}
