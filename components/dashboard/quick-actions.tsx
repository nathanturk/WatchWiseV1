import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, BarChart3 } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="card-gradient hover-lift animate-fade-in-up">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Actions
            </h3>
            <p className="text-gray-400">
              Streamline your workflow with these shortcuts
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              Upload Video
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              Invite Team
            </Button>
            <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
