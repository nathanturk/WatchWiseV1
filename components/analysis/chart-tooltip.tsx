import { Badge } from "@/components/ui/badge";
import { ChartTooltipProps, TimestampAnalysis } from "@/lib/types/analysis";
import { getTrendIcon, formatNumber } from "@/lib/utils/analysis-utils";

interface ChartTooltipPropsExtended extends ChartTooltipProps {
  timestampAnalysis: TimestampAnalysis[];
}

export const ChartTooltip = ({ active, payload, label, timestampAnalysis }: ChartTooltipPropsExtended) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;
  const retention = data.retention;
  const viewers = data.viewers;
  const engagement = data.engagement;

  // Convert label to string if it's a number
  const labelString = typeof label === 'number' ? label.toString() : label;

  // Find the closest timestamp analysis
  const closestAnalysis = timestampAnalysis.find((analysis) => {
    const [start, end] = analysis.timestamp.split(" - ");
    const startMinutes = parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]);
    const endMinutes = parseInt(end.split(":")[0]) * 60 + parseInt(end.split(":")[1]);
    const timeInMinutes = parseInt(labelString?.split(":")[0] || "0") * 60 + parseInt(labelString?.split(":")[1] || "0");
    return timeInMinutes >= startMinutes && timeInMinutes <= endMinutes;
  });

  return (
    <div className="glass-effect p-4 rounded-xl border border-white/20 shadow-2xl backdrop-blur-sm">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold text-lg">{labelString}</h4>
          <Badge className="bg-orange-500/20 text-orange-300">
            {retention}% retention
          </Badge>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-xs text-gray-400">Retention</p>
            <p className="text-white font-bold">{retention}%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Viewers</p>
            <p className="text-white font-bold">{formatNumber(viewers)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Engagement</p>
            <p className="text-white font-bold">{engagement}%</p>
          </div>
        </div>

        {closestAnalysis && (
          <div className="border-t border-white/10 pt-3">
            <div className="flex items-center space-x-2 mb-2">
              {getTrendIcon(closestAnalysis.trend as any)}
              <h5 className="text-white font-medium">{closestAnalysis.title}</h5>
            </div>
            <p className="text-sm text-gray-300 mb-2">{closestAnalysis.summary}</p>
            <div className="flex items-center justify-between">
              <Badge
                className={`${
                  closestAnalysis.retentionChange.startsWith("+")
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {closestAnalysis.retentionChange}
              </Badge>
              <span className="text-xs text-gray-400">
                {formatNumber(closestAnalysis.viewers)} viewers
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
