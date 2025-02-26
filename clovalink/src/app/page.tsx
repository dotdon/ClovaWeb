import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Secure file sharing</span>
                    <span className="block text-blue-600">for your business</span>
                  </h1>
                  <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    ClovaLink is an open-source alternative to cloud storage services, designed for businesses that need secure file sharing without compromising on features or privacy.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        Explore Features
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/docs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-slate-700 md:py-4 md:text-lg md:px-10">
                        Documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-80 dark:opacity-30 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-xl bg-white dark:bg-slate-800 shadow-xl transform -rotate-6"></div>
                <div className="absolute inset-0 rounded-xl bg-white dark:bg-slate-800 shadow-xl transform rotate-3">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-slate-100 dark:bg-slate-700 rounded-md"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Key Features
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 lg:mx-auto">
                Everything you need for secure file management and sharing.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "End-to-End Encryption",
                    description: "All files are encrypted in transit and at rest for maximum security."
                  },
                  {
                    title: "Secure Sharing Links",
                    description: "Generate secure, expiring links for file sharing with external users."
                  },
                  {
                    title: "Role-Based Access Control",
                    description: "Granular permissions with Admin, Manager, and User roles."
                  },
                  {
                    title: "Multi-Company Support",
                    description: "Manage multiple companies or departments within a single platform."
                  },
                  {
                    title: "Advanced Administration",
                    description: "User management, activity monitoring, and security policy enforcement."
                  },
                  {
                    title: "Streamlined Workflow",
                    description: "Monitor user activities with insights into file access patterns."
                  }
                ].map((feature, index) => (
                  <div key={index} className="pt-6">
                    <div className="flow-root bg-slate-50 dark:bg-slate-900 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-slate-900 dark:text-white tracking-tight">{feature.title}</h3>
                        <p className="mt-5 text-base text-slate-500 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Interested in ClovaLink?</span>
              <span className="block text-blue-200">Learn more about our secure file sharing platform.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/docs" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Documentation
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a href="https://github.com/dotdon/cloverlink" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

