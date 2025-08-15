export interface RetentionDataPoint {
  time: string;
  retention: number;
  viewers: number;
  engagement: number;
  timestamp: number;
}

export interface TimestampAnalysis {
  id: number;
  timestamp: string;
  type: string;
  title: string;
  retentionChange: string;
  trend: string;
  viewers: number;
  summary: string;
  details: {
    description: string;
    analysis: string;
    keyMoments: string[];
    suggestions: string[];
  };
}

export interface AIImprovement {
  title: string;
  priority: "high" | "medium" | "low";
  impact: string;
  category: string;
  description: string;
  detailedInfo: {
    positiveContext: string;
    improvementArea: string;
    whyItWorks: string;
    implementation: string[];
    expectedOutcome: string;
    timeInvestment: string;
    difficulty: string;
  };
}

export interface PerformanceAnalysis {
  whatWorked: Array<{
    title: string;
    impact: string;
    reason: string;
    metric: string;
  }>;
  whatDidntWork: Array<{
    title: string;
    impact: string;
    reason: string;
    metric: string;
  }>;
  canBeImproved: Array<{
    title: string;
    suggestion: string;
    expectedImpact: string;
  }>;
}

export interface AIImprovementCategories {
  contentSuggestions: AIImprovement[];
  pacingImprovements: AIImprovement[];
  engagementTactics: AIImprovement[];
}

export type TrendType = 
  | "spike" 
  | "strong_recovery" 
  | "recovery" 
  | "major_drop" 
  | "decline" 
  | "final_decline" 
  | "slight_drop" 
  | "gradual_decline" 
  | "steady_decline" 
  | "continued_drop";

export interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
}
