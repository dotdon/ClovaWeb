import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="ClovaLink Logo" 
                width={3000} 
                height={3000} 
                className="h-32 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Secure file sharing for businesses. Open source and free.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/features" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <a href="https://www.sbchr.com/book-a-service" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/security" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/docs" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <a href="https://github.com/dotdon/cloverlink" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                  GitHub Wiki
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} ClovaLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 