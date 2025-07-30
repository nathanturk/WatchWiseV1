import { VideoAnalysisPage } from "@/components/analysis/video-analysis-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function VideoAnalysis({ params }: { params: { id: string } }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="gradient-bg">
        <VideoAnalysisPage videoId={params.id} />
      </SidebarInset>
    </SidebarProvider>
  )
}
