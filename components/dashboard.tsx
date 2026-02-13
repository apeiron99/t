"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Search } from "lucide-react"
import { AppSidebar } from "./app-sidebar"
import { MobileTabBar } from "./mobile-tab-bar"
import { MetricWidgets } from "./metric-widgets"
import { ProposalList } from "./proposal-list"
import { TopProposals } from "./top-proposals"
import { ActivityFeed } from "./activity-feed"
import { ProposalDetail } from "./proposal-detail"
import { NewProposalModal } from "./new-proposal-modal"
import { getProposalsWithStats } from "@/lib/data"
import type { AppProposalWithStats } from "@/lib/data"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedProposal, setSelectedProposal] =
    useState<AppProposalWithStats | null>(null)
  const [showNewProposal, setShowNewProposal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const allProposals = getProposalsWithStats()
  const filteredProposals = allProposals.filter(
    (p) =>
      p.app_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.app_description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen relative">
      {/* Immersive Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/bg-mesh.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Subtle overlay for readability */}
      <div className="fixed inset-0 z-0 bg-white/10" />

      {/* Sidebar (Desktop) */}
      <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Mobile Tab Bar */}
      <MobileTabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="relative z-10 lg:ml-64 min-h-screen pb-24 lg:pb-8">
        {/* Floating Header */}
        <header className="sticky top-0 z-20 px-4 lg:px-8 pt-4">
          <div className="glass-heavy rounded-2xl px-5 py-3 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "proposals" && "All Proposals"}
                {activeTab === "analytics" && "Analytics"}
                {activeTab === "voters" && "Voters"}
                {activeTab === "settings" && "Settings"}
              </h1>
              <p className="text-xs text-slate-500">
                {activeTab === "dashboard" &&
                  "Overview of app demand voting activity"}
                {activeTab === "proposals" &&
                  `${allProposals.length} proposals submitted`}
                {activeTab === "analytics" && "Voting trends and insights"}
                {activeTab === "voters" && "Active participants"}
                {activeTab === "settings" && "App preferences"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              {(activeTab === "dashboard" || activeTab === "proposals") && (
                <div className="hidden sm:flex items-center glass rounded-full px-3 py-1.5 gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search proposals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none w-36 lg:w-48"
                    aria-label="Search proposals"
                  />
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-4 lg:px-8 mt-6">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Metric Widgets */}
                <MetricWidgets />

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-5 gap-6 mt-6">
                  {/* Left - Proposals */}
                  <div className="lg:col-span-3">
                    <h2 className="text-sm font-bold text-slate-900 mb-3">
                      All Proposals
                    </h2>
                    <ProposalList
                      proposals={
                        searchQuery ? filteredProposals : allProposals
                      }
                      onSelect={setSelectedProposal}
                    />
                  </div>

                  {/* Right - Sidebar Widgets */}
                  <div className="lg:col-span-2 space-y-6">
                    <TopProposals onSelect={setSelectedProposal} />
                    <ActivityFeed />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "proposals" && (
              <motion.div
                key="proposals"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProposalList
                  proposals={searchQuery ? filteredProposals : allProposals}
                  onSelect={setSelectedProposal}
                />
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <AnalyticsView proposals={allProposals} />
              </motion.div>
            )}

            {activeTab === "voters" && (
              <motion.div
                key="voters"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <VotersView />
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center py-20"
              >
                <div className="glass-heavy rounded-2xl p-8 text-center max-w-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Settings
                  </h3>
                  <p className="text-sm text-slate-500">
                    Configuration and preferences will appear here.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* FAB - New Proposal */}
      <motion.button
        className="fixed bottom-20 lg:bottom-8 right-6 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center"
        onClick={() => setShowNewProposal(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Add new proposal"
      >
        <Plus className="w-6 h-6" />
      </motion.button>

      {/* Detail Panel */}
      <ProposalDetail
        proposal={selectedProposal}
        onClose={() => setSelectedProposal(null)}
      />

      {/* New Proposal Modal */}
      <NewProposalModal
        open={showNewProposal}
        onClose={() => setShowNewProposal(false)}
      />
    </div>
  )
}

// --- Analytics Sub-view ---
function AnalyticsView({
  proposals,
}: {
  proposals: AppProposalWithStats[]
}) {
  const sorted = [...proposals].sort(
    (a, b) => b.averageRating - a.averageRating
  )

  return (
    <div className="space-y-6">
      <div className="glass-heavy rounded-2xl p-5">
        <h2 className="text-sm font-bold text-slate-900 mb-4">
          Rating Distribution
        </h2>
        <div className="space-y-3">
          {sorted.map((proposal, i) => {
            const widthPercent = (proposal.averageRating / 5) * 100
            return (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-900 truncate max-w-[200px]">
                    {proposal.app_title}
                  </span>
                  <span className="text-sm font-bold text-slate-600">
                    {proposal.averageRating.toFixed(1)}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-white/40 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPercent}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-heavy rounded-2xl p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Votes by Role
          </h3>
          {["Admin", "PM", "Developer", "Designer", "User"].map(
            (role, i) => {
              const count = proposals.reduce(
                (sum, p) =>
                  sum + p.votes.filter((v) => v.voter_role === role).length,
                0
              )
              return (
                <motion.div
                  key={role}
                  className="flex items-center justify-between py-2 border-b border-white/20 last:border-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  <span className="text-sm text-slate-700">{role}</span>
                  <span className="text-sm font-bold text-slate-900">
                    {count}
                  </span>
                </motion.div>
              )
            }
          )}
        </div>
        <div className="glass-heavy rounded-2xl p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Average by Role
          </h3>
          {["Admin", "PM", "Developer", "Designer", "User"].map(
            (role, i) => {
              const allVotes = proposals.flatMap((p) =>
                p.votes.filter((v) => v.voter_role === role)
              )
              const avg =
                allVotes.length > 0
                  ? allVotes.reduce((s, v) => s + v.rating, 0) /
                    allVotes.length
                  : 0
              return (
                <motion.div
                  key={role}
                  className="flex items-center justify-between py-2 border-b border-white/20 last:border-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  <span className="text-sm text-slate-700">{role}</span>
                  <span className="text-sm font-bold text-slate-900">
                    {avg.toFixed(1)}
                  </span>
                </motion.div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

// --- Voters Sub-view ---
import { getMostActiveVoters } from "@/lib/data"
import { RoleBadge } from "./role-badge"
import { GlassCard } from "./glass-card"
import { formatDistanceToNow } from "date-fns"

function VotersView() {
  const voters = getMostActiveVoters(10)

  return (
    <div className="space-y-3">
      {voters.map((voter, i) => (
        <motion.div
          key={voter.email}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                {voter.email.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-slate-900 truncate">
                  {voter.email.split("@")[0]}
                </div>
                <div className="text-xs text-slate-500">{voter.email}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <RoleBadge role={voter.role} />
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">
                    {voter.count}
                  </div>
                  <div className="text-[10px] text-slate-400">votes</div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-xs text-slate-500">
                    {formatDistanceToNow(new Date(voter.lastVoted), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
