"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Target,
  Trophy,
  AlertCircle,
  Frown,
} from "lucide-react";
import Link from "next/link";
import { RetentionDashboard } from "./retention-dashboard";
import { AchievementSystem } from "../achievements/achievement-system";
import { Paywall } from "../subscription/paywall";

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
    retention: 75,
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
    retention: 68,
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
    retention: 62,
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
  const [activeTab, setActiveTab] = useState("retention");
  const [showPaywall, setShowPaywall] = useState(false);
  const [hasViewedAnalysis, setHasViewedAnalysis] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [channelData, setChannelData] = useState<any>(null);

  useEffect(() => {
    // Simulate loading channel data
    setTimeout(() => {
      setChannelData({
        name: "Tech Reviews Pro",
        subscribers: "847.2K",
        totalViews: "24.8M",
        totalVideos: 342,
        retention: 75,
        isVerified: true,
        isTrending: true,
        lastUpdated: "2 minutes ago",
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleVideoAnalysis = (videoId: number) => {
    setHasViewedAnalysis(true);
    // Show paywall after first analysis
    if (!hasViewedAnalysis) {
      setTimeout(() => {
        setShowPaywall(true);
      }, 1000);
    }
  };

  const handleSubscribe = (planId: string) => {
    setShowPaywall(false);
    // Handle subscription logic here
    console.log("Subscribed to plan:", planId);
  };

  const handleAchievementUnlocked = (achievementId: string) => {
    console.log("Achievement unlocked:", achievementId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-lg">Loading your channel data...</p>
          <p className="text-gray-400">This may take a few moments</p>
        </div>
      </div>
    );
  }

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
              {channelData?.name} • Live Analytics
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
                  {channelData?.name}
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
              <p className="text-white font-medium">
                {channelData?.lastUpdated}
              </p>
              <div className="flex items-center text-green-500 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Real-time sync
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
          <TabsTrigger
            value="retention"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            <Target className="w-4 h-4 mr-2" />
            Retention
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            <Play className="w-4 h-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger
            value="achievements"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="retention" className="space-y-6">
          <RetentionDashboard />
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="card-gradient hover-lift cursor-pointer"
                onClick={() => handleVideoAnalysis(video.id)}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-medium text-sm line-clamp-2 mb-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span>{video.views}</span>
                        <span>{video.published}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Retention
                          </span>
                          <span className="text-white font-medium">
                            {video.retention}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${video.retention}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Analysis Teaser */}
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-start space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-1 ${
                            video.analysisTeaser.priority === "high"
                              ? "bg-red-400"
                              : video.analysisTeaser.priority === "medium"
                              ? "bg-orange-400"
                              : "bg-green-400"
                          }`}
                        ></div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {video.analysisTeaser.insight}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {video.analysisTeaser.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <AchievementSystem
            onAchievementUnlocked={handleAchievementUnlocked}
          />
        </TabsContent>
      </Tabs>

      {/* Paywall */}
      <Paywall
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
}
