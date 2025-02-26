import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function UserGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                User Guide
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Learn how to use ClovaLink effectively
              </p>
              <p className="mt-4 text-blue-400">
                <a href="https://github.com/dotdon/ClovaLink/wiki/User-Guide" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View complete User Guide on GitHub Wiki
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
                <h1 className="text-3xl font-bold text-white mb-6">ClovaLink User Guide</h1>
                
                <p className="text-slate-300 mb-6">
                  Welcome to ClovaLink, your secure document management and sharing platform. This guide will help you navigate and use the platform effectively.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-8">
                  <li><a href="#getting-started" className="text-blue-400 hover:underline">Getting Started</a></li>
                  <li><a href="#dashboard-overview" className="text-blue-400 hover:underline">Dashboard Overview</a></li>
                  <li><a href="#document-management" className="text-blue-400 hover:underline">Document Management</a></li>
                  <li><a href="#folder-organization" className="text-blue-400 hover:underline">Folder Organization</a></li>
                  <li><a href="#sharing-documents" className="text-blue-400 hover:underline">Sharing Documents</a></li>
                  <li><a href="#user-management" className="text-blue-400 hover:underline">User Management</a></li>
                  <li><a href="#activity-tracking" className="text-blue-400 hover:underline">Activity Tracking</a></li>
                  <li><a href="#account-settings" className="text-blue-400 hover:underline">Account Settings</a></li>
                  <li><a href="#troubleshooting" className="text-blue-400 hover:underline">Troubleshooting</a></li>
                </ul>
                
                <h2 id="getting-started" className="text-2xl font-semibold text-white mt-8 mb-4">Getting Started</h2>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Logging In</h3>
                <ol className="list-decimal pl-6 text-slate-300 space-y-2 mb-6">
                  <li>Open your web browser and navigate to your ClovaLink instance URL</li>
                  <li>Enter your email address and password</li>
                  <li>Click "Sign In"</li>
                </ol>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">First-Time Setup</h3>
                <p className="text-slate-300 mb-4">If this is your first time logging in:</p>
                <ol className="list-decimal pl-6 text-slate-300 space-y-2 mb-6">
                  <li>Change your temporary password</li>
                  <li>Review your profile information</li>
                </ol>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-300 mb-4">
                  This is a preview of the User Guide. For the complete documentation, please visit our GitHub Wiki.
                </p>
                <a 
                  href="https://github.com/dotdon/ClovaLink/wiki/User-Guide" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full User Guide
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