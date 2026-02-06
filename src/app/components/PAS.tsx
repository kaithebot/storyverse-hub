'use client';

import Link from 'next/link';

export default function PAS() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">The Problem with Generic Stories</h2>
          <p className="text-xl text-gray-600">Mass-produced books don't create lasting memories</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-400">
            <div className="text-4xl mb-4">😔</div>
            <h3 className="font-serif text-xl font-bold mb-3">The Problem</h3>
            <p className="text-gray-600">
              Generic stories don't capture your child's imagination. They see characters that look nothing like them, 
              in worlds they can't relate to.
            </p>
          </div>

          {/* Agitation */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400">
            <div className="text-4xl mb-4">😤</div>
            <h3 className="font-serif text-xl font-bold mb-3">The Frustration</h3>
            <p className="text-gray-600">
              Your child loses interest after one reading. The book sits on the shelf, forgotten. 
              You wasted money on something that doesn't matter to them.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-400">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-serif text-xl font-bold mb-3">The Solution</h3>
            <p className="text-gray-600">
              StoryVerse Hub creates personalized adventures where YOUR child is the hero. 
              They'll read it again and again, treasure it for years.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/create" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block shadow-lg"
          >
            Create Your Child's Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
