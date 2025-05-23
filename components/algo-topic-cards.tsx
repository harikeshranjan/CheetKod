"use client";

import React from 'react';

import { ArrowRight, Search, Type, Shuffle, ListStart, Repeat, TreeDeciduous, Network } from "lucide-react";

const algo = [
  {
    id: 1,
    title: "Searching Algorithms",
    icon: Search,
    color: "bg-blue-500",
    description: "Techniques to find elements in arrays, trees, or graphs (e.g., Binary Search, DFS, BFS, A* Search, etc.)"
  },
  {
    id: 2,
    title: "String Algorithms",
    icon: Type,
    color: "bg-purple-500",
    description: "Efficient methods for pattern matching and text processing (e.g., KMP, Rabin-Karp)"
  },
  {
    id: 3,
    title: "Sorting Algorithms",
    icon: Shuffle,
    color: "bg-green-500",
    description: "Organizing data in a specific order (e.g., Merge Sort, Quick Sort, Heap Sort, Counting Sort, etc.)"
  },
  {
    id: 4,
    title: "Greedy Algorithms",
    icon: ListStart,
    color: "bg-red-500",
    description: "Making locally optimal choices for global solutions (e.g., Activity Selection, Huffman Coding)"
  },
  {
    id: 5,
    title: "Dynamic Programming",
    icon: Repeat,
    color: "bg-yellow-500",
    description: "Solving complex problems by breaking them into overlapping subproblems (e.g., Knapsack, LIS)"
  },
  {
    id: 6,
    title: "Tree Algorithms",
    icon: TreeDeciduous,
    color: "bg-orange-500",
    description: "Tree data structures include BST, AVL Trees, Red-Black Trees, Segment Trees, etc."
  },
  {
    id: 7,
    title: "Graph Algorithms",
    icon: Network,
    color: "bg-teal-500",
    description: "Analyzing relationships and connectivity (e.g., Dijkstra, Kruskal, Topological Sort) and more."
  },
] as const;

function TopicCard({ title, IconComponent, color, description, onClick }: { 
  title: string; 
  IconComponent: React.ComponentType<any>;
  color: string; 
  description: string;
  onClick?: () => void;
}) {
  return (
    <div 
      className="group relative overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} shadow-sm`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 dark:text-neutral-500 group-hover:text-gray-600 dark:group-hover:text-neutral-300 transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 ${color} group-hover:w-full transition-all duration-300 ease-out`} />
      </div>
    </div>
  );
}

export default function TopicCardsShowcase() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-12">        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {algo.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              IconComponent={topic.icon}
              color={topic.color}
              description={topic.description}
              onClick={() => console.log(`Clicked on ${topic.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}