import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowLeft, Share, Download, Brain } from "lucide-react";
import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between animate-fade-in-up">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <Link href="/dashboard">
          <ActionButton variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Dashboard
          </ActionButton>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Brain className="w-8 h-8 mr-3 text-orange-500" />
            {title}
          </h1>
          <p className="text-gray-400 mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <ActionButton variant="outline" icon={<Share className="w-4 h-4" />}>
          Share
        </ActionButton>
        <ActionButton variant="primary" icon={<Download className="w-4 h-4" />}>
          Export Report
        </ActionButton>
      </div>
    </div>
  );
};
