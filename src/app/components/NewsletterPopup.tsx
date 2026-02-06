'use client';

import { useState, useEffect } from 'react';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletterShown')) {
        setShow(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('newsletterShown', 'true');
    setShow(false);
  };

  const handleClose = () => {
    localStorage.setItem('newsletterShown', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
        <h3 className="font-bold text-lg mb-2">📚 Story Tips</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get weekly tips on creating magical stories for your kids!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-3 py-2 border rounded-lg text-sm"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
