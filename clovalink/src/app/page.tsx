import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Simple, secure file sharing in three steps
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="card text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Upload your files</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Drag and drop files or use our file picker to upload your documents securely to ClovaLink.
                </p>
              </div>
              <div className="card text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Set permissions</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Configure access controls, expiration dates, and password protection for your shared files.
                </p>
              </div>
              <div className="card text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Share securely</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Generate secure links to share with recipients instead of sending files as email attachments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Trusted by industry leaders
              </p>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-400 lg:mx-auto">
                See how organizations across different sectors are leveraging ClovaLink to secure their sensitive data.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "ClovaLink has simplified our document sharing while maintaining security. The access controls are exactly what we needed for our team collaboration."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">SJ</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Sarah J.</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Financial Services Manager</p>
                  </div>
                </div>
              </div>
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "We needed a secure solution for patient data. ClovaLink's platform meets our compliance requirements and is easy to use."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">MC</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Michael C.</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Healthcare IT Specialist</p>
                  </div>
                </div>
              </div>
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "ClovaLink's interface is intuitive and the security features are solid. Our team was able to start using it right away with minimal training."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">AR</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Alex R.</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Technology Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

