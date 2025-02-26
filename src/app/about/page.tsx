import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'About | ClovaLink',
  description: 'Learn about ClovaLink, our mission, and the team behind the secure file sharing platform.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                About ClovaLink
              </h1>
              <p className="mt-5 max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                Secure file sharing for businesses, built with privacy and security at its core.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  At ClovaLink, we believe that secure file sharing should be accessible to all businesses, 
                  regardless of size or technical expertise. Our mission is to provide a robust, 
                  user-friendly platform that prioritizes data security without compromising on usability.
                </p>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  We're committed to transparency and trust, which is why ClovaLink is open-source. 
                  This allows our community to verify our security practices and contribute to making 
                  the platform even better.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-8">
                  <div className="text-center max-w-md mx-auto">
                    <h3 className="text-xl font-medium text-slate-900 dark:text-white">Donovan Bell</h3>
                    <p className="text-blue-600">Founder & CEO</p>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      Experienced software engineer with over 15 years of programming experience in building robust and secure applications.
                    </p>
                    <div className="mt-4">
                      <a href="https://github.com/dotdon/cloverlink" className="text-blue-600 hover:text-blue-500 inline-flex items-center" target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        github.com/dotdon/cloverlink
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center">
                Our Values
              </h2>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-slate-900 dark:text-white">Security First</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We prioritize security in every aspect of our platform, from end-to-end encryption to granular access controls.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-slate-900 dark:text-white">User-Centric</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We design our platform with users in mind, ensuring it's intuitive and accessible for teams of all sizes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-slate-900 dark:text-white">Transparency</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    As an open-source platform, we believe in being transparent about our code, security practices, and business model.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-blue-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Join Our Community
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  ClovaLink is an open-source project, and we welcome contributions from developers, 
                  security researchers, and users. Help us make secure file sharing better for everyone.
                </p>
                <div className="mt-8 flex justify-center space-x-6">
                  <a href="https://github.com/dotdon/cloverlink" className="text-blue-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/clovalink" className="text-blue-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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