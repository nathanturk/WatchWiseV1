import { useState } from "react";
import { AIImprovement } from "@/lib/types/analysis";

export const useVideoAnalysis = () => {
  const [selectedTimestamp, setSelectedTimestamp] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "pacing" | "engagement">("content");
  const [selectedSuggestion, setSelectedSuggestion] = useState<AIImprovement | null>(null);

  const handleTimestampSelect = (timestamp: number) => {
    setSelectedTimestamp(timestamp);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTabChange = (tab: "content" | "pacing" | "engagement") => {
    setActiveTab(tab);
  };

  const handleSuggestionSelect = (suggestion: AIImprovement | null) => {
    setSelectedSuggestion(suggestion);
  };

  const closeSuggestionModal = () => {
    setSelectedSuggestion(null);
  };

  return {
    selectedTimestamp,
    isPlaying,
    activeTab,
    selectedSuggestion,
    handleTimestampSelect,
    handlePlayPause,
    handleTabChange,
    handleSuggestionSelect,
    closeSuggestionModal,
  };
};
