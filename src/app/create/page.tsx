'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Create() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    genre: '',
    characterName: '',
  });

  const genres = [
    { name: 'Fantasy', icon: '🐉', desc: 'Magical worlds and epic quests' },
    { name: 'Adventure', icon: '🗺️', desc: 'Exciting journeys and discoveries' },
    { name: 'Romance', icon: '💕', desc: 'Love stories and relationships' },
    { name: 'Mystery', icon: '🔍', desc: 'Puzzles and investigations' },
    { name: 'Sci-Fi', icon: '🚀', desc: 'Future worlds and technology' },
    { name: 'Historical', icon: '⚔️', desc: 'Past eras and epic tales' },
  ];

  const progress = (step / 3) * 100;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-center mb-4">Create Your Story</h1>
        <p className="text-gray-600 text-center mb-8">You are just 3 steps away from your personalized adventure</p>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {step} of 3</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step 1: Genre Selection */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold mb-2">Choose Your Genre</h2>
            <p className="text-gray-600 mb-6">Select the type of story you want to create</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {genres.map((genre) => (
                <button
                  key={genre.name}
                  onClick={() => setFormData({ ...formData, genre: genre.name })}
                  className={`p-6 border-2 rounded-xl text-center transition ${
                    formData.genre === genre.name 
                      ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600' 
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{genre.icon}</div>
                  <div className="font-bold text-gray-900">{genre.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{genre.desc}</div>
                </button>
              ))}
            </div>

            <button 
              onClick={() => formData.genre && setStep(2)}
              disabled={!formData.genre}
              className="w-full mt-8 bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Character Details */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl font-bold mb-2">Create Your Hero</h2>
            <p className="text-gray-600 mb-6">Tell us about the main character</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Character Name</label>
                <input 
                  type="text" 
                  value={formData.characterName}
                  onChange={(e) => setFormData({ ...formData, characterName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="e.g., Alex, Jordan, or your own name"
                />
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-indigo-800">
                  <span className="font-semibold">💡 Tip:</span> The more details you provide, the more personalized your story will be!
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setStep(1)} 
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
              >
                ← Back
              </button>
              <button 
                onClick={() => formData.characterName && setStep(3)}
                disabled={!formData.characterName}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="font-serif text-3xl font-bold mb-4">Your Story is Being Created!</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our AI is weaving <span className="font-semibold text-indigo-600">{formData.characterName}</span> into an epic {formData.genre.toLowerCase()} adventure.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>AI crafts your unique story (2-5 minutes)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Preview sent to your email</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Download or order your book!</span>
                </li>
              </ul>
            </div>

            <Link href="/" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
