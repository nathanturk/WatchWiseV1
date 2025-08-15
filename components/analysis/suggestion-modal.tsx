import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Lightbulb,
  Brain,
  Zap,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";
import { AIImprovement } from "@/lib/types/analysis";

interface SuggestionModalProps {
  suggestion: AIImprovement | null;
  onClose: () => void;
}

export const SuggestionModal = ({ suggestion, onClose }: SuggestionModalProps) => {
  if (!suggestion) return null;

  return (
    <Dialog open={!!suggestion} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl card-gradient border-white/20 max-h-[90vh] overflow-y-auto">
        <div className="space-y-4">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-white flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                {suggestion.title.split(" ")[0]}
              </div>
              <div>
                <h2 className="text-white font-semibold text-base">
                  {suggestion.title}
                </h2>
                <Badge className="bg-yellow-500/20 text-yellow-300 text-xs mt-1">
                  {suggestion.category}
                </Badge>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Positive Context */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                </div>
                <div>
                  <h4 className="text-green-300 font-semibold mb-1 text-sm">
                    What's Working Well
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {suggestion.detailedInfo.positiveContext}
                  </p>
                </div>
              </div>
            </div>

            {/* Improvement Area */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-3 h-3 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-orange-300 font-semibold mb-1 text-sm">
                    Opportunity for Improvement
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {suggestion.detailedInfo.improvementArea}
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-1 text-sm">
                    Why This Works
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {suggestion.detailedInfo.whyItWorks}
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Steps */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3 h-3 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-purple-300 font-semibold mb-2 text-sm">
                    How to Implement
                  </h4>
                  <div className="space-y-1">
                    {suggestion.detailedInfo.implementation.map(
                      (step: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-purple-300 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-300 text-xs">
                            {step}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Outcome & Metrics */}
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20">
                <h4 className="text-green-300 font-semibold mb-1 flex items-center text-sm">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Expected Outcome
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {suggestion.detailedInfo.expectedOutcome}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20">
                <h4 className="text-yellow-300 font-semibold mb-1 flex items-center text-sm">
                  <Clock className="w-3 h-3 mr-2" />
                  Time Investment
                </h4>
                <div className="space-y-1">
                  <p className="text-gray-300 text-xs">
                    <span className="font-medium">Duration:</span>{" "}
                    {suggestion.detailedInfo.timeInvestment}
                  </p>
                  <p className="text-gray-300 text-xs">
                    <span className="font-medium">Difficulty:</span>{" "}
                    {suggestion.detailedInfo.difficulty}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-white/10 space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-500/20 text-orange-300 text-xs">
                  {suggestion.impact}
                </Badge>
                <Badge
                  className={`text-xs ${
                    suggestion.priority === "high"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {suggestion.priority} priority
                </Badge>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent text-xs"
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg text-xs"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Start Implementation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
