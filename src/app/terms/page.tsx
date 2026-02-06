import Link from 'next/link';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose text-gray-600">
          <p className="mb-4">Last updated: February 2026</p>
          <p className="mb-4">By using StoryVerse Hub, you agree to our terms. Stories are for personal use only.</p>
          <p className="mb-4">We offer a satisfaction guarantee on all personalized stories.</p>
        </div>
      </div>
    </main>
  );
}
