import {
  RetentionDataPoint,
  TimestampAnalysis,
  AIImprovementCategories,
  PerformanceAnalysis,
} from "../types/analysis";

export const retentionData: RetentionDataPoint[] = [
  {
    time: "0:00",
    retention: 100,
    viewers: 85000,
    engagement: 92,
    timestamp: 0,
  },
  {
    time: "0:05",
    retention: 45,
    viewers: 38250,
    engagement: 78,
    timestamp: 5,
  },
  {
    time: "0:10",
    retention: 35,
    viewers: 29750,
    engagement: 72,
    timestamp: 10,
  },
  {
    time: "0:15",
    retention: 32,
    viewers: 27200,
    engagement: 68,
    timestamp: 15,
  },
  {
    time: "0:20",
    retention: 30,
    viewers: 25500,
    engagement: 65,
    timestamp: 20,
  },
  {
    time: "0:25",
    retention: 28,
    viewers: 23800,
    engagement: 62,
    timestamp: 25,
  },
  {
    time: "0:30",
    retention: 26,
    viewers: 22100,
    engagement: 59,
    timestamp: 30,
  },
  {
    time: "0:35",
    retention: 25,
    viewers: 21250,
    engagement: 56,
    timestamp: 35,
  },
  {
    time: "0:40",
    retention: 24,
    viewers: 20400,
    engagement: 53,
    timestamp: 40,
  },
  {
    time: "0:45",
    retention: 23,
    viewers: 19550,
    engagement: 50,
    timestamp: 45,
  },
  {
    time: "0:50",
    retention: 22,
    viewers: 18700,
    engagement: 47,
    timestamp: 50,
  },
  {
    time: "0:55",
    retention: 21,
    viewers: 17850,
    engagement: 44,
    timestamp: 55,
  },
  {
    time: "1:00",
    retention: 20,
    viewers: 17000,
    engagement: 41,
    timestamp: 60,
  },
  {
    time: "1:05",
    retention: 18,
    viewers: 15300,
    engagement: 38,
    timestamp: 65,
  },
  {
    time: "1:10",
    retention: 19,
    viewers: 16150,
    engagement: 40,
    timestamp: 70,
  },
  {
    time: "1:15",
    retention: 17,
    viewers: 14450,
    engagement: 35,
    timestamp: 75,
  },
  {
    time: "1:20",
    retention: 16,
    viewers: 13600,
    engagement: 32,
    timestamp: 80,
  },
  {
    time: "1:25",
    retention: 18,
    viewers: 15300,
    engagement: 36,
    timestamp: 85,
  },
  {
    time: "1:30",
    retention: 15,
    viewers: 12750,
    engagement: 30,
    timestamp: 90,
  },
  {
    time: "1:35",
    retention: 14,
    viewers: 11900,
    engagement: 28,
    timestamp: 95,
  },
  {
    time: "1:40",
    retention: 16,
    viewers: 13600,
    engagement: 33,
    timestamp: 100,
  },
  {
    time: "1:45",
    retention: 13,
    viewers: 11050,
    engagement: 26,
    timestamp: 105,
  },
  {
    time: "1:50",
    retention: 12,
    viewers: 10200,
    engagement: 24,
    timestamp: 110,
  },
  {
    time: "1:55",
    retention: 14,
    viewers: 11900,
    engagement: 29,
    timestamp: 115,
  },
  {
    time: "2:00",
    retention: 11,
    viewers: 9350,
    engagement: 22,
    timestamp: 120,
  },
  {
    time: "2:05",
    retention: 10,
    viewers: 8500,
    engagement: 20,
    timestamp: 125,
  },
  {
    time: "2:10",
    retention: 12,
    viewers: 10200,
    engagement: 25,
    timestamp: 130,
  },
  {
    time: "2:15",
    retention: 9,
    viewers: 7650,
    engagement: 18,
    timestamp: 135,
  },
  {
    time: "2:20",
    retention: 8,
    viewers: 6800,
    engagement: 16,
    timestamp: 140,
  },
  {
    time: "2:25",
    retention: 10,
    viewers: 8500,
    engagement: 21,
    timestamp: 145,
  },
  {
    time: "2:30",
    retention: 7,
    viewers: 5950,
    engagement: 14,
    timestamp: 150,
  },
  {
    time: "2:35",
    retention: 6,
    viewers: 5100,
    engagement: 12,
    timestamp: 155,
  },
  {
    time: "2:40",
    retention: 8,
    viewers: 6800,
    engagement: 17,
    timestamp: 160,
  },
  {
    time: "2:45",
    retention: 5,
    viewers: 4250,
    engagement: 10,
    timestamp: 165,
  },
  {
    time: "2:50",
    retention: 4,
    viewers: 3400,
    engagement: 8,
    timestamp: 170,
  },
  {
    time: "2:55",
    retention: 6,
    viewers: 5100,
    engagement: 13,
    timestamp: 175,
  },
  {
    time: "3:00",
    retention: 3,
    viewers: 2550,
    engagement: 6,
    timestamp: 180,
  },
  {
    time: "3:05",
    retention: 2,
    viewers: 1700,
    engagement: 4,
    timestamp: 185,
  },
  {
    time: "3:10",
    retention: 4,
    viewers: 3400,
    engagement: 9,
    timestamp: 190,
  },
  {
    time: "3:15",
    retention: 1,
    viewers: 850,
    engagement: 2,
    timestamp: 195,
  },
  {
    time: "3:20",
    retention: 0,
    viewers: 0,
    engagement: 0,
    timestamp: 200,
  },
];

export const timestampAnalysis: TimestampAnalysis[] = [
  {
    id: 1,
    timestamp: "00:00 - 00:15",
    type: "strong_hook",
    title: "Strong Personal Introduction",
    retentionChange: "-5%",
    trend: "excellent",
    viewers: 83300,
    summary: "Excellent opening with personal connection and clear background",
    details: {
      description:
        "Hi my name is Nathan texen I'm from acar Ghana I'm a passionate um software engineer with about two to three years of experience...",
      analysis:
        "Strong opening hook with immediate personal connection. The 5% drop is excellent for the first 15 seconds. Nathan establishes credibility and passion effectively.",
      keyMoments: [
        "0:00 - Personal introduction with name and location",
        "0:05 - Clear statement of passion and role",
        "0:08 - Specific experience level (2-3 years)",
        "0:12 - Overview of technical skills",
      ],
      suggestions: [
        "Consider adding a brief visual of Ghana or your work environment",
        "Maintain this personal, authentic tone throughout",
      ],
    },
  },
  {
    id: 2,
    timestamp: "00:15 - 00:30",
    type: "steady_engagement",
    title: "Skills and Experience Overview",
    retentionChange: "-3%",
    trend: "excellent",
    viewers: 78200,
    summary: "Strong retention while explaining technical background",
    details: {
      description:
        "um my span of software engineering covers data analysis I've done some project management I've also done some front end and back end as well...",
      analysis:
        "Excellent retention during skills explanation. Viewers are engaged by the comprehensive technical background. The 3% drop is minimal and shows strong interest.",
      keyMoments: [
        "0:15 - Data analysis experience",
        "0:20 - Project management skills",
        "0:25 - Full-stack development capabilities",
        "0:30 - Well-rounded technical profile",
      ],
      suggestions: [
        "Consider adding specific project examples for each skill area",
        "Show confidence in your diverse experience",
      ],
    },
  },
  {
    id: 3,
    timestamp: "00:30 - 00:45",
    type: "steady_engagement",
    title: "Career Alignment and Motivation",
    retentionChange: "-3%",
    trend: "excellent",
    viewers: 70550,
    summary: "Strong connection between personal goals and program objectives",
    details: {
      description:
        "um my career aspirations I believe lines perfectly well with the developers Foundry um program that's why I'm so eager to take part in the compet in this program...",
      analysis:
        "Excellent retention during motivation explanation. Nathan clearly articulates why he's a perfect fit, which maintains viewer engagement. The 3% drop continues the excellent trend.",
      keyMoments: [
        "0:30 - Career aspirations alignment",
        "0:35 - Perfect fit with program objectives",
        "0:40 - Clear enthusiasm and eagerness",
        "0:45 - Strong personal motivation",
      ],
      suggestions: [
        "Consider adding specific examples of how your goals align",
        "Show more enthusiasm in delivery",
      ],
    },
  },
  {
    id: 4,
    timestamp: "00:45 - 01:00",
    type: "steady_engagement",
    title: "Program Benefits and Team Work",
    retentionChange: "-3%",
    trend: "excellent",
    viewers: 62900,
    summary: "Clear understanding of program value and team dynamics",
    details: {
      description:
        "and I believe I'm a very good fit I'm eager to join the program because I know that um I'll get to work on High level projects I will get um mentorship from season vets...",
      analysis:
        "Excellent retention while explaining program benefits. Nathan shows he understands the value proposition and is excited about the opportunities. The 3% drop maintains the excellent trend.",
      keyMoments: [
        "0:45 - Confidence in being a good fit",
        "0:50 - High-level project opportunities",
        "0:55 - Mentorship from experienced professionals",
        "1:00 - Team collaboration benefits",
      ],
      suggestions: [
        "Consider adding specific types of projects you're excited about",
        "Show enthusiasm for learning from mentors",
      ],
    },
  },
  {
    id: 5,
    timestamp: "01:00 - 01:07",
    type: "steady_engagement",
    title: "Project Showcase and Conclusion",
    retentionChange: "-2%",
    trend: "excellent",
    viewers: 51000,
    summary: "Strong conclusion with project highlights",
    details: {
      description:
        "I'll get to work in teams from diverse groups and diverse backgrounds all right one of my proudest projects is development of a a complex smart system that's used to monitor the amount of gas and cylinders...",
      analysis:
        "Excellent retention during the conclusion. Nathan effectively showcases his project and ties together his skills and program fit. The 2% drop maintains the excellent trend throughout.",
      keyMoments: [
        "1:00 - Team diversity appreciation",
        "1:02 - Project introduction",
        "1:05 - Smart system technology",
        "1:07 - Thank you conclusion",
      ],
      suggestions: [
        "Consider adding more technical details about the system",
        "End with confidence and enthusiasm",
      ],
    },
  },
];

export const aiImprovements: AIImprovementCategories = {
  contentSuggestions: [
    {
      title: "Add visual project demonstrations",
      priority: "high",
      impact: "Could increase retention by 15-20%",
      category: "Visual Enhancement",
      description:
        "Show screenshots or demos of your smart gas monitoring system to make the technical achievements more tangible.",
      detailedInfo: {
        positiveContext:
          "Your application video is performing exceptionally well! The 60% average retention shows viewers are highly engaged with your personal story and technical background.",
        improvementArea:
          "However, we noticed viewers might struggle to visualize the complexity of your smart gas monitoring system without visual aids.",
        whyItWorks:
          "Visual demonstrations help viewers immediately understand the technical complexity and scale of your achievements. This builds credibility and maintains engagement.",
        implementation: [
          "Include screenshots of the monitoring dashboard",
          "Show the system architecture diagram",
          "Demonstrate real-time monitoring capabilities",
          "Highlight the technical challenges overcome",
        ],
        expectedOutcome:
          "This could increase your average retention from 60% to 70-75%, and make your technical achievements more memorable to program evaluators.",
        timeInvestment: "30 seconds of additional content",
        difficulty: "Easy",
      },
    },
    {
      title: "Elaborate on technical challenges",
      priority: "medium",
      impact: "Could increase engagement by 15%",
      category: "Technical Depth",
      description:
        "Share specific technical challenges you overcame while building the smart gas monitoring system.",
      detailedInfo: {
        positiveContext:
          "Your technical background explanation is clear and comprehensive! Viewers appreciate your diverse skill set and practical experience.",
        improvementArea:
          "However, we noticed you could dive deeper into the specific technical challenges that demonstrate your problem-solving abilities.",
        whyItWorks:
          "Technical challenges show your critical thinking, problem-solving skills, and ability to work through complex issues - all valuable for the Developers Foundry program.",
        implementation: [
          "Describe 1-2 specific technical problems you solved",
          "Explain your troubleshooting process",
          "Share the learning outcomes from each challenge",
          "Connect challenges to skill development",
        ],
        expectedOutcome:
          "This could increase technical credibility and show evaluators your growth mindset and problem-solving approach.",
        timeInvestment: "15-20 seconds of additional content",
        difficulty: "Medium",
      },
    },
  ],
  pacingImprovements: [
    {
      title: "Add brief pauses for emphasis",
      priority: "medium",
      impact: "Could improve clarity by 10%",
      category: "Delivery",
      description:
        "Add strategic pauses after key points to let important information sink in.",
      detailedInfo: {
        positiveContext:
          "Your delivery is clear and professional! The steady engagement throughout shows viewers can follow your message effectively.",
        improvementArea:
          "However, we noticed some key points could benefit from brief pauses to emphasize their importance.",
        whyItWorks:
          "Strategic pauses help viewers process important information and emphasize key achievements. This improves message retention and impact.",
        implementation: [
          "Pause after stating your years of experience",
          "Pause after mentioning the smart system project",
          "Pause before stating you're a perfect fit",
          "Use pauses to separate different skill areas",
        ],
        expectedOutcome:
          "This could improve message clarity and make key achievements more memorable to program evaluators.",
        timeInvestment: "No additional time needed",
        difficulty: "Easy",
      },
    },
  ],
  engagementTactics: [
    {
      title: "Add personal story elements",
      priority: "high",
      impact: "Could increase emotional connection by 30%",
      category: "Personal Connection",
      description:
        "Include brief personal anecdotes about your journey into software engineering.",
      detailedInfo: {
        positiveContext:
          "Your personal introduction is excellent! Viewers connect with your authentic passion and clear career goals.",
        improvementArea:
          "However, we noticed you could add more personal elements that make your story memorable and relatable.",
        whyItWorks:
          "Personal stories create emotional connections and make candidates more memorable. They show your human side beyond technical skills.",
        implementation: [
          "Share what inspired you to become a software engineer",
          "Include a brief story about learning a challenging concept",
          "Mention a mentor or role model who influenced you",
          "Share your vision for the future of technology",
        ],
        expectedOutcome:
          "This could increase emotional engagement and make your application more memorable to program evaluators.",
        timeInvestment: "20-30 seconds of additional content",
        difficulty: "Medium",
      },
    },
  ],
};

export const performanceAnalysis: PerformanceAnalysis = {
  whatWorked: [
    {
      title: "Strong personal introduction (00:00 - 00:15)",
      impact: "Only -5% drop (excellent)",
      reason:
        "Clear personal connection and immediate credibility establishment",
      metric: "Retained 95% of initial viewers",
    },
    {
      title: "Technical skills overview (00:15 - 00:30)",
      impact: "Only -3% drop (excellent)",
      reason: "Comprehensive and well-organized skill presentation",
      metric: "Retained 97% of viewers",
    },
    {
      title: "Career alignment explanation (00:30 - 00:45)",
      impact: "Only -3% drop (excellent)",
      reason: "Clear connection between personal goals and program objectives",
      metric: "Retained 97% of viewers",
    },
    {
      title: "Project showcase introduction (01:00 - 01:07)",
      impact: "Only -2% drop (excellent)",
      reason: "Strong transition to concrete achievements",
      metric: "Retained 98% of viewers",
    },
  ],
  whatDidntWork: [
    {
      title: "Minor pacing during technical explanations",
      impact: "Slight engagement dips",
      reason: "Some technical concepts could benefit from more elaboration",
      metric: "3% drops during technical segments",
    },
    {
      title: "Limited visual elements",
      impact: "Reduced visual engagement",
      reason: "No visual aids to support technical achievements",
      metric: "Could improve retention by 15-20%",
    },
  ],
  canBeImproved: [
    {
      title: "Add visual project demonstrations",
      suggestion:
        "Include screenshots or demos of your smart gas monitoring system",
      expectedImpact: "Could increase retention by 15-20%",
    },
    {
      title: "Elaborate on technical challenges",
      suggestion:
        "Share specific problems you solved while building the system",
      expectedImpact: "Could increase technical credibility significantly",
    },
    {
      title: "Include personal journey elements",
      suggestion: "Add brief stories about your path to software engineering",
      expectedImpact: "Could increase emotional connection by 30%",
    },
    {
      title: "Add strategic pauses",
      suggestion: "Use brief pauses to emphasize key achievements",
      expectedImpact: "Could improve message clarity and retention",
    },
    {
      title: "Connect to future goals",
      suggestion:
        "Share how the program fits into your long-term career vision",
      expectedImpact: "Could show better program alignment and motivation",
    },
  ],
};
