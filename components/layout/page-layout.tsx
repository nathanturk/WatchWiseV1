import { ReactNode } from "react";
import { BackgroundElements } from "@/components/ui/background-elements";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showBackground?: boolean;
}

export const PageLayout = ({ 
  children, 
  className = "min-h-screen p-6 space-y-8",
  showBackground = true 
}: PageLayoutProps) => {
  return (
    <div className={className}>
      {showBackground && <BackgroundElements />}
      {children}
    </div>
  );
};
