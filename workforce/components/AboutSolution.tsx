export default function AboutSolution() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">About Our Solution</h2>
        <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
          Our AI-Powered Hybrid Workforce Solution revolutionizes BPO operations by seamlessly integrating cutting-edge AI technologies with human expertise, delivering unparalleled efficiency and client satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Enhance operational efficiency",
            "Improve client satisfaction",
            "Automate workflows",
            "AI-driven insights for better decision-making"
          ].map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Key Benefit {index + 1}</h3>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

