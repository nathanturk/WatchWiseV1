"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  ArrowLeft,
  Share,
  Download,
  Eye,
  Clock,
  FileText,
  BarChart3,
  Users,
  Play,
  TrendingUp,
  Zap,
  Target,
  Brain,
  TrendingDown,
  Sparkles,
  Activity,
  Gauge,
  PlayCircle,
  PauseCircle,
  CheckCircle,
  XCircle,
  Lightbulb,
  Search,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"
import Link from "next/link"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart, ReferenceLine } from "recharts"

const retentionData = [
  { time: "0:00", retention: 100, viewers: 127000, engagement: 95, timestamp: 0 },
  { time: "1:30", retention: 92, viewers: 117000, engagement: 88, timestamp: 90 },
  { time: "3:00", retention: 78, viewers: 99000, engagement: 72, timestamp: 180 },
  { time: "4:45", retention: 85, viewers: 108000, engagement: 80, timestamp: 285 },
  { time: "6:20", retention: 95, viewers: 121000, engagement: 92, timestamp: 380 },
  { time: "8:10", retention: 72, viewers: 91000, engagement: 65, timestamp: 490 },
  { time: "10:30", retention: 68, viewers: 86000, engagement: 58, timestamp: 630 },
  { time: "12:15", retention: 88, viewers: 112000, engagement: 85, timestamp: 735 },
  { time: "14:00", retention: 75, viewers: 95000, engagement: 70, timestamp: 840 },
  { time: "16:45", retention: 82, viewers: 104000, engagement: 78, timestamp: 1005 },
  { time: "18:30", retention: 65, viewers: 83000, engagement: 55, timestamp: 1110 },
  { time: "20:15", retention: 78, viewers: 99000, engagement: 72, timestamp: 1215 },
  { time: "21:00", retention: 85, viewers: 108000, engagement: 80, timestamp: 1260 },
]

const timestampAnalysis = [
  {
    id: 1,
    timestamp: "00:00 - 01:30",
    type: "strong_hook",
    title: "Strong Opening Hook",
    retentionChange: "-8%",
    trend: "slight_drop",
    viewers: 117000,
    summary: "Solid opening with clear value proposition",
    details: {
      description: "Welcome back! Today we're building a full-stack app with Next.js 14...",
      analysis:
        "Strong opening hook with immediate value proposition. The 8% drop is normal for the first 90 seconds as casual viewers filter out. Energy level is consistent and engaging.",
      keyMoments: [
        "0:00 - Strong intro with clear promise",
        "0:15 - Preview of what will be built",
        "0:45 - Outline of topics covered",
        "1:15 - Call to action for engagement",
      ],
      suggestions: ["Consider adding a visual preview earlier", "Maintain this energy level throughout"],
    },
  },
  {
    id: 2,
    timestamp: "01:30 - 03:00",
    type: "major_drop",
    title: "Setup & Prerequisites Drop",
    retentionChange: "-14%",
    trend: "major_drop",
    viewers: 99000,
    summary: "Significant drop during technical setup explanation",
    details: {
      description: "First, let's set up our development environment. You'll need Node.js version 18 or higher...",
      analysis:
        "Major retention drop during setup phase. This is common but can be mitigated. Viewers may be skipping ahead to the actual coding. The explanation is thorough but lacks visual engagement.",
      keyMoments: [
        "1:30 - Node.js installation requirements",
        "2:00 - VS Code extensions setup",
        "2:30 - Terminal configuration",
        "2:45 - Project folder structure",
      ],
      suggestions: [
        "Add visual aids for setup steps",
        "Consider creating a separate setup video",
        "Add timestamps in description for easy navigation",
        "Show completed setup as motivation",
      ],
    },
  },
  {
    id: 3,
    timestamp: "03:00 - 04:45",
    type: "recovery",
    title: "Code Demo Recovery",
    retentionChange: "+7%",
    trend: "recovery",
    viewers: 108000,
    summary: "Retention improves when actual coding begins",
    details: {
      description: "Now let's start coding! I'll create our first component...",
      analysis:
        "Good recovery as we transition from setup to actual coding. Viewers re-engage when they see practical implementation. The hands-on approach works well for this audience.",
      keyMoments: [
        "3:00 - First component creation",
        "3:30 - Live coding demonstration",
        "4:00 - Explaining code logic",
        "4:30 - Testing the component",
      ],
      suggestions: [
        "Start with coding earlier in future videos",
        "Keep explanations concise during coding",
        "Use syntax highlighting effectively",
      ],
    },
  },
  {
    id: 4,
    timestamp: "04:45 - 06:20",
    type: "engagement_spike",
    title: "Database Integration Spike",
    retentionChange: "+10%",
    trend: "spike",
    viewers: 121000,
    summary: "Highest engagement during database setup",
    details: {
      description: "Here's where it gets interesting - let's connect our database...",
      analysis:
        "Peak engagement during database integration. This suggests the audience is particularly interested in backend concepts. The visual database schema and live queries create strong engagement.",
      keyMoments: [
        "4:45 - Database schema introduction",
        "5:15 - Live database connection",
        "5:45 - First query execution",
        "6:00 - Data visualization",
      ],
      suggestions: [
        "Create more database-focused content",
        "Consider a dedicated database series",
        "Show more complex queries",
        "Add performance optimization tips",
      ],
    },
  },
  {
    id: 5,
    timestamp: "06:20 - 08:10",
    type: "gradual_decline",
    title: "API Routes Explanation",
    retentionChange: "-23%",
    trend: "decline",
    viewers: 91000,
    summary: "Gradual decline during API theory",
    details: {
      description: "Let me explain how API routes work in Next.js...",
      analysis:
        "Significant decline during theoretical API explanation. The content becomes too abstract without enough visual examples. Viewers prefer seeing code in action rather than conceptual explanations.",
      keyMoments: [
        "6:20 - API routes theory",
        "7:00 - Request/response cycle",
        "7:30 - Middleware explanation",
        "8:00 - Error handling concepts",
      ],
      suggestions: [
        "Show API routes in action immediately",
        "Use Postman or similar tools for demos",
        "Add more visual diagrams",
        "Break theory into smaller chunks",
      ],
    },
  },
  {
    id: 6,
    timestamp: "08:10 - 10:30",
    type: "continued_drop",
    title: "Authentication Deep Dive",
    retentionChange: "-4%",
    trend: "slight_drop",
    viewers: 86000,
    summary: "Continued decline during complex auth setup",
    details: {
      description: "Authentication can be tricky, so let's implement it step by step...",
      analysis:
        "Continued but slower decline during authentication implementation. The topic is valuable but complex. Some viewers may be overwhelmed by the security concepts and implementation details.",
      keyMoments: [
        "8:10 - JWT token explanation",
        "8:45 - Login form creation",
        "9:20 - Password hashing",
        "10:00 - Session management",
      ],
      suggestions: [
        "Simplify authentication explanation",
        "Use a popular auth library demo",
        "Add security best practices callouts",
        "Show common pitfalls to avoid",
      ],
    },
  },
  {
    id: 7,
    timestamp: "10:30 - 12:15",
    type: "strong_recovery",
    title: "Frontend Integration Win",
    retentionChange: "+20%",
    trend: "strong_recovery",
    viewers: 112000,
    summary: "Strong recovery with visual frontend work",
    details: {
      description: "Now let's see our backend in action with a beautiful frontend...",
      analysis:
        "Excellent recovery when switching to frontend integration. Visual elements and immediate results re-engage viewers. The combination of backend and frontend creates a complete picture.",
      keyMoments: [
        "10:30 - Frontend component creation",
        "11:00 - Styling with Tailwind",
        "11:30 - API integration demo",
        "12:00 - Live data display",
      ],
      suggestions: [
        "Balance backend/frontend content better",
        "Show results more frequently",
        "Use split-screen for before/after",
        "Add more visual transitions",
      ],
    },
  },
  {
    id: 8,
    timestamp: "12:15 - 14:00",
    type: "steady_decline",
    title: "Testing & Debugging",
    retentionChange: "-13%",
    trend: "decline",
    viewers: 95000,
    summary: "Decline during testing procedures",
    details: {
      description: "Let's test our application and fix any bugs we find...",
      analysis:
        "Predictable decline during testing phase. While important, testing content is less engaging for many viewers. The debugging process can feel slow and repetitive.",
      keyMoments: [
        "12:15 - Unit test setup",
        "12:45 - Integration testing",
        "13:15 - Bug discovery and fixing",
        "13:45 - Performance testing",
      ],
      suggestions: [
        "Speed up testing segments",
        "Show only critical bugs",
        "Add humor during debugging",
        "Highlight testing best practices",
      ],
    },
  },
  {
    id: 9,
    timestamp: "14:00 - 16:45",
    type: "moderate_recovery",
    title: "Deployment & Production",
    retentionChange: "+7%",
    trend: "recovery",
    viewers: 104000,
    summary: "Recovery during deployment demonstration",
    details: {
      description: "Time to deploy our app to production! Let's use Vercel...",
      analysis:
        "Moderate recovery during deployment. Viewers are interested in seeing the final product go live. The production deployment provides a sense of completion and achievement.",
      keyMoments: [
        "14:00 - Vercel deployment setup",
        "14:30 - Environment variables",
        "15:00 - Domain configuration",
        "15:30 - Live site demonstration",
        "16:15 - Performance monitoring",
      ],
      suggestions: [
        "Show multiple deployment options",
        "Add custom domain setup",
        "Include monitoring and analytics",
        "Demonstrate scaling considerations",
      ],
    },
  },
  {
    id: 10,
    timestamp: "16:45 - 18:30",
    type: "final_decline",
    title: "Optimization & Best Practices",
    retentionChange: "-17%",
    trend: "decline",
    viewers: 83000,
    summary: "Decline during optimization discussion",
    details: {
      description: "Let's optimize our app for better performance...",
      analysis:
        "Final decline as we cover optimization techniques. While valuable, this content feels like an appendix to many viewers who may have achieved their primary goal of building the app.",
      keyMoments: [
        "16:45 - Code splitting strategies",
        "17:15 - Image optimization",
        "17:45 - Caching implementation",
        "18:15 - Bundle size analysis",
      ],
      suggestions: [
        "Move optimization to a separate video",
        "Focus on most impactful optimizations",
        "Show before/after performance metrics",
        "Create optimization checklist",
      ],
    },
  },
  {
    id: 11,
    timestamp: "18:30 - 21:00",
    type: "conclusion_recovery",
    title: "Strong Conclusion & Next Steps",
    retentionChange: "+13%",
    trend: "recovery",
    viewers: 108000,
    summary: "Good recovery with clear next steps",
    details: {
      description: "Congratulations! You've built a full-stack application. Here's what's next...",
      analysis:
        "Strong conclusion with clear next steps and call-to-action. Viewers appreciate the summary and future learning path. The positive ending encourages engagement and subscriptions.",
      keyMoments: [
        "18:30 - Project recap and achievements",
        "19:00 - Key concepts learned",
        "19:30 - Next steps and resources",
        "20:00 - Related video suggestions",
        "20:30 - Subscribe and comment CTA",
      ],
      suggestions: [
        "Add project showcase gallery",
        "Include community challenges",
        "Provide downloadable resources",
        "Create follow-up video series",
      ],
    },
  },
]

const aiImprovements = {
  contentSuggestions: [
    {
      title: "Add visual code comparisons",
      priority: "high",
      impact: "Could increase retention by 15-20%",
      category: "Visual Enhancement",
      description: "Show before/after code snippets side by side to highlight improvements and changes.",
    },
    {
      title: "Include interactive coding challenges",
      priority: "high",
      impact: "Increases engagement by 25%",
      category: "Interactivity",
      description: "Add pause points where viewers can try coding themselves before seeing the solution.",
    },
    {
      title: "Create modular video segments",
      priority: "medium",
      impact: "Reduces drop-off by 12%",
      category: "Structure",
      description: "Break the 21-minute video into 3-4 focused segments with clear transitions.",
    },
    {
      title: "Add progress indicators",
      priority: "medium",
      impact: "Improves completion rate by 8%",
      category: "UX Enhancement",
      description: "Show viewers how much of the tutorial is complete and what's coming next.",
    },
  ],
  pacingImprovements: [
    {
      title: "Reduce setup time to under 2 minutes",
      priority: "high",
      impact: "Prevents 14% early drop-off",
      category: "Pacing",
      description: "Move detailed setup to a separate video or provide pre-configured templates.",
    },
    {
      title: "Add energy breaks every 5 minutes",
      priority: "medium",
      impact: "Maintains engagement throughout",
      category: "Energy Management",
      description: "Include brief recaps, jokes, or visual breaks to re-energize viewers.",
    },
    {
      title: "Speed up debugging segments",
      priority: "medium",
      impact: "Reduces mid-video abandonment",
      category: "Content Flow",
      description: "Show only critical bugs and solutions, speed up routine debugging.",
    },
  ],
  engagementTactics: [
    {
      title: "Add polls during decision points",
      priority: "high",
      impact: "Increases interaction by 30%",
      category: "Community Engagement",
      description: "Ask viewers to vote on implementation choices or predict outcomes.",
    },
    {
      title: "Include downloadable project files",
      priority: "high",
      impact: "Improves follow-along rate by 40%",
      category: "Resources",
      description: "Provide starter files and completed project for easy access.",
    },
    {
      title: "Create companion blog post",
      priority: "low",
      impact: "Extends content reach by 20%",
      category: "Content Extension",
      description: "Summarize key points and code snippets in a detailed blog post.",
    },
  ],
}

const performanceAnalysis = {
  whatWorked: [
    {
      title: "Database integration segment (04:45 - 06:20)",
      impact: "+10% retention spike",
      reason: "Visual database operations and immediate results created high engagement",
      metric: "Peak viewers: 121K",
    },
    {
      title: "Frontend integration demo (10:30 - 12:15)",
      impact: "+20% recovery",
      reason: "Visual elements and immediate UI results re-engaged viewers",
      metric: "Strong comeback: 86K → 112K viewers",
    },
    {
      title: "Strong opening hook (00:00 - 01:30)",
      impact: "Only -8% drop (excellent)",
      reason: "Clear value proposition and project preview maintained interest",
      metric: "Retained 92% of initial viewers",
    },
    {
      title: "Deployment demonstration (14:00 - 16:45)",
      impact: "+7% recovery",
      reason: "Seeing the final product go live provided sense of achievement",
      metric: "Recovery to 104K viewers",
    },
  ],
  whatDidntWork: [
    {
      title: "Extended setup phase (01:30 - 03:00)",
      impact: "-14% major drop",
      reason: "Too much time on prerequisites without visual engagement",
      metric: "Lost 18K viewers in 90 seconds",
    },
    {
      title: "API theory explanation (06:20 - 08:10)",
      impact: "-23% significant decline",
      reason: "Abstract concepts without enough practical examples",
      metric: "Dropped from 121K to 91K viewers",
    },
    {
      title: "Testing and debugging (12:15 - 14:00)",
      impact: "-13% steady decline",
      reason: "Repetitive debugging process felt slow to viewers",
      metric: "Lost 17K viewers during testing",
    },
    {
      title: "Optimization discussion (16:45 - 18:30)",
      impact: "-17% final decline",
      reason: "Advanced topics felt like appendix content to many viewers",
      metric: "Dropped to lowest point: 83K viewers",
    },
  ],
  canBeImproved: [
    {
      title: "Balance theory with practice",
      suggestion: "For every 2 minutes of theory, include 1 minute of hands-on coding",
      expectedImpact: "Could reduce mid-video drop-off by 15%",
    },
    {
      title: "Restructure content flow",
      suggestion: "Move setup to separate video, start with exciting demo, then explain",
      expectedImpact: "Could improve overall retention by 20%",
    },
    {
      title: "Add visual engagement tools",
      suggestion: "Use animations, diagrams, and split-screen comparisons",
      expectedImpact: "Could increase engagement by 25%",
    },
    {
      title: "Implement chapter markers",
      suggestion: "Add YouTube chapters for easy navigation to specific topics",
      expectedImpact: "Could improve user experience and reduce abandonment",
    },
    {
      title: "Create companion resources",
      suggestion: "Provide code snippets, checklists, and troubleshooting guides",
      expectedImpact: "Could increase completion rate by 30%",
    },
  ],
}

interface VideoAnalysisPageProps {
  videoId: string
}

export function VideoAnalysisPage({ videoId }: VideoAnalysisPageProps) {
  const [selectedTimestamp, setSelectedTimestamp] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState<"content" | "pacing" | "engagement">("content")

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "spike":
      case "strong_recovery":
      case "recovery":
        return <ArrowUp className="w-4 h-4 text-green-500" />
      case "major_drop":
      case "decline":
      case "final_decline":
        return <ArrowDown className="w-4 h-4 text-red-500" />
      case "slight_drop":
      case "gradual_decline":
      case "steady_decline":
      case "continued_drop":
        return <TrendingDown className="w-4 h-4 text-orange-500" />
      default:
        return <Minus className="w-4 h-4 text-gray-500" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "spike":
      case "strong_recovery":
      case "recovery":
        return "border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/5"
      case "major_drop":
      case "decline":
      case "final_decline":
        return "border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/5"
      case "slight_drop":
      case "gradual_decline":
      case "steady_decline":
      case "continued_drop":
        return "border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-600/5"
      default:
        return "border-gray-500/30 bg-gradient-to-r from-gray-500/10 to-gray-600/5"
    }
  }

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Brain className="w-8 h-8 mr-3 text-orange-500" />
              AI Video Analysis
            </h1>
            <p className="text-gray-400 mt-1">Building a Full-Stack Next.js App in 2024</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
          >
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Video Player & Compact Metrics */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Video Player */}
        <Card className="lg:col-span-3 card-gradient hover-lift animate-fade-in-scale">
          <CardContent className="p-6">
            <div className="relative rounded-2xl overflow-hidden mb-4 group">
              <img
                src="/images/analysis-preview.png"
                alt="Video thumbnail"
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="lg"
                  className="orange-gradient text-white shadow-2xl hover:scale-110 transition-all duration-300"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg backdrop-blur-sm">
                21:00
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500/90 text-white shadow-lg">✓ AI Analyzed</Badge>
              </div>
            </div>

            {/* Video Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-xl">Building a Full-Stack Next.js App in 2024</h3>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>127K views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>8.2K likes</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Published 5 days ago</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compact Metrics */}
        <Card className="card-gradient hover-lift animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-white text-lg flex items-center">
              <Gauge className="w-5 h-5 mr-2 text-orange-500" />
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Avg. View Duration",
                value: "14.2min",
                change: "+18.5%",
                icon: Clock,
                color: "text-orange-400",
              },
              { title: "Retention Rate", value: "67.6%", change: "+12.3%", icon: Play, color: "text-blue-400" },
              { title: "Peak Viewers", value: "121K", change: "+25.1%", icon: TrendingUp, color: "text-green-400" },
              { title: "Engagement", value: "6.5%", change: "+2.8%", icon: Target, color: "text-purple-400" },
            ].map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  <div>
                    <p className="text-sm text-gray-400">{metric.title}</p>
                    <p className="text-lg font-bold text-white">{metric.value}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium ${metric.change.startsWith("+") ? "text-green-500" : "text-red-400"}`}
                >
                  {metric.change}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Interactive Retention Chart */}
      <Card className="card-gradient hover-lift animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-xl">
            <Activity className="w-6 h-6 mr-3 text-orange-500" />
            Audience Retention Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData}>
                <defs>
                  <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff6b35" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#ff6b35"
                  strokeWidth={3}
                  fill="url(#retentionGradient)"
                />
                {/* Critical Points */}
                <ReferenceLine x="06:20" stroke="#10b981" strokeDasharray="2 2" />
                <ReferenceLine x="10:30" stroke="#10b981" strokeDasharray="2 2" />
                <ReferenceLine x="03:00" stroke="#ef4444" strokeDasharray="2 2" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="absolute top-4 right-4 glass-effect p-3 rounded-lg">
              <p className="text-sm text-white font-medium">21-minute tutorial analysis</p>
              <p className="text-xs text-gray-400">Peak: 95% at 6:20 | Low: 65% at 18:30</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timestamp Analysis Section */}
      <Card className="card-gradient hover-lift animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-xl">
            <Search className="w-6 h-6 mr-3 text-purple-500" />
            Timestamp Analysis
            <Badge className="ml-3 bg-purple-500/20 text-purple-300">11 Key Moments</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 max-h-96 overflow-y-auto">
            {timestampAnalysis.map((analysis) => (
              <div
                key={analysis.id}
                className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${getTrendColor(analysis.trend)}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getTrendIcon(analysis.trend)}
                    <div>
                      <Badge className="bg-purple-500/20 text-purple-300 text-xs font-medium mb-1">
                        {analysis.timestamp}
                      </Badge>
                      <h4 className="font-semibold text-white">{analysis.title}</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      className={`${
                        analysis.retentionChange.startsWith("+")
                          ? "bg-green-500/20 text-green-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {analysis.retentionChange}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="orange-gradient text-white hover:scale-105 transition-all duration-300"
                        >
                          <Search className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl card-gradient border-white/20">
                        <DialogHeader>
                          <DialogTitle className="text-white flex items-center">
                            {getTrendIcon(analysis.trend)}
                            <span className="ml-2">{analysis.title}</span>
                            <Badge className="ml-3 bg-purple-500/20 text-purple-300">{analysis.timestamp}</Badge>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 text-white">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg bg-white/5">
                              <p className="text-sm text-gray-400">Retention Change</p>
                              <p
                                className={`text-lg font-bold ${analysis.retentionChange.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                              >
                                {analysis.retentionChange}
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5">
                              <p className="text-sm text-gray-400">Viewers at Point</p>
                              <p className="text-lg font-bold text-blue-400">{analysis.viewers.toLocaleString()}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-orange-400">Content at This Timestamp:</h4>
                            <p className="text-gray-300 italic">"{analysis.details.description}"</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-blue-400">AI Analysis:</h4>
                            <p className="text-gray-300">{analysis.details.analysis}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-purple-400">Key Moments:</h4>
                            <ul className="space-y-1">
                              {analysis.details.keyMoments.map((moment, index) => (
                                <li key={index} className="text-sm text-gray-300 flex items-start">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {moment}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-green-400">Suggestions:</h4>
                            <ul className="space-y-1">
                              {analysis.details.suggestions.map((suggestion, index) => (
                                <li key={index} className="text-sm text-gray-300 flex items-start">
                                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-2">{analysis.summary}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{analysis.viewers.toLocaleString()} viewers</span>
                  <span className="capitalize">{analysis.trend.replace("_", " ")}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Improvement Suggestions */}
      <Card className="card-gradient hover-lift animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-xl">
            <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
            AI Improvement Suggestions
            <Badge className="ml-3 bg-yellow-500/20 text-yellow-300">12 Recommendations</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-white/5 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("content")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === "content"
                    ? "orange-gradient text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Content Enhancement</span>
                <Badge className="bg-white/20 text-xs">4</Badge>
              </button>
              <button
                onClick={() => setActiveTab("pacing")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === "pacing"
                    ? "orange-gradient text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Pacing & Flow</span>
                <Badge className="bg-white/20 text-xs">3</Badge>
              </button>
              <button
                onClick={() => setActiveTab("engagement")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === "engagement"
                    ? "orange-gradient text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Engagement</span>
                <Badge className="bg-white/20 text-xs">3</Badge>
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "content" && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-orange-500" />
                      Content Enhancement Recommendations
                    </h4>
                    <Badge className="bg-orange-500/20 text-orange-300">High Impact Potential</Badge>
                  </div>

                  {aiImprovements.contentSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/2 border border-white/10 hover:border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-orange-600/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              suggestion.priority === "high"
                                ? "bg-red-500/20 border border-red-500/30"
                                : suggestion.priority === "medium"
                                  ? "bg-yellow-500/20 border border-yellow-500/30"
                                  : "bg-green-500/20 border border-green-500/30"
                            }`}
                          >
                            <Lightbulb
                              className={`w-5 h-5 ${
                                suggestion.priority === "high"
                                  ? "text-red-400"
                                  : suggestion.priority === "medium"
                                    ? "text-yellow-400"
                                    : "text-green-400"
                              }`}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                              {suggestion.title}
                            </h5>
                            <Badge className="bg-orange-500/20 text-orange-300 text-xs mt-1">
                              {suggestion.category}
                            </Badge>
                          </div>
                        </div>
                        <Badge
                          className={`${
                            suggestion.priority === "high"
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : suggestion.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-green-500/20 text-green-300 border border-green-500/30"
                          }`}
                        >
                          {suggestion.priority} priority
                        </Badge>
                      </div>

                      <p className="text-gray-300 mb-3 leading-relaxed">{suggestion.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-400 font-medium">{suggestion.impact}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10 bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          Implement
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "pacing" && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-500" />
                      Pacing & Flow Optimization
                    </h4>
                    <Badge className="bg-blue-500/20 text-blue-300">Retention Focused</Badge>
                  </div>

                  {aiImprovements.pacingImprovements.map((suggestion, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/2 border border-white/10 hover:border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-blue-600/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              suggestion.priority === "high"
                                ? "bg-red-500/20 border border-red-500/30"
                                : suggestion.priority === "medium"
                                  ? "bg-yellow-500/20 border border-yellow-500/30"
                                  : "bg-green-500/20 border border-green-500/30"
                            }`}
                          >
                            <Clock
                              className={`w-5 h-5 ${
                                suggestion.priority === "high"
                                  ? "text-red-400"
                                  : suggestion.priority === "medium"
                                    ? "text-yellow-400"
                                    : "text-green-400"
                              }`}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {suggestion.title}
                            </h5>
                            <Badge className="bg-blue-500/20 text-blue-300 text-xs mt-1">{suggestion.category}</Badge>
                          </div>
                        </div>
                        <Badge
                          className={`${
                            suggestion.priority === "high"
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : suggestion.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-green-500/20 text-green-300 border border-green-500/30"
                          }`}
                        >
                          {suggestion.priority} priority
                        </Badge>
                      </div>

                      <p className="text-gray-300 mb-3 leading-relaxed">{suggestion.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-400 font-medium">{suggestion.impact}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "engagement" && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-purple-500" />
                      Engagement Optimization Tactics
                    </h4>
                    <Badge className="bg-purple-500/20 text-purple-300">Interaction Boost</Badge>
                  </div>

                  {aiImprovements.engagementTactics.map((suggestion, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/2 border border-white/10 hover:border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-purple-600/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              suggestion.priority === "high"
                                ? "bg-red-500/20 border border-red-500/30"
                                : suggestion.priority === "medium"
                                  ? "bg-yellow-500/20 border border-yellow-500/30"
                                  : "bg-green-500/20 border border-green-500/30"
                            }`}
                          >
                            <Zap
                              className={`w-5 h-5 ${
                                suggestion.priority === "high"
                                  ? "text-red-400"
                                  : suggestion.priority === "medium"
                                    ? "text-yellow-400"
                                    : "text-green-400"
                              }`}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {suggestion.title}
                            </h5>
                            <Badge className="bg-purple-500/20 text-purple-300 text-xs mt-1">
                              {suggestion.category}
                            </Badge>
                          </div>
                        </div>
                        <Badge
                          className={`${
                            suggestion.priority === "high"
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : suggestion.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-green-500/20 text-green-300 border border-green-500/30"
                          }`}
                        >
                          {suggestion.priority} priority
                        </Badge>
                      </div>

                      <p className="text-gray-300 mb-3 leading-relaxed">{suggestion.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-400 font-medium">{suggestion.impact}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          Activate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Analysis: What Worked, Didn't Work, Can Be Improved */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* What Worked */}
        <Card className="card-gradient hover-lift animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg">
              <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
              What Worked
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-80 overflow-y-auto">
            {performanceAnalysis.whatWorked.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-gradient-to-r from-green-500/5 to-green-600/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-gray-300 mb-2">{item.reason}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-green-500/20 text-green-300 text-xs">{item.impact}</Badge>
                      <span className="text-xs text-gray-400">{item.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* What Didn't Work */}
        <Card className="card-gradient hover-lift animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg">
              <XCircle className="w-6 h-6 mr-3 text-red-500" />
              What Didn't Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-80 overflow-y-auto">
            {performanceAnalysis.whatDidntWork.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-gradient-to-r from-red-500/5 to-red-600/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-gray-300 mb-2">{item.reason}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-red-500/20 text-red-300 text-xs">{item.impact}</Badge>
                      <span className="text-xs text-gray-400">{item.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Can Be Improved */}
        <Card className="card-gradient hover-lift animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg">
              <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
              Can Be Improved
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-80 overflow-y-auto">
            {performanceAnalysis.canBeImproved.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/5 to-yellow-600/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-gray-300 mb-2">{item.suggestion}</p>
                    <Badge className="bg-yellow-500/20 text-yellow-300 text-xs">{item.expectedImpact}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Export Analysis */}
      <Card className="card-gradient hover-lift animate-fade-in-up">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <Download className="w-6 h-6 mr-3 text-orange-500" />
                Export Complete Analysis
              </h3>
              <p className="text-gray-400">Share comprehensive insights with your team or save for future reference</p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
                <Users className="w-4 h-4 mr-2" />
                Share with Team
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
