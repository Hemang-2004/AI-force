import { CallbackCalendar } from "@/components/ui/callback-calendar"
import { KnowledgeBase } from "@/components/knowledge-base"
import { NewClaimDialog } from "@/components/new-claim-dialog"
import { TaskList } from "@/components/task-list"
import { SentimentAnalysis } from "@/components/sentiment-analysis"
import { PerformanceMetrics } from "@/components/performance-metrics"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex gap-4">
            <NewClaimDialog />
            {/* Additional action buttons can be added here */}
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <CallbackCalendar />
          <SentimentAnalysis />
        </div>
        
        <PerformanceMetrics />
        
        <div className="grid gap-8 md:grid-cols-2">
          <TaskList />
          <KnowledgeBase />
        </div>
      </div>
    </div>
  )
}

