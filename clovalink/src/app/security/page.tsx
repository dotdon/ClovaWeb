import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Security | ClovaLink',
  description: 'Learn about the security features and practices that keep your data safe with ClovaLink.',
};

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Security at ClovaLink
              </h1>
              <p className="mt-5 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                Your data security is our top priority. Learn how we protect your information at every level.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  End-to-End Encryption
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  All files are encrypted before they leave your device and can only be decrypted by authorized recipients. 
                  This means that even we cannot access your data.
                </p>
                <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AES-256 encryption for all stored data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>TLS 1.3 for all data in transit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Client-side encryption for maximum privacy</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Access Controls
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  Granular permissions ensure that only authorized users can access your files, with detailed activity tracking for all actions.
                </p>
                <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Time-limited access links</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Password-protected sharing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Compliance & Certifications
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                ClovaLink is designed to help you meet regulatory requirements and industry standards.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">GDPR Compliant</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Our platform is fully compliant with the General Data Protection Regulation, ensuring your data is handled according to EU standards.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">HIPAA Ready</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    ClovaLink can be used as part of a HIPAA-compliant workflow for healthcare organizations handling protected health information.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">SOC 2 Aligned</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Our security practices align with SOC 2 principles for security, availability, processing integrity, confidentiality, and privacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Security Practices
              </h2>
              <div className="mt-8 space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Regular Security Audits</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Open Source Transparency</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Our open-source approach means that our code is publicly available for review, ensuring transparency and community-driven security improvements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Responsible Disclosure Program</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We welcome security researchers to responsibly disclose any vulnerabilities they discover, and we commit to addressing them promptly.
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