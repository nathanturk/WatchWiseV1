"use client";

import { useVideoAnalysis } from "@/hooks/use-video-analysis";
import {
  retentionData,
  timestampAnalysis,
  aiImprovements,
} from "@/lib/data/analysis-data";
import { PageHeader } from "./page-header";
import { PageLayout } from "@/components/layout/page-layout";
import { RetentionChart } from "./retention-chart";
import { AIImprovements } from "./ai-improvements";
import { SuggestionModal } from "./suggestion-modal";
import { ExportSection } from "./export-section";
import { useState, useEffect } from "react";

interface VideoAnalysisPageProps {
  videoId: string;
}

export function VideoAnalysisPage({ videoId }: VideoAnalysisPageProps) {
  const { selectedSuggestion, handleSuggestionSelect, closeSuggestionModal } =
    useVideoAnalysis();

  // State for retention goals
  const [retentionTarget, setRetentionTarget] = useState(30);
  const [currentMaxRetention, setCurrentMaxRetention] = useState(25);

  // Get top 3 improvements from different categories
  const topImprovements = [
    aiImprovements.contentSuggestions[0],
    aiImprovements.pacingImprovements[0],
    aiImprovements.engagementTactics[0],
  ].filter(Boolean);

  // YouTube video ID from the URL
  const youtubeVideoId = "I-px7TX33ks";

  // Calculate recommended goal (rounded up max retention, capped at 80%)
  useEffect(() => {
    // Find the sustained retention rate (after the initial drop)
    // Skip the first few seconds where retention drops dramatically
    const sustainedData = retentionData.slice(3); // Skip first 3 data points
    const maxSustainedRetention = Math.max(
      ...sustainedData.map((d) => d.retention)
    );
    setCurrentMaxRetention(maxSustainedRetention);
  }, []);

  const getRecommendedGoal = (maxRetention: number) => {
    if (maxRetention >= 80) return 80;
    // Round up to the next 5% increment for more realistic goals
    return Math.ceil(maxRetention / 5) * 5;
  };

  const getGoalExpression = (target: number) => {
    if (target > 80) {
      return {
        emoji: "🤯",
        status: "Unrealistic Goal",
        message: "This target is extremely challenging to achieve.",
      };
    } else if (target > 60) {
      return {
        emoji: "😰",
        status: "Ambitious Goal",
        message: "This will require significant improvements.",
      };
    } else if (target > 40) {
      return {
        emoji: "😐",
        status: "Moderate Goal",
        message: "Challenging but achievable with effort.",
      };
    } else if (target > 20) {
      return {
        emoji: "😊",
        status: "Realistic Goal",
        message: "Keep pushing! This is achievable.",
      };
    } else {
      return {
        emoji: "😄",
        status: "Easy Goal",
        message: "You can definitely reach this target!",
      };
    }
  };

  const handleRetentionTargetChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRetentionTarget(parseInt(event.target.value));
  };

  const goalExpression = getGoalExpression(retentionTarget);
  const recommendedGoal = getRecommendedGoal(currentMaxRetention);

  return (
    <PageLayout>
      <PageHeader
        title="AI Video Analysis"
        subtitle="Nathan Turkson - Developers Foundry Application"
      />

      {/* Video and Analytics Row Layout - 35% video, 65% graph */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        {/* Left: YouTube Video Player - 2 columns (35%) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-[300px]"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
              title="Nathan Turkson - Developers Foundry Application"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Audience Retention Goals */}
          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800/50">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
              <span className="mr-2">📊</span>
              Retention Goals
            </h3>

            {/* Current Performance - Compact */}
            <div className="mb-3 p-2 bg-gray-800/50 rounded border border-gray-700/50">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-300">Max Retention:</span>
                <span className="font-bold text-purple-400">
                  {currentMaxRetention}%
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-300">Target Goal:</span>
                <span className="font-bold text-green-400">
                  {recommendedGoal}%
                </span>
              </div>
            </div>

            {/* Goal Setting - Compact Side-by-Side */}
            <div>
              <label className="block text-xs text-gray-300 mb-2 font-medium">
                Set Target
              </label>

              {/* Slider and Goal Feedback Side by Side */}
              <div className="flex items-center space-x-3">
                {/* Left: Slider Section */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={retentionTarget}
                      onChange={handleRetentionTargetChange}
                      className="flex-1 h-1.5 bg-gray-400 rounded appearance-none cursor-pointer slider border-2 border-gray-300"
                    />
                    <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded text-center min-w-[2.5rem] shadow-sm">
                      {retentionTarget}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>10%</span>
                    <span>90%</span>
                  </div>
                </div>

                {/* Right: Compact Goal Feedback */}
                <div className="flex-shrink-0">
                  <div className="text-center p-2 goal-feedback-card rounded-lg border border-gray-600/30">
                    <div className="text-xl mb-1">{goalExpression.emoji}</div>
                    <div className="text-xs font-semibold text-gray-200">
                      {goalExpression.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Analytics Chart - 3 columns (65%) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-gray-900/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Audience Retention Analysis
            </h3>
            <RetentionChart
              data={retentionData}
              timestampAnalysis={timestampAnalysis}
              retentionTarget={retentionTarget}
            />
          </div>
        </div>
      </div>

      {/* AI Improvements Section */}
      <AIImprovements
        improvements={topImprovements}
        onSuggestionSelect={handleSuggestionSelect}
      />

      <ExportSection />

      <SuggestionModal
        suggestion={selectedSuggestion}
        onClose={closeSuggestionModal}
      />
    </PageLayout>
  );
}
