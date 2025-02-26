import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ApiDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                API Documentation
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Integrate with ClovaLink using our RESTful API
              </p>
              <p className="mt-4 text-blue-400">
                <a href="https://github.com/dotdon/ClovaLink/wiki/API-Documentation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View complete API Documentation on GitHub Wiki
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
                <h1 className="text-3xl font-bold text-white mb-6">ClovaLink API Documentation</h1>
                
                <p className="text-slate-300 mb-6">
                  This documentation provides details on how to interact with the ClovaLink API.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Authentication</h2>
                
                <p className="text-slate-300 mb-4">
                  All API requests (except for public endpoints) require authentication using a JWT token.
                </p>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Obtaining a Token</h3>
                
                <p className="text-slate-300 mb-4">
                  To obtain a token, send a POST request to <code className="bg-slate-700 px-2 py-1 rounded text-blue-300">/api/auth/signin</code> with the following JSON request body:
                </p>
                
                <div className="bg-slate-700 p-4 rounded-md mb-6">
                  <pre className="text-blue-300 whitespace-pre-wrap">
{`{
  "email": "user@example.com",
  "password": "your-password"
}`}
                  </pre>
                </div>
                
                <p className="text-slate-300 mb-4">
                  The response will include a token:
                </p>
                
                <div className="bg-slate-700 p-4 rounded-md mb-6">
                  <pre className="text-blue-300 whitespace-pre-wrap">
{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "User Name"
  }
}`}
                  </pre>
                </div>
                
                <p className="text-slate-300 mb-4">
                  Include this token in the Authorization header for all subsequent requests:
                </p>
                
                <div className="bg-slate-700 p-4 rounded-md mb-6">
                  <code className="text-blue-300">Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</code>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-300 mb-4">
                  This is a preview of the API Documentation. For the complete documentation, please visit our GitHub Wiki.
                </p>
                <a 
                  href="https://github.com/dotdon/ClovaLink/wiki/API-Documentation" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full API Documentation
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