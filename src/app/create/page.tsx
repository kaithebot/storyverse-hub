'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Create() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-center mb-8">Create Your Story</h1>

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-12 h-2 rounded-full ${i <= step ? 'bg-indigo-600' : 'bg-gray-200'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold mb-6">Step 1: Choose Genre</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Fantasy', 'Adventure', 'Romance', 'Mystery', 'Sci-Fi', 'Historical'].map((genre) => (
                <button key={genre} className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition text-center font-semibold">
                  {genre}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold mb-6">Step 2: Main Character</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Character Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Your name or hero name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Character Traits</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Brave, curious, kind..." />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setStep(1)} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">← Back</button>
              <button onClick={() => setStep(3)} className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Continue →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="font-serif text-2xl font-bold mb-4">Your Story Is Being Created!</h2>
            <p className="text-gray-600 mb-6">Our AI is crafting your personalized adventure. You'll receive it within 24 hours.</p>
            <Link href="/" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block">
              Return Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
