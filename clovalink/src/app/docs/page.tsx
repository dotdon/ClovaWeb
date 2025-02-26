import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Documentation
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Everything you need to know about ClovaLink
              </p>
              <p className="mt-4 text-blue-400">
                <a href="https://github.com/dotdon/cloverlink/wiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View complete documentation on GitHub Wiki
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="card bg-slate-800 border border-slate-700 shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-white mb-4">User Guide</h2>
                <p className="text-slate-300 mb-6">
                  Learn how to use ClovaLink effectively with our comprehensive user guide. Perfect for end users who need to navigate the platform.
                </p>
                <Link href="/docs/user-guide" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View User Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="card bg-slate-800 border border-slate-700 shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-white mb-4">Technical Guide</h2>
                <p className="text-slate-300 mb-6">
                  Detailed technical documentation for developers and system administrators who need to set up, configure, and maintain ClovaLink.
                </p>
                <Link href="/docs/technical-guide" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View Technical Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="card bg-slate-800 border border-slate-700 shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-white mb-4">API Documentation</h2>
                <p className="text-slate-300 mb-6">
                  Comprehensive API reference for developers who want to integrate with ClovaLink programmatically or build custom extensions.
                </p>
                <Link href="/docs/api" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View API Documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="card bg-slate-800 border border-slate-700 shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-white mb-4">General Documentation</h2>
                <p className="text-slate-300 mb-6">
                  Overview of ClovaLink's architecture, features, and capabilities. A good starting point for understanding the platform.
                </p>
                <Link href="/docs/general" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View General Documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-16 bg-blue-900 rounded-xl p-8 border border-blue-800">
              <h2 className="text-2xl font-bold text-white mb-4">GitHub Wiki Documentation</h2>
              <p className="text-blue-100 mb-6">
                For the most up-to-date and comprehensive documentation, visit our GitHub Wiki. The wiki contains detailed guides, tutorials, and reference materials that are regularly updated by our team.
              </p>
              <a 
                href="https://github.com/dotdon/cloverlink/wiki" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Wiki
              </a>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-slate-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a 
                href="mailto:support@clovalink.com" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 