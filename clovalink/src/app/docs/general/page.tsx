import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function GeneralDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                General Documentation
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Overview of ClovaLink's architecture and features
              </p>
              <p className="mt-4 text-blue-400">
                <a href="https://github.com/dotdon/ClovaLink/wiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View complete Documentation on GitHub Wiki
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
                <h1 className="text-3xl font-bold text-white mb-6">ClovaLink Documentation</h1>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-8">
                  <li><a href="#introduction" className="text-blue-400 hover:underline">Introduction</a></li>
                  <li><a href="#system-architecture" className="text-blue-400 hover:underline">System Architecture</a></li>
                  <li><a href="#key-features" className="text-blue-400 hover:underline">Key Features</a></li>
                  <li><a href="#security" className="text-blue-400 hover:underline">Security</a></li>
                  <li><a href="#deployment" className="text-blue-400 hover:underline">Deployment</a></li>
                  <li><a href="#maintenance" className="text-blue-400 hover:underline">Maintenance</a></li>
                  <li><a href="#troubleshooting" className="text-blue-400 hover:underline">Troubleshooting</a></li>
                </ul>
                
                <h2 id="introduction" className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
                <p className="text-slate-300 mb-6">
                  ClovaLink is a secure document management and sharing platform designed for organizations that need to maintain strict control over sensitive documents while enabling collaboration.
                </p>
                
                <h2 id="system-architecture" className="text-2xl font-semibold text-white mt-8 mb-4">System Architecture</h2>
                <p className="text-slate-300 mb-4">
                  ClovaLink consists of the following components:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
                  <li><strong className="text-white">Frontend</strong>: Next.js React application</li>
                  <li><strong className="text-white">Backend API</strong>: Node.js Express server</li>
                  <li><strong className="text-white">Authentication Service</strong>: Handles user authentication and authorization</li>
                  <li><strong className="text-white">Storage Service</strong>: Manages document storage and retrieval</li>
                  <li><strong className="text-white">Search Service</strong>: Provides document indexing and search capabilities</li>
                  <li><strong className="text-white">Notification Service</strong>: Handles email and in-app notifications</li>
                </ul>
                
                <h2 id="key-features" className="text-2xl font-semibold text-white mt-8 mb-4">Key Features</h2>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
                  <li><strong className="text-white">Secure Document Management</strong>: Upload, organize, and manage documents with end-to-end encryption</li>
                  <li><strong className="text-white">Role-Based Access Control</strong>: Define granular permissions for users and groups</li>
                  <li><strong className="text-white">Temporary Sharing Links</strong>: Share documents securely with expiring links</li>
                  <li><strong className="text-white">Version Control</strong>: Track document changes and maintain version history</li>
                  <li><strong className="text-white">Audit Logging</strong>: Comprehensive logging of all document access and modifications</li>
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-300 mb-4">
                  This is a preview of the General Documentation. For the complete documentation, please visit our GitHub Wiki.
                </p>
                <a 
                  href="https://github.com/dotdon/ClovaLink/wiki" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Documentation
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