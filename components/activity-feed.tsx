"use client"

import { motion } from "framer-motion"
import { Activity } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { GlassCard } from "./glass-card"
import { RoleBadge } from "./role-badge"
import { StarRating } from "./star-rating"
import { getRecentActivity } from "@/lib/data"

export function ActivityFeed() {
  const recentActivity = getRecentActivity(6)

  return (
    <GlassCard className="p-5" heavy>
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-blue-500" />
        <h2 className="text-sm font-bold text-slate-900">Recent Activity</h2>
      </div>
      <div className="space-y-2">
        {recentActivity.map((activity, i) => (
          <motion.div
            key={activity.vote_id}
            className="glass rounded-xl p-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.06 }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  {activity.voter_email.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-900 truncate">
                    {activity.voter_email.split("@")[0]}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    voted on{" "}
                    <span className="text-slate-600 font-medium">
                      {activity.app_title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <RoleBadge role={activity.voter_role} />
                <StarRating value={activity.rating} readonly size={10} />
              </div>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 ml-9">
              {formatDistanceToNow(new Date(activity.voted_at), {
                addSuffix: true,
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
