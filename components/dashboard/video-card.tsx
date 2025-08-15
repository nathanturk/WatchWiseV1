import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Calendar, Zap, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Video } from "@/lib/dashboard-data";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border border-red-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";
      default:
        return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
    }
  };

  const getInsightIcon = (color: string) => {
    switch (color) {
      case "red":
        return "🎯";
      case "green":
        return "🚀";
      default:
        return "⚠️";
    }
  };

  return (
    <Card className="card-gradient overflow-hidden group hover-lift transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">
          {video.duration}
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
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

        {/* AI Analysis Teaser - Simplified */}
        <div className="p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
          <div className="flex items-start space-x-2">
            <div className="text-lg">
              {getInsightIcon(video.analysisTeaser.color)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium leading-tight">
                {video.analysisTeaser.insight}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10">
            <Badge
              className={`text-xs px-2 py-1 ${getPriorityColor(
                video.analysisTeaser.priority
              )}`}
            >
              {video.analysisTeaser.priority} priority
            </Badge>
            <span className="text-xs text-gray-400 text-right max-w-[60%] leading-tight">
              {video.analysisTeaser.suggestion}
            </span>
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
  );
}
