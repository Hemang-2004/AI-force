import Header from '@/components/header'
import Banner from '@/components/banner'
import AboutSolution from '@/components/about-solution'
import KeyFeatures from '@/components/key-features'

export default function Home() {
  return (
    (<div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Banner />
        <AboutSolution />
        <KeyFeatures />
      </main>
    </div>)
  );
}

