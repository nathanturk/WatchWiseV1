"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { VideoCard } from "./video-card";
import { VideoListItem } from "./video-list-item";
import { VideoFilters } from "./video-filters";
import { getFilteredVideos, getVideoCounts, Video } from "@/lib/dashboard-data";

export function VideoLibrarySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredVideos = getFilteredVideos(activeFilter);
  const videoCounts = getVideoCounts();

  return (
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
      </div>

      {/* Filters and View Toggle */}
      <VideoFilters
        activeFilter={activeFilter}
        viewMode={viewMode}
        onFilterChange={setActiveFilter}
        onViewModeChange={setViewMode}
        videoCounts={videoCounts}
      />

      {/* Video Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <VideoListItem video={video} />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No content found</div>
          <div className="text-gray-500 text-sm">
            Try adjusting your filters or upload new content
          </div>
        </div>
      )}
    </div>
  );
}
