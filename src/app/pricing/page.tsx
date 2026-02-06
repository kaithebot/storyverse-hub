import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Simple Pricing</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Choose your story format</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="font-serif text-2xl font-bold mb-2">Digital</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€9.99</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>✓ E-book (PDF & EPUB)</li>
              <li>✓ Personalization</li>
              <li>✓ Instant delivery</li>
            </ul>
            <Link href="/create" className="block w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Choose Digital</Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-600 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h3 className="font-serif text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€24.99</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>✓ Everything in Digital</li>
              <li>✓ Audiobook version</li>
              <li>✓ Custom illustrations</li>
              <li>✓ 24h delivery</li>
            </ul>
            <Link href="/create" className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Choose Premium</Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="font-serif text-2xl font-bold mb-2">Collector</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€49.99</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>✓ Everything in Premium</li>
              <li>✓ Hardcover printed book</li>
              <li>✓ Gift box included</li>
              <li>✓ Free worldwide shipping</li>
            </ul>
            <Link href="/create" className="block w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Choose Collector</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
