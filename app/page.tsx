import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="w-full max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              LeetCode Solutions Hub
            </div>

            {/* Main Heading */}
            <h1 className="font-bold text-4xl leading-tight sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Master 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-3">
                Coding
              </span>
              Challenges with
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                CheetKOD
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Your ultimate destination for comprehensive LeetCode solutions. Dive deep into 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Data Structures</span>, 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> Algorithms</span>, and 
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> JavaScript</span> mastery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/data-structure"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Learning
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link 
                href="/algorithm"
                className="px-8 py-4 bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 backdrop-blur-sm transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Feature Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Data Structures</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Algorithm Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-neutral-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose CheetKOD?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to excel in technical interviews and competitive programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Structures Card */}
            <div className="group p-8 bg-white/80 dark:bg-neutral-800/80 rounded-2xl border border-gray-200/50 dark:border-neutral-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Structures</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Master arrays, linked lists, trees, graphs, and more with detailed explanations and optimized solutions.
              </p>
              <Link 
                href="/data-structure" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Explore Data Structures →
              </Link>
            </div>

            {/* Algorithms Card */}
            <div className="group p-8 bg-white/80 dark:bg-neutral-800/80 rounded-2xl border border-gray-200/50 dark:border-neutral-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Algorithms</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Dive into sorting, searching, dynamic programming, and advanced algorithmic techniques.
              </p>
              <Link 
                href="/algorithm" 
                className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
              >
                Learn Algorithms →
              </Link>
            </div>

            {/* JavaScript Card */}
            <div className="group p-8 bg-white/80 dark:bg-neutral-800/80 rounded-2xl border border-gray-200/50 dark:border-neutral-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">JavaScript</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript-specific solutions with modern ES6+ syntax and best practices for web development.
              </p>
              <Link 
                href="/javascript" 
                className="text-yellow-600 dark:text-yellow-500 font-medium hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors duration-200"
              >
                Master JavaScript →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Level Up Your Coding Skills?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are mastering coding interviews with CheetKOD's comprehensive solutions.
            </p>
            <Link 
              href="/data-structure"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <span className="ml-2">🚀</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}