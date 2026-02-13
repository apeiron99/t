"use client"

import { motion } from "framer-motion"
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileTabBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "dashboard", label: "Home", icon: LayoutDashboard },
  { id: "proposals", label: "Apps", icon: FileText },
  { id: "analytics", label: "Charts", icon: BarChart3 },
  { id: "voters", label: "Voters", icon: Users },
  { id: "settings", label: "More", icon: Settings },
]

export function MobileTabBar({ activeTab, onTabChange }: MobileTabBarProps) {
  return (
    <nav
      className="lg:hidden fixed bottom-4 left-4 right-4 z-30 glass-heavy rounded-2xl"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-xs",
                isActive ? "text-blue-600" : "text-slate-400"
              )}
              whileTap={{ scale: 0.9 }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 glass rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <tab.icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-medium">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
