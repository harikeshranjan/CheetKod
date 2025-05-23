import TopicCardsShowcase from "@/components/algo-topic-cards";
import { ChevronDown } from "lucide-react";

export default function Algorithm() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* hero section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* background element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="pb-3 text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent">Algorithms</h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <p className="text-lg text-center text-gray-600 dark:text-gray-400">
            Explore the world of algorithms with our comprehensive guide. Learn about sorting, searching, dynamic programming, and more!
          </p>
          <ChevronDown className="w-8 h-8 my-5 mx-auto text-gray-600 dark:text-gray-400 animate-bounce" />
        </div>

        {/* topic cards */}
        <TopicCardsShowcase />
      </section>
    </div>
  )
}