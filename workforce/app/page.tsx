import MainBanner from '../components/MainBanner'
import AboutSolution from '../components/AboutSolution'
import KeyFeatures from '../components/KeyFeatures'
import Benefits from '../components/Benefits'
import AIModelsTools from '../components/AIModelsTools'
import DashboardDemo from '../components/DashboardDemo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainBanner />
      <AboutSolution />
      <KeyFeatures />
      <Benefits />
      <AIModelsTools />
      <DashboardDemo />
    </main>
  )
}

