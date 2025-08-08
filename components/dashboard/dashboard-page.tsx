import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Users,
  Eye,
  TrendingUp,
  MoreHorizontal,
  Grid3X3,
  List,
  Filter,
  Plus,
  Play,
  Calendar,
  BarChart3,
  Zap,
} from "lucide-react";
import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    thumbnail: "/images/iphonevideo.jpg",
    views: "2.4M views",
    published: "3 days ago",
    duration: "12:45",
    status: "published",
    trend: "up",
    engagement: 95,
    analysisTeaser: {
      insight: "🎯 Major drop at 4:30 - Setup section losing viewers",
      impact: "Could boost retention by 18%",
      suggestion: "Move setup to separate video",
      priority: "high",
      color: "red",
    },
  },
  {
    id: 2,
    title: "MacBook Pro M3 vs Gaming Laptop: Which Wins?",
    thumbnail: "/images/macbookvideo.jpg",
    views: "1.8M views",
    published: "1 week ago",
    duration: "15:23",
    status: "published",
    trend: "up",
    engagement: 87,
    analysisTeaser: {
      insight: "🚀 Peak engagement at 8:15 - Benchmark results",
      impact: "Viewers love performance comparisons",
      suggestion: "Add more benchmark segments",
      priority: "medium",
      color: "green",
    },
  },
  {
    id: 3,
    title: "AirPods Pro 3 vs Sony WH-1000XM5: Audio Battle",
    thumbnail: "/images/airpodsvideo.avif",
    views: "950K views",
    published: "2 weeks ago",
    duration: "9:17",
    status: "published",
    trend: "stable",
    engagement: 78,
    analysisTeaser: {
      insight: "⚠️ 23% drop in final 2 minutes",
      impact: "Losing viewers before conclusion",
      suggestion: "Add call-to-action earlier",
      priority: "high",
      color: "orange",
    },
  },
];

const metrics = [
  {
    title: "Subscribers",
    value: "847.2K",
    change: "+12.5%",
    icon: Users,
    gradient: "purple-gradient",
    trend: "up",
  },
  {
    title: "Total Views",
    value: "24.8M",
    change: "+8.3%",
    icon: Eye,
    gradient: "blue-gradient",
    trend: "up",
  },
  {
    title: "Total Videos",
    value: "342",
    change: "+3",
    icon: BarChart3,
    gradient: "orange-gradient",
    trend: "up",
  },
  {
    title: "Avg CTR",
    value: "8.4%",
    change: "+2.1%",
    icon: TrendingUp,
    gradient: "green-gradient",
    trend: "up",
  },
];

export function DashboardPage() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold text-white">Channel Overview</h1>
            <p className="text-gray-400 flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Tech Reviews Pro • Live Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            Connect Channel
          </Button>
        </div>
      </div>

      {/* Channel Info Card */}
      <Card className="card-gradient hover-lift animate-fade-in-scale">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">TR</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Tech Reviews Pro
                </h2>
                <p className="text-gray-400 max-w-md">
                  Professional tech reviews and tutorials for the modern
                  audience
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    ✓ Verified Channel
                  </Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    🔥 Trending Creator
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <p className="text-sm text-gray-400">Last updated</p>
              <p className="text-white font-medium">2 minutes ago</p>
              <div className="flex items-center text-green-500 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Real-time sync
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="card-gradient hover-lift stagger-item overflow-hidden relative">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 ${metric.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <metric.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="font-medium">{metric.change}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">{metric.title}</p>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </CardContent>
          </Card>
        ))}
      </div> */}

     

      {/* Video Library */}
      <div className="space-y-6">
        <div className="flex items-center justify-between animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Play className="w-6 h-6 mr-2 text-orange-500" />
              Video Library
            </h2>
            <p className="text-gray-400 mt-1">
              AI-powered insights to improve your content
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              All Videos
            </Badge>
            <div className="flex border border-white/20 rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-500 bg-orange-500/10 hover:bg-orange-500/20"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="card-gradient overflow-hidden group hover-lift stagger-item relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 orange-gradient rounded-full flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-500/90 text-white text-xs shadow-lg">
                    {video.status}
                  </Badge>
                </div>
                {video.trend === "up" && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-green-500/90 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-white line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{video.published}</span>
                    </div>
                  </div>
                </div>

                {/* AI Analysis Teaser */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          video.analysisTeaser.color === "red"
                            ? "bg-red-500/20 border border-red-500/30"
                            : video.analysisTeaser.color === "green"
                            ? "bg-green-500/20 border border-green-500/30"
                            : "bg-orange-500/20 border border-orange-500/30"
                        }`}
                      >
                        {video.analysisTeaser.color === "red"
                          ? "🎯"
                          : video.analysisTeaser.color === "green"
                          ? "🚀"
                          : "⚠️"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium leading-tight">
                          {video.analysisTeaser.insight}
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          {video.analysisTeaser.impact}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <Badge
                        className={`text-xs px-2 py-1 ${
                          video.analysisTeaser.priority === "high"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {video.analysisTeaser.priority} priority
                      </Badge>
                      <span className="text-xs text-gray-400 text-right max-w-[60%] leading-tight">
                        {video.analysisTeaser.suggestion}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engagement Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Engagement Score</span>
                    <span>{video.engagement}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${video.engagement}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <Link href={`/analysis/${video.id}`}>
                    <Button
                      size="sm"
                      className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Analyze
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="card-gradient hover-lift animate-fade-in-up">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick Actions
              </h3>
              <p className="text-gray-400">
                Streamline your workflow with these shortcuts
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Users className="w-4 h-4 mr-2" />
                Invite Team
              </Button>
              <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
