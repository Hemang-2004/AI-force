export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pb-16">
      <h2 className="text-4xl font-bold text-center">
        {children}
      </h2>
      <div className="absolute left-1/2 bottom-0 w-24 h-1 bg-yellow-400 transform -translate-x-1/2" />
    </div>
  )
}

