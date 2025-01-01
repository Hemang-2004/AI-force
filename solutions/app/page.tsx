import Image from 'next/image'
import InteractiveBackground from '@/components/interactive-background'
import { NavMenu } from '@/components/nav-menu'
import { FeatureTimeline } from '@/components/feature-timeline'
import { Workflow } from '@/components/workflow'
import { Testimonials } from '@/components/testimonials'
import { GlobeVisualization } from '@/components/globe-visualization'
import { Benefits } from '@/components/benefits'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { SentimentAnalysis } from '@/components/sentiment-analysis'
import { CompanyLogos } from '@/components/company-logos'
import { SectionHeading } from '@/components/section-heading'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveBackground />
      
      {/* Navigation */}
      <header className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/mainlogo.png"
              alt="AI BPO Solutions Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="text-2xl font-bold">AI BPO Solutions</div>
          </div>
          <NavMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Workflow with AI-Powered Automation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Highlight key benefits like increased efficiency, reduced workload, and enhanced client satisfaction.
          </p>
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Timeline */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading>Features</SectionHeading>
        <FeatureTimeline />
      </section>

      {/* How It Works */}
      <section id="workflow" className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading>How We Work</SectionHeading>
        <Workflow />
      </section>

      {/* Sentiment Analysis */}
      <section id="sentiment" className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading>Sentiment Analysis</SectionHeading>
        <SentimentAnalysis />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading>Testimonials</SectionHeading>
        <Testimonials />
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <SectionHeading>Benefits</SectionHeading>
        <Benefits />
      </section>

      {/* Companies */}
      <section className="py-20">
        <SectionHeading>Companies That Trust Us</SectionHeading>
        <CompanyLogos />
      </section>

      {/* Globe Visualization */}
      <section className="relative py-20 overflow-hidden">
        <SectionHeading>Global Coverage</SectionHeading>
        <GlobeVisualization />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

