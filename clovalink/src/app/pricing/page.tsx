import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Pricing | ClovaLink',
  description: 'ClovaLink pricing plans and consultation options for businesses of all sizes.',
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Pricing
              </h1>
              <p className="mt-5 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                From open source self-hosting to fully managed enterprise solutions
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Open Source</h3>
                  <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">$0</span>
                    <span className="ml-1 text-xl font-medium text-slate-500 dark:text-slate-400 self-end">/month</span>
                  </div>
                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-center">
                    Self-hosted deployment for developers
                  </p>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Full source code access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Self-hosted deployment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Community support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">MIT License</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="https://github.com/dotdon/cloverlink" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-blue-500 dark:border-blue-600 transform scale-105 z-10">
                <div className="bg-blue-500 dark:bg-blue-600 px-6 py-2">
                  <p className="text-white text-center font-medium">Most Popular</p>
                </div>
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Business</h3>
                  <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">Custom</span>
                  </div>
                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-center">
                    Tailored for your organization's needs
                  </p>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Unlimited users</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Custom storage limits</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Advanced security features</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Custom integration</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="https://www.sbchr.com/book-a-service" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center" target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                    </a>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Enterprise</h3>
                  <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">Custom</span>
                  </div>
                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-center">
                    For large organizations with complex needs
                  </p>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Everything in Business</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Dedicated support team</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">Custom SLA</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">On-premise deployment option</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="https://www.sbchr.com/book-a-service" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center" target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Need a custom solution?</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Our team can help you implement ClovaLink for your specific business needs. 
                Book a consultation to discuss your requirements and get a tailored solution.
              </p>
              <div className="mt-8">
                <a 
                  href="https://www.sbchr.com/book-a-service" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Frequently Asked Questions</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Can I try ClovaLink before purchasing?</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Yes, you can use our open source version to evaluate ClovaLink's features and functionality by self-hosting it. You can also request a demo of our Business or Enterprise plans.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">How is pricing determined for Business and Enterprise plans?</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Pricing is based on the number of users, storage requirements, and additional features needed. Contact us for a custom quote.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Can I upgrade from the Open Source version?</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Yes, if you've been using the self-hosted open source version and need additional support or features, you can upgrade to a Business or Enterprise plan at any time. Our team can help with the migration process.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Do you offer discounts for non-profits or educational institutions?</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Yes, we offer special pricing for non-profits, educational institutions, and open-source projects. Contact us for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 