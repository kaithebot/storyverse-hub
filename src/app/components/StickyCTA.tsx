'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:hidden">
      <Link 
        href="/create" 
        className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
      >
        Create Your Story - 50% OFF →
      </Link>
    </div>
  );
}
