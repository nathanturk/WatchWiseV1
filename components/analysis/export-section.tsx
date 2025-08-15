import { Download, FileText, BarChart3, Users } from "lucide-react";
import { AnalysisCard } from "@/components/ui/analysis-card";
import { ActionButton } from "@/components/ui/action-button";

export const ExportSection = () => {
  return (
    <AnalysisCard
      title="Export Complete Analysis"
      icon={Download}
      iconColor="text-orange-500"
    >
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-white flex items-center">
              <Download className="w-6 h-6 mr-3 text-orange-500" />
              Export Complete Analysis
            </h3>
            <p className="text-gray-400">
              Share comprehensive insights with your team or save for future
              reference
            </p>
          </div>
          <div className="flex space-x-3">
            <ActionButton
              variant="outline"
              icon={<FileText className="w-4 h-4" />}
            >
              Export PDF
            </ActionButton>
            <ActionButton
              variant="outline"
              icon={<BarChart3 className="w-4 h-4" />}
            >
              Export CSV
            </ActionButton>
            <ActionButton
              variant="primary"
              icon={<Users className="w-4 h-4" />}
            >
              Share with Team
            </ActionButton>
          </div>
        </div>
      </div>
    </AnalysisCard>
  );
};
