import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AnalysisCardProps {
  title: string;
  icon: LucideIcon;
  iconColor?: string;
  children: ReactNode;
  className?: string;
  badge?: ReactNode;
}

export const AnalysisCard = ({ 
  title, 
  icon: Icon, 
  iconColor = "text-orange-500",
  children, 
  className = "",
  badge 
}: AnalysisCardProps) => {
  return (
    <Card className={`card-gradient hover-lift animate-fade-in-up ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center text-xl">
          <Icon className={`w-6 h-6 mr-3 ${iconColor}`} />
          {title}
          {badge && <span className="ml-3">{badge}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};
