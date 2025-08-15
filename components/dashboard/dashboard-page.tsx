import { VideoLibrarySection } from "./video-library-section";
import { QuickActions } from "./quick-actions";

export function DashboardPage() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Video Library */}
      <VideoLibrarySection />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}
