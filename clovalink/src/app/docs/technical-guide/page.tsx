import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function TechnicalGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Technical Guide
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Setup, configuration, and maintenance documentation
              </p>
              <p className="mt-4 text-blue-400">
                <a href="https://github.com/dotdon/ClovaLink/wiki/Technical-Guide" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View complete Technical Guide on GitHub Wiki
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card bg-slate-800 border border-slate-700 shadow-xl p-8">
              <div className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold text-white mb-6">ClovaLink Technical Guide</h1>
                
                <p className="text-slate-300 mb-6">
                  This guide is intended for developers and system administrators who need to set up, configure, and maintain ClovaLink.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Development Environment Setup</h2>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Prerequisites</h3>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
                  <li>Node.js (v16 or later)</li>
                  <li>npm (v7 or later)</li>
                  <li>Git</li>
                  <li>MongoDB (v4.4 or later)</li>
                  <li>Redis (optional, for caching)</li>
                </ul>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Local Setup</h3>
                <ol className="list-decimal pl-6 text-slate-300 space-y-4 mb-6">
                  <li>
                    <p className="mb-2">Clone the repository:</p>
                    <div className="bg-slate-700 p-3 rounded-md mb-4">
                      <code className="text-blue-300">git clone https://github.com/yourusername/clovalink.git</code>
                    </div>
                  </li>
                  <li>
                    <p className="mb-2">Install dependencies:</p>
                    <div className="bg-slate-700 p-3 rounded-md mb-4">
                      <code className="text-blue-300">npm install</code>
                    </div>
                  </li>
                  <li>
                    <p className="mb-2">Set up environment variables:</p>
                    <div className="bg-slate-700 p-3 rounded-md mb-4">
                      <code className="text-blue-300">cp .env.example .env</code>
                    </div>
                  </li>
                  <li>
                    <p className="mb-2">Start the development server:</p>
                    <div className="bg-slate-700 p-3 rounded-md mb-4">
                      <code className="text-blue-300">npm run dev</code>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-300 mb-4">
                  This is a preview of the Technical Guide. For the complete documentation, please visit our GitHub Wiki.
                </p>
                <a 
                  href="https://github.com/dotdon/ClovaLink/wiki/Technical-Guide" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Technical Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 