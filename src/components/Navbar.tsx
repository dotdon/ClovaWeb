'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.svg" 
                  alt="ClovaLink Logo" 
                  width={3000} 
                  height={3000} 
                  className="h-36 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
                Features
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
                Pricing
              </Link>
              <Link href="/docs" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
                Documentation
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700">
              Features
            </Link>
            <Link href="/pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700">
              Pricing
            </Link>
            <Link href="/docs" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700">
              Documentation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 