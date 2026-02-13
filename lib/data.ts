// Types matching the database structure
export interface AppProposal {
  id: string
  user_email: string
  user_phone: string
  app_title: string
  app_description: string
  created_at: string
}

export interface VoteLog {
  vote_id: string
  app_id: string
  voter_email: string
  voter_role: "Admin" | "User" | "PM" | "Developer" | "Designer"
  rating: number
  voted_at: string
}

export interface AppProposalWithStats extends AppProposal {
  averageRating: number
  totalVotes: number
  votes: VoteLog[]
}

// Mock data
export const appProposals: AppProposal[] = [
  {
    id: "app-001",
    user_email: "sarah.chen@company.com",
    user_phone: "+1-555-0101",
    app_title: "SmartScheduler Pro",
    app_description:
      "An AI-powered scheduling assistant that learns team availability patterns, automatically resolves meeting conflicts, and suggests optimal time slots. Integrates with Google Calendar, Outlook, and Slack to provide seamless cross-platform scheduling. Features include smart buffer time management, timezone-aware scheduling for distributed teams, and priority-based meeting allocation.",
    created_at: "2026-01-15T09:30:00Z",
  },
  {
    id: "app-002",
    user_email: "james.wilson@company.com",
    user_phone: "+1-555-0102",
    app_title: "DataPulse Analytics",
    app_description:
      "A real-time business intelligence dashboard that aggregates data from multiple sources including CRM, ERP, and marketing platforms. Provides customizable widgets, predictive analytics with ML models, and automated reporting. Features natural language query support allowing users to ask questions about their data in plain English.",
    created_at: "2026-01-18T14:15:00Z",
  },
  {
    id: "app-003",
    user_email: "maya.patel@company.com",
    user_phone: "+1-555-0103",
    app_title: "TeamSync Hub",
    app_description:
      "A comprehensive project collaboration platform with real-time document editing, integrated video conferencing, and smart task management. Features an AI assistant that summarizes meeting notes, tracks action items, and provides project health scores based on team velocity and deadline adherence.",
    created_at: "2026-01-22T11:00:00Z",
  },
  {
    id: "app-004",
    user_email: "alex.rodriguez@company.com",
    user_phone: "+1-555-0104",
    app_title: "SecureVault Enterprise",
    app_description:
      "An enterprise-grade password and secret management solution with zero-knowledge encryption, hardware security key support, and granular access controls. Includes automated credential rotation, breach detection alerts, and compliance reporting for SOC2, HIPAA, and GDPR requirements.",
    created_at: "2026-02-01T08:45:00Z",
  },
  {
    id: "app-005",
    user_email: "emma.thompson@company.com",
    user_phone: "+1-555-0105",
    app_title: "GreenTrack Carbon",
    app_description:
      "A sustainability tracking platform that monitors organizational carbon footprint across all operations. Features automated data collection from energy providers, travel bookings, and supply chain partners. Provides actionable reduction recommendations and generates ESG compliance reports.",
    created_at: "2026-02-05T16:20:00Z",
  },
  {
    id: "app-006",
    user_email: "david.kim@company.com",
    user_phone: "+1-555-0106",
    app_title: "HealthPulse Wellness",
    app_description:
      "An employee wellness platform that provides personalized health recommendations, mental health check-ins, and fitness challenges. Integrates with wearable devices and provides anonymized organizational health insights to HR teams while maintaining strict employee privacy.",
    created_at: "2026-02-08T10:30:00Z",
  },
  {
    id: "app-007",
    user_email: "lisa.wang@company.com",
    user_phone: "+1-555-0107",
    app_title: "DocFlow Automator",
    app_description:
      "An intelligent document processing system using OCR and NLP to automatically extract, classify, and route documents. Supports invoices, contracts, and forms with customizable extraction templates. Features approval workflow automation and integration with existing ERP systems.",
    created_at: "2026-02-10T13:00:00Z",
  },
  {
    id: "app-008",
    user_email: "ryan.foster@company.com",
    user_phone: "+1-555-0108",
    app_title: "CodeReview AI",
    app_description:
      "An AI-powered code review assistant that analyzes pull requests for bugs, security vulnerabilities, performance issues, and style violations. Learns from team-specific patterns and provides contextualized suggestions. Integrates with GitHub, GitLab, and Bitbucket with customizable review rules.",
    created_at: "2026-02-12T09:15:00Z",
  },
]

export const voteLogs: VoteLog[] = [
  // SmartScheduler Pro votes
  { vote_id: "v-001", app_id: "app-001", voter_email: "john@company.com", voter_role: "Admin", rating: 5, voted_at: "2026-01-16T10:00:00Z" },
  { vote_id: "v-002", app_id: "app-001", voter_email: "kate@company.com", voter_role: "PM", rating: 4, voted_at: "2026-01-16T11:30:00Z" },
  { vote_id: "v-003", app_id: "app-001", voter_email: "mike@company.com", voter_role: "Developer", rating: 5, voted_at: "2026-01-17T09:00:00Z" },
  { vote_id: "v-004", app_id: "app-001", voter_email: "nina@company.com", voter_role: "User", rating: 4, voted_at: "2026-01-17T14:00:00Z" },
  { vote_id: "v-005", app_id: "app-001", voter_email: "oscar@company.com", voter_role: "Designer", rating: 5, voted_at: "2026-01-18T08:00:00Z" },

  // DataPulse Analytics votes
  { vote_id: "v-006", app_id: "app-002", voter_email: "john@company.com", voter_role: "Admin", rating: 4, voted_at: "2026-01-19T10:00:00Z" },
  { vote_id: "v-007", app_id: "app-002", voter_email: "kate@company.com", voter_role: "PM", rating: 5, voted_at: "2026-01-19T11:00:00Z" },
  { vote_id: "v-008", app_id: "app-002", voter_email: "mike@company.com", voter_role: "Developer", rating: 4, voted_at: "2026-01-20T09:30:00Z" },
  { vote_id: "v-009", app_id: "app-002", voter_email: "pat@company.com", voter_role: "User", rating: 5, voted_at: "2026-01-20T15:00:00Z" },

  // TeamSync Hub votes
  { vote_id: "v-010", app_id: "app-003", voter_email: "john@company.com", voter_role: "Admin", rating: 4, voted_at: "2026-01-23T10:00:00Z" },
  { vote_id: "v-011", app_id: "app-003", voter_email: "nina@company.com", voter_role: "User", rating: 3, voted_at: "2026-01-23T14:00:00Z" },
  { vote_id: "v-012", app_id: "app-003", voter_email: "oscar@company.com", voter_role: "Designer", rating: 4, voted_at: "2026-01-24T09:00:00Z" },
  { vote_id: "v-013", app_id: "app-003", voter_email: "kate@company.com", voter_role: "PM", rating: 5, voted_at: "2026-01-24T16:00:00Z" },
  { vote_id: "v-014", app_id: "app-003", voter_email: "mike@company.com", voter_role: "Developer", rating: 4, voted_at: "2026-01-25T08:30:00Z" },
  { vote_id: "v-015", app_id: "app-003", voter_email: "pat@company.com", voter_role: "User", rating: 3, voted_at: "2026-01-25T13:00:00Z" },

  // SecureVault Enterprise votes
  { vote_id: "v-016", app_id: "app-004", voter_email: "john@company.com", voter_role: "Admin", rating: 5, voted_at: "2026-02-02T10:00:00Z" },
  { vote_id: "v-017", app_id: "app-004", voter_email: "mike@company.com", voter_role: "Developer", rating: 5, voted_at: "2026-02-02T11:00:00Z" },
  { vote_id: "v-018", app_id: "app-004", voter_email: "nina@company.com", voter_role: "User", rating: 4, voted_at: "2026-02-03T09:00:00Z" },

  // GreenTrack Carbon votes
  { vote_id: "v-019", app_id: "app-005", voter_email: "kate@company.com", voter_role: "PM", rating: 4, voted_at: "2026-02-06T10:00:00Z" },
  { vote_id: "v-020", app_id: "app-005", voter_email: "nina@company.com", voter_role: "User", rating: 3, voted_at: "2026-02-06T14:00:00Z" },
  { vote_id: "v-021", app_id: "app-005", voter_email: "oscar@company.com", voter_role: "Designer", rating: 4, voted_at: "2026-02-07T09:00:00Z" },
  { vote_id: "v-022", app_id: "app-005", voter_email: "john@company.com", voter_role: "Admin", rating: 3, voted_at: "2026-02-07T15:00:00Z" },

  // HealthPulse Wellness votes
  { vote_id: "v-023", app_id: "app-006", voter_email: "kate@company.com", voter_role: "PM", rating: 5, voted_at: "2026-02-09T10:00:00Z" },
  { vote_id: "v-024", app_id: "app-006", voter_email: "nina@company.com", voter_role: "User", rating: 4, voted_at: "2026-02-09T14:00:00Z" },
  { vote_id: "v-025", app_id: "app-006", voter_email: "mike@company.com", voter_role: "Developer", rating: 3, voted_at: "2026-02-10T09:00:00Z" },
  { vote_id: "v-026", app_id: "app-006", voter_email: "oscar@company.com", voter_role: "Designer", rating: 4, voted_at: "2026-02-10T15:00:00Z" },
  { vote_id: "v-027", app_id: "app-006", voter_email: "john@company.com", voter_role: "Admin", rating: 5, voted_at: "2026-02-11T08:00:00Z" },

  // DocFlow Automator votes
  { vote_id: "v-028", app_id: "app-007", voter_email: "john@company.com", voter_role: "Admin", rating: 4, voted_at: "2026-02-11T10:00:00Z" },
  { vote_id: "v-029", app_id: "app-007", voter_email: "kate@company.com", voter_role: "PM", rating: 4, voted_at: "2026-02-11T14:00:00Z" },
  { vote_id: "v-030", app_id: "app-007", voter_email: "mike@company.com", voter_role: "Developer", rating: 3, voted_at: "2026-02-12T09:00:00Z" },

  // CodeReview AI votes
  { vote_id: "v-031", app_id: "app-008", voter_email: "mike@company.com", voter_role: "Developer", rating: 5, voted_at: "2026-02-13T09:00:00Z" },
  { vote_id: "v-032", app_id: "app-008", voter_email: "john@company.com", voter_role: "Admin", rating: 4, voted_at: "2026-02-13T10:00:00Z" },
  { vote_id: "v-033", app_id: "app-008", voter_email: "kate@company.com", voter_role: "PM", rating: 5, voted_at: "2026-02-13T11:00:00Z" },
  { vote_id: "v-034", app_id: "app-008", voter_email: "oscar@company.com", voter_role: "Designer", rating: 4, voted_at: "2026-02-13T14:00:00Z" },
  { vote_id: "v-035", app_id: "app-008", voter_email: "nina@company.com", voter_role: "User", rating: 5, voted_at: "2026-02-13T15:00:00Z" },
]

// Computed data helpers
export function getProposalsWithStats(): AppProposalWithStats[] {
  return appProposals.map((proposal) => {
    const votes = voteLogs.filter((v) => v.app_id === proposal.id)
    const totalVotes = votes.length
    const averageRating =
      totalVotes > 0
        ? votes.reduce((sum, v) => sum + v.rating, 0) / totalVotes
        : 0
    return { ...proposal, averageRating, totalVotes, votes }
  })
}

export function getTopProposals(limit = 3): AppProposalWithStats[] {
  return getProposalsWithStats()
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, limit)
}

export function getMostActiveVoters(limit = 5) {
  const voterMap = new Map<
    string,
    { email: string; role: string; count: number; lastVoted: string }
  >()
  voteLogs.forEach((vote) => {
    const existing = voterMap.get(vote.voter_email)
    if (existing) {
      existing.count++
      if (vote.voted_at > existing.lastVoted) {
        existing.lastVoted = vote.voted_at
      }
    } else {
      voterMap.set(vote.voter_email, {
        email: vote.voter_email,
        role: vote.voter_role,
        count: 1,
        lastVoted: vote.voted_at,
      })
    }
  })
  return Array.from(voterMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

export function getRecentActivity(limit = 6) {
  return [...voteLogs]
    .sort((a, b) => new Date(b.voted_at).getTime() - new Date(a.voted_at).getTime())
    .slice(0, limit)
    .map((vote) => {
      const proposal = appProposals.find((p) => p.id === vote.app_id)
      return {
        ...vote,
        app_title: proposal?.app_title ?? "Unknown App",
      }
    })
}
