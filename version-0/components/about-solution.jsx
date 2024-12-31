import { CheckCircle } from 'lucide-react'

export default function AboutSolution() {
  const benefits = [
    "Enhance operational efficiency",
    "Improve client satisfaction",
    "Automate workflows",
    "AI-driven insights for better decision-making"
  ]

  return (
    (<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About the Solution</h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            AI-Powered Hybrid Workforce Solution
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our cutting-edge AI-Powered Hybrid Workforce Solution revolutionizes BPO operations by seamlessly integrating 
            artificial intelligence with human expertise, delivering unparalleled efficiency and client satisfaction.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="mt-10 first:mt-0 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg leading-6 font-medium text-gray-900">{benefit}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>)
  );
}

