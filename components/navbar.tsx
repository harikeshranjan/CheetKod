import Link from "next/link"
import ModeToggle from "./mode-toggle"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ArrowDown01, LayoutPanelTop } from "lucide-react"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200/20 dark:border-neutral-700/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <h1 className="text-2xl font-light text-gray-900 dark:text-white">
                cheet
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-3xl font-semibold ml-0.5">
                  KOD
                </span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  href="/data-structure"
                  className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100/60 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200"
                >
                  <LayoutPanelTop className="w-5 h-5 inline-block mr-2" />
                  Data Structure
                </Link>
              </li>
              <li>
                <Link
                  href="/algorithm"
                  className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-950/30 rounded-lg transition-all duration-200"
                >
                  <ArrowDown01 className="w-5 h-5 inline-block mr-2" />
                  Algorithm
                </Link>
              </li>
              <li>
                <Link
                  href="/javascript"
                  className="flex gap-2 items-center px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-100/60 dark:hover:bg-yellow-950/30 rounded-lg transition-all duration-200"
                >
                  <svg className="rounded" width="20px" height="20px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                    <path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></g>
                  </svg>
                  JavaScript
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="p-1">
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger>
                <div className="md:hidden">
                  <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mb-5">Menu</SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col space-y-4">
                      <li>
                        <Link
                          href="/data-structure"
                          className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100/60 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200"
                        >
                          <LayoutPanelTop className="w-5 h-5 inline-block mr-2" />
                          Data Structure
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/algorithm"
                          className="px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-950/30 rounded-lg transition-all duration-200"
                        >
                          <ArrowDown01 className="w-5 h-5 inline-block mr-2" />
                          Algorithm
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/javascript"
                          className="flex gap-2 items-center px-4 py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-100/60 dark:hover:bg-yellow-950/30 rounded-lg transition-all duration-200"
                        >
                          <svg className="rounded" width="20px" height="20px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></g>
                          </svg>
                          JavaScript
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar