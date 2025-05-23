import { default as AlgoCardsShowcase } from "@/components/algo-topic-cards";
import { default as DSCardsShowcase } from "@/components/ds-topic-cards";
import { ChevronDown } from "lucide-react";

export default function DSA() {
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
          <h1 className="pb-3 text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent">Data Structure & Algorithm</h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <p className="text-lg text-center text-gray-600 dark:text-gray-400">
            Data Structures and Algorithms (DSA) are fundamental concepts in computer science that form the backbone of efficient programming. Understanding DSA is crucial for solving complex problems, optimizing performance, and excelling in technical interviews.
          </p>
          <ChevronDown className="w-8 h-8 my-5 mx-auto text-gray-600 dark:text-gray-400 animate-bounce" />
        </div>

        {/* topic cards */}
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent">Data Structures</h2>
            <DSCardsShowcase />
          </div>
          <div>
            <h2 className="pb-3 text-xl md:text-2xl lg:text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent">Algorithms</h2>
            <AlgoCardsShowcase />
          </div>
        </div>
      </section>
    </div>
  )
}