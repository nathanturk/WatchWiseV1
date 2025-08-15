export interface AnalysisTeaser {
  insight: string;
  impact: string;
  suggestion: string;
  priority: "high" | "medium" | "low";
  color: "red" | "green" | "orange";
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  published: string;
  duration: string;
  status: string;
  trend: "up" | "down" | "stable";
  engagement: number;
  analysisTeaser: AnalysisTeaser;
  type: "video" | "short" | "live";
}

export const videos: Video[] = [
  // Nathan's Developers Foundry Application Video
  {
    id: 1,
    title: "Developers Foundry Application - Nathan Turkson",
    thumbnail: "/images/analysis-preview.png",
    views: "85K views",
    published: "2 days ago",
    duration: "8:30",
    status: "published",
    trend: "up",
    engagement: 85,
    type: "video",
    analysisTeaser: {
      insight: "🎯 Excellent 85% retention - Strong personal connection",
      impact: "Could improve to 90-95% with visual aids",
      suggestion: "Add project screenshots",
      priority: "high",
      color: "green",
    },
  },
  // Regular Videos
  {
    id: 2,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    thumbnail: "/images/iphonevideo.jpg",
    views: "2.4M views",
    published: "3 days ago",
    duration: "12:45",
    status: "published",
    trend: "up",
    engagement: 95,
    type: "video",
    analysisTeaser: {
      insight: "🎯 Major drop at 4:30 - Setup section losing viewers",
      impact: "Could boost retention by 18%",
      suggestion: "Move setup to separate video",
      priority: "high",
      color: "red",
    },
  },
  {
    id: 3,
    title: "MacBook Pro M3 vs Gaming Laptop: Which Wins?",
    thumbnail: "/images/macbookvideo.jpg",
    views: "1.8M views",
    published: "1 week ago",
    duration: "15:23",
    status: "published",
    trend: "up",
    engagement: 87,
    type: "video",
    analysisTeaser: {
      insight: "🚀 Peak engagement at 8:15 - Benchmark results",
      impact: "Viewers love performance comparisons",
      suggestion: "Add more benchmark segments",
      priority: "medium",
      color: "green",
    },
  },
  {
    id: 4,
    title: "AirPods Pro 3 vs Sony WH-1000XM5: Audio Battle",
    thumbnail: "/images/airpodsvideo.avif",
    views: "950K views",
    published: "2 weeks ago",
    duration: "9:17",
    status: "published",
    trend: "stable",
    engagement: 78,
    type: "video",
    analysisTeaser: {
      insight: "⚠️ 23% drop in final 2 minutes",
      impact: "Losing viewers before conclusion",
      suggestion: "Add call-to-action earlier",
      priority: "high",
      color: "orange",
    },
  },
  {
    id: 5,
    title: "Complete Guide to Video Editing in 2024",
    thumbnail: "/images/iphonevideo.jpg",
    views: "3.2M views",
    published: "1 month ago",
    duration: "28:45",
    status: "published",
    trend: "up",
    engagement: 92,
    type: "video",
    analysisTeaser: {
      insight: "🚀 High retention during tutorial sections",
      impact: "Educational content performs well",
      suggestion: "Create more tutorial content",
      priority: "medium",
      color: "green",
    },
  },
  {
    id: 6,
    title: "Best Gaming Setup for 2024: Ultimate Guide",
    thumbnail: "/images/macbookvideo.jpg",
    views: "1.5M views",
    published: "3 weeks ago",
    duration: "22:10",
    status: "published",
    trend: "down",
    engagement: 73,
    type: "video",
    analysisTeaser: {
      insight: "📉 Declining interest in gaming content",
      impact: "Audience shift detected",
      suggestion: "Consider diversifying content",
      priority: "medium",
      color: "orange",
    },
  },

  // Shorts
  {
    id: 7,
    title: "Quick iPhone Camera Tips in 60 Seconds",
    thumbnail: "/images/iphonevideo.jpg",
    views: "850K views",
    published: "1 day ago",
    duration: "0:58",
    status: "published",
    trend: "up",
    engagement: 88,
    type: "short",
    analysisTeaser: {
      insight: "⚡ Perfect short format engagement",
      impact: "Shorts driving new audience",
      suggestion: "Create more short-form content",
      priority: "low",
      color: "green",
    },
  },
  {
    id: 8,
    title: "MacBook Pro M3 Speed Test",
    thumbnail: "/images/macbookvideo.jpg",
    views: "620K views",
    published: "2 days ago",
    duration: "0:45",
    status: "published",
    trend: "up",
    engagement: 91,
    type: "short",
    analysisTeaser: {
      insight: "🚀 High engagement in performance content",
      impact: "Quick tests resonate well",
      suggestion: "More speed test shorts",
      priority: "low",
      color: "green",
    },
  },
  {
    id: 9,
    title: "AirPods Pro Sound Quality Test",
    thumbnail: "/images/airpodsvideo.avif",
    views: "450K views",
    published: "3 days ago",
    duration: "0:52",
    status: "published",
    trend: "stable",
    engagement: 76,
    type: "short",
    analysisTeaser: {
      insight: "📊 Moderate engagement for audio content",
      impact: "Audio tests need visual elements",
      suggestion: "Add waveform visualizations",
      priority: "medium",
      color: "orange",
    },
  },
  {
    id: 10,
    title: "Quick Video Editing Hack",
    thumbnail: "/images/iphonevideo.jpg",
    views: "780K views",
    published: "4 days ago",
    duration: "0:48",
    status: "published",
    trend: "up",
    engagement: 94,
    type: "short",
    analysisTeaser: {
      insight: "💡 Tutorial shorts performing excellently",
      impact: "Educational shorts have high retention",
      suggestion: "Focus on tutorial shorts",
      priority: "low",
      color: "green",
    },
  },
  {
    id: 11,
    title: "Gaming Setup Tour in 60s",
    thumbnail: "/images/macbookvideo.jpg",
    views: "320K views",
    published: "1 week ago",
    duration: "0:59",
    status: "published",
    trend: "down",
    engagement: 65,
    type: "short",
    analysisTeaser: {
      insight: "📉 Gaming content losing traction",
      impact: "Consider content pivot",
      suggestion: "Test different gaming angles",
      priority: "high",
      color: "red",
    },
  },

  // Live Content
  {
    id: 12,
    title: "Live: iPhone 16 Pro Launch Reaction",
    thumbnail: "/images/iphonevideo.jpg",
    views: "125K views",
    published: "2 hours ago",
    duration: "1:45:23",
    status: "live",
    trend: "up",
    engagement: 89,
    type: "live",
    analysisTeaser: {
      insight: "🔥 Live content driving high engagement",
      impact: "Real-time reactions work well",
      suggestion: "Schedule more live events",
      priority: "medium",
      color: "green",
    },
  },
  {
    id: 13,
    title: "Live: Tech Q&A Session",
    thumbnail: "/images/macbookvideo.jpg",
    views: "89K views",
    published: "5 hours ago",
    duration: "2:15:10",
    status: "ended",
    trend: "stable",
    engagement: 82,
    type: "live",
    analysisTeaser: {
      insight: "💬 Q&A format maintains engagement",
      impact: "Interactive content performs well",
      suggestion: "Regular Q&A sessions",
      priority: "low",
      color: "green",
    },
  },
  {
    id: 14,
    title: "Live: MacBook Pro M3 Unboxing",
    thumbnail: "/images/macbookvideo.jpg",
    views: "156K views",
    published: "1 day ago",
    duration: "1:32:45",
    status: "ended",
    trend: "up",
    engagement: 91,
    type: "live",
    analysisTeaser: {
      insight: "📦 Unboxing content drives excitement",
      impact: "Product reveals perform well live",
      suggestion: "More live unboxings",
      priority: "medium",
      color: "green",
    },
  },
];

export const getFilteredVideos = (filter: string) => {
  switch (filter) {
    case "videos":
      return videos.filter((video) => video.type === "video");
    case "shorts":
      return videos.filter((video) => video.type === "short");
    case "live":
      return videos.filter((video) => video.type === "live");
    default:
      return videos;
  }
};

export const getVideoCounts = () => {
  return {
    all: videos.length,
    videos: videos.filter((v) => v.type === "video").length,
    shorts: videos.filter((v) => v.type === "short").length,
    live: videos.filter((v) => v.type === "live").length,
  };
};
