"use client"

import { motion } from "framer-motion"
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  Settings,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AppSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "proposals", label: "Proposals", icon: FileText },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "voters", label: "Voters", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
]

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-30 glass-heavy p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 mb-8 mt-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-900">AppVote</h1>
          <p className="text-xs text-slate-500">Demand Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = activeTab === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "relative w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "text-blue-600"
                  : "text-slate-500 hover:text-slate-900"
              )}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 glass rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <item.icon className="w-4.5 h-4.5 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="glass rounded-xl p-3 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium text-slate-900 truncate">
              Admin User
            </div>
            <div className="text-xs text-slate-500 truncate">
              admin@company.com
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
