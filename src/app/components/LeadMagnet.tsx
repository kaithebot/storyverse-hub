'use client';

import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-2">🎉</div>
        <h3 className="font-bold text-green-800 mb-2">Check Your Email!</h3>
        <p className="text-green-700">Your free guide is on its way.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
      <h3 className="font-serif text-2xl font-bold mb-2">Get Our Free Guide</h3>
      <p className="text-white/90 mb-4">"5 Ways to Create Magical Stories Your Kids Will Love"</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Get Free Guide
        </button>
      </form>
      <p className="text-white/70 text-sm mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
