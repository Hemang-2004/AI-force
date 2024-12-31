import { Button } from '@/components/ui/button'

export default function Banner() {
  return (
    (<div className="relative bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg?height=600&width=1200">
          <source src="/bpo-workflow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      </div>
      <div
        className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transforming BPO with AI Agents for Unmatched Efficiency
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Experience the future of Business Process Outsourcing with our AI-powered hybrid workforce solution. 
          Enhance operational efficiency, improve client satisfaction, and drive growth with intelligent automation.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <a href="/contact">Request Demo</a>
          </Button>
        </div>
      </div>
    </div>)
  );
}

