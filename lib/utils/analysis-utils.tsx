import { TrendType, TimestampAnalysis } from "../types/analysis";
import { ArrowUp, ArrowDown, TrendingDown, Minus } from "lucide-react";

export const getTrendIcon = (trend: TrendType) => {
  switch (trend) {
    case "spike":
    case "strong_recovery":
    case "recovery":
      return <ArrowUp className="w-4 h-4 text-green-500" />;
    case "major_drop":
    case "decline":
    case "final_decline":
      return <ArrowDown className="w-4 h-4 text-red-500" />;
    case "slight_drop":
    case "gradual_decline":
    case "steady_decline":
    case "continued_drop":
      return <TrendingDown className="w-4 h-4 text-orange-500" />;
    default:
      return <Minus className="w-4 h-4 text-gray-500" />;
  }
};

export const getTrendColor = (trend: TrendType) => {
  switch (trend) {
    case "spike":
    case "strong_recovery":
    case "recovery":
      return "border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/5";
    case "major_drop":
    case "decline":
    case "final_decline":
      return "border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/5";
    case "slight_drop":
    case "gradual_decline":
    case "steady_decline":
    case "continued_drop":
      return "border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-600/5";
    default:
      return "border-gray-500/30 bg-gradient-to-r from-gray-500/10 to-gray-600/5";
  }
};

export const findClosestTimestampAnalysis = (
  timeLabel: string,
  timestampAnalysis: TimestampAnalysis[]
): TimestampAnalysis | undefined => {
  const timeInMinutes =
    parseInt(timeLabel.split(":")[0]) * 60 + parseInt(timeLabel.split(":")[1]);
  
  return timestampAnalysis.find((analysis) => {
    const [start, end] = analysis.timestamp.split(" - ");
    const startMinutes =
      parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]);
    const endMinutes =
      parseInt(end.split(":")[0]) * 60 + parseInt(end.split(":")[1]);
    return timeInMinutes >= startMinutes && timeInMinutes <= endMinutes;
  });
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500/20 text-red-300 border-red-500/30";
    case "medium":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "low":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};
