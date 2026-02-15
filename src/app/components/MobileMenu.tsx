'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/stories', label: 'Stories' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/create', label: 'Create Your Story', highlight: true },
  ];

  // Close menu on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-all duration-200 relative z-[60] ${
          isOpen 
            ? 'text-indigo-600 bg-indigo-50' 
            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
        }`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        type="button"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      {isOpen && (
        <div 
          className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl z-[56] border border-gray-100 transition-all duration-200 overflow-hidden max-h-[calc(100vh-7rem)]"
        >
          {/* Menu Header */}
          <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
            <p className="text-sm font-medium text-indigo-700">Navigation</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3.5 rounded-xl font-medium transition-all duration-200 my-0.5 ${
                  link.highlight
                    ? 'bg-indigo-600 text-white text-center shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 active:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Press ESC to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
