import { Activity } from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  ReferenceLine,
  Label,
} from "recharts";
import { RetentionDataPoint, TimestampAnalysis } from "@/lib/types/analysis";
import { ChartTooltip } from "./chart-tooltip";

interface RetentionChartProps {
  data: RetentionDataPoint[];
  timestampAnalysis: TimestampAnalysis[];
  retentionTarget?: number;
}

export const RetentionChart = ({
  data,
  timestampAnalysis,
  retentionTarget = 30,
}: RetentionChartProps) => {
  // Find key drop points (significant drops in retention)
  const findKeyDrops = (data: RetentionDataPoint[]) => {
    const keyDrops: RetentionDataPoint[] = [];
    for (let i = 1; i < data.length; i++) {
      const current = data[i];
      const previous = data[i - 1];
      const drop = previous.retention - current.retention;

      // Mark as key drop if retention drops by more than 3% or at specific time markers
      if (
        drop > 3 ||
        current.time === "0:05" || // Initial sharp drop
        current.time === "0:20" || // Around 30% mark
        current.time === "0:35" || // Around 25% mark
        current.time === "0:50" || // Around 22% mark
        current.time === "1:00" || // Around 20% mark
        current.time === "1:05" || // Around 18% mark
        current.time === "1:25" || // Around 18% mark
        current.time === "1:40" || // Around 16% mark
        current.time === "1:55" || // Around 14% mark
        current.time === "2:10" || // Around 12% mark
        current.time === "2:25" || // Around 10% mark
        current.time === "2:40" || // Around 8% mark
        current.time === "2:55" || // Around 6% mark
        current.time === "3:10" // Around 4% mark
      ) {
        keyDrops.push(current);
      }
    }
    return keyDrops;
  };

  const keyDrops = findKeyDrops(data);

  return (
    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800/50">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        Audience Retention
      </h3>

      {/* Legend */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-300">Key Drop Points</span>
        </div>
      </div>

      <div className="h-80 relative bg-gray-900/30 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient
                id="retentionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            {/* Dark grid with subtle pattern */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.15}
              horizontal={true}
              vertical={true}
            />

            {/* X-axis - Time */}
            <XAxis
              dataKey="time"
              stroke="#9CA3AF"
              fontSize={11}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickMargin={8}
            />

            {/* Y-axis - Retention % */}
            <YAxis
              stroke="#9CA3AF"
              fontSize={11}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}%`}
              tickMargin={8}
            />

            {/* Tooltip */}
            <Tooltip
              content={(props) => (
                <ChartTooltip
                  {...props}
                  timestampAnalysis={timestampAnalysis}
                />
              )}
              cursor={{
                stroke: "#3b82f6",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />

            {/* Goal Target Line */}
            <ReferenceLine
              y={retentionTarget}
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="5 5"
              opacity={0.8}
            >
              <Label
                value={`Goal: ${retentionTarget}%`}
                position="right"
                fill="#10b981"
                fontSize={10}
                fontWeight="bold"
              />
            </ReferenceLine>

            {/* Main retention line */}
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />

            {/* Key drop markers */}
            {keyDrops.map((point, index) => (
              <g key={index}>
                {/* Vertical highlight bar for major drops */}
                {point.time === "0:05" && (
                  <ReferenceLine
                    x={point.time}
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="3 3"
                    opacity={0.6}
                  />
                )}

                {/* Key drop circle markers */}
                <circle
                  cx={0}
                  cy={0}
                  r={4}
                  fill="#3b82f6"
                  stroke="#ffffff"
                  strokeWidth={2}
                  className="key-drop-marker"
                />

                {/* Key drop labels for major points */}
                {(point.time === "0:05" ||
                  point.time === "0:20" ||
                  point.time === "1:00" ||
                  point.time === "2:00") && (
                  <text
                    x={0}
                    y={-15}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={10}
                    fontWeight="bold"
                  >
                    {point.retention}%
                  </text>
                )}
              </g>
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
