import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles } from "lucide-react";
import { AIImprovement } from "@/lib/types/analysis";
import { AnalysisCard } from "@/components/ui/analysis-card";

interface AIImprovementsProps {
  improvements: AIImprovement[];
  onSuggestionSelect: (suggestion: AIImprovement) => void;
}

export const AIImprovements = ({ improvements, onSuggestionSelect }: AIImprovementsProps) => {
  return (
    <AnalysisCard 
      title="AI Video Improvement Plan" 
      icon={Sparkles} 
      iconColor="text-yellow-500"
      badge={
        <Badge className="bg-yellow-500/20 text-yellow-300">
          Top 3 Actions
        </Badge>
      }
    >
        <div className="space-y-6">
          {/* Top 3 Priority Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              🎯 Your Top 3 Video Improvements
            </h3>

            {improvements.map((suggestion, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-r from-white/5 to-white/2 border border-white/10 hover:border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-500/5 hover:to-yellow-600/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-lg group-hover:text-yellow-300 transition-colors">
                          {suggestion.title}
                        </h4>
                        <Badge className="bg-yellow-500/20 text-yellow-300 text-xs mt-1">
                          {suggestion.category}
                        </Badge>
                      </div>
                      <Badge className="bg-red-500/20 text-red-300 border border-red-500/30">
                        High Priority
                      </Badge>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {suggestion.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-400 font-medium">
                          {suggestion.impact}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10 bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                        onClick={() => onSuggestionSelect(suggestion)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Suggestions */}
          <div className="border-t border-white/10 pt-6">
            <div className="text-center space-y-4">
              <h4 className="text-white font-medium">
                Want to see all 12 AI recommendations?
              </h4>
              <p className="text-gray-400 text-sm">
                Get detailed insights on content enhancement, pacing
                optimization, and engagement tactics
              </p>
              <Button
                className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View All AI Suggestions
              </Button>
            </div>
          </div>
        </div>
      </AnalysisCard>
    );
};
