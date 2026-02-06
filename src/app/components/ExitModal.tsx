'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExitModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem('exitModalShown')) {
        setShow(true);
        localStorage.setItem('exitModalShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button 
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="text-5xl mb-4">🎁</div>
          <h3 className="font-serif text-2xl font-bold mb-2">Wait! Don't Leave Empty Handed</h3>
          <p className="text-gray-600 mb-6">
            Get 10% off your first story + our free guide "5 Ways to Create Magical Stories"
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setShow(false);
            }}
            className="space-y-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Get 10% Off
            </button>
          </form>
          
          <Link 
            href="/create" 
            className="block mt-4 text-indigo-600 font-semibold hover:underline"
            onClick={() => setShow(false)}
          >
            No thanks, take me to create my story →
          </Link>
        </div>
      </div>
    </div>
  );
}
