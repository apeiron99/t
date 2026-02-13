"use client"

import { cn } from "@/lib/utils"

const roleColors: Record<string, string> = {
  Admin: "bg-red-500/15 text-red-700 border-red-500/20",
  PM: "bg-blue-500/15 text-blue-700 border-blue-500/20",
  Developer: "bg-green-500/15 text-green-700 border-green-500/20",
  Designer: "bg-amber-500/15 text-amber-700 border-amber-500/20",
  User: "bg-slate-500/15 text-slate-700 border-slate-500/20",
}

export function RoleBadge({ role }: { role: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
        roleColors[role] ?? "bg-slate-500/15 text-slate-700 border-slate-500/20"
      )}
    >
      {role}
    </span>
  )
}
