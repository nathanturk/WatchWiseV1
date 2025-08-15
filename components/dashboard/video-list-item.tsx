import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Calendar, Zap, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Video } from "@/lib/dashboard-data";

interface VideoListItemProps {
  video: Video;
}

export function VideoListItem({ video }: VideoListItemProps) {
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
    <Card className="card-gradient hover-lift transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          {/* Thumbnail */}
          <div className="relative flex-shrink-0">
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              className="w-24 h-16 object-cover rounded-lg"
            />
            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded text-[10px]">
              {video.duration}
            </div>
            {video.trend === "up" && (
              <div className="absolute top-1 right-1">
                <div className="w-5 h-5 bg-green-500/90 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white line-clamp-1 group-hover:text-orange-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{video.published}</span>
                  </div>
                  <Badge className="bg-green-500/90 text-white text-xs">
                    {video.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* AI Analysis Teaser - Compact */}
            <div className="flex items-center space-x-3">
              <div className="text-sm">
                {getInsightIcon(video.analysisTeaser.color)}
              </div>
              <p className="text-sm text-white font-medium flex-1 min-w-0">
                {video.analysisTeaser.insight}
              </p>
              <Badge
                className={`text-xs px-2 py-1 ${getPriorityColor(
                  video.analysisTeaser.priority
                )}`}
              >
                {video.analysisTeaser.priority}
              </Badge>
            </div>
          </div>

          {/* Engagement & Actions */}
          <div className="flex flex-col items-end space-y-3">
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Engagement</div>
              <div className="text-lg font-semibold text-white">
                {video.engagement}%
              </div>
              <div className="w-20 bg-white/10 rounded-full h-2 overflow-hidden mt-1">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  style={{ width: `${video.engagement}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
