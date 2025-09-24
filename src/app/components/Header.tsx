'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SparklesText } from '@/components/ui/sparkles-text';
import { LineShadowText } from '@/components/ui/line-shadow-text';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-4 md:mx-8 lg:mx-12 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-5 lg:px-6" aria-label="Global">
        {/* Logo */}
        <div className="flex flex-1">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600">
            <h1 className="text-4xl font-extrabold">
              Zolu <LineShadowText>2.0</LineShadowText>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/about" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            About
          </Link>
          <Link href="/colors" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Colors
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-4 bg-white">
              <Link href="/about" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
                About
              </Link>
              <Link href="/colors" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
                Colors
              </Link>
              <Link href="/contact" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}