import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

interface VideoFiltersProps {
  activeFilter: string;
  viewMode: "grid" | "list";
  onFilterChange: (filter: string) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
  videoCounts: {
    all: number;
    videos: number;
    shorts: number;
    live: number;
  };
}

export function VideoFilters({
  activeFilter,
  viewMode,
  onFilterChange,
  onViewModeChange,
  videoCounts,
}: VideoFiltersProps) {
  const filters = [
    { key: "all", label: "All Content", count: videoCounts.all },
    { key: "videos", label: "Long Form", count: videoCounts.videos },
    { key: "shorts", label: "Shorts", count: videoCounts.shorts },
    { key: "live", label: "Live", count: videoCounts.live },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "default" : "ghost"}
            size="sm"
            onClick={() => onFilterChange(filter.key)}
            className={`transition-all duration-300 ${
              activeFilter === filter.key
                ? "orange-gradient text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/10 bg-transparent"
            }`}
          >
            {filter.label}
            <Badge
              variant="secondary"
              className={`ml-2 ${
                activeFilter === filter.key
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      <div className="flex border border-white/20 rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewModeChange("grid")}
          className={`transition-all duration-300 ${
            viewMode === "grid"
              ? "text-orange-500 bg-orange-500/10 hover:bg-orange-500/20"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`}
        >
          <Grid3X3 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewModeChange("list")}
          className={`transition-all duration-300 ${
            viewMode === "list"
              ? "text-orange-500 bg-orange-500/10 hover:bg-orange-500/20"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`}
        >
          <List className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
