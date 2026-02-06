import Link from 'next/link';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-8">How StoryVerse Hub Works</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Creating your personalized story is simple</p>

        <div className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">1</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Choose Your Genre</h2>
              <p className="text-gray-600">Select from fantasy, adventure, romance, mystery, or sci-fi. Each genre offers unique story templates.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">2</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Personalize Characters</h2>
              <p className="text-gray-600">Add your name, customize appearance traits, and even upload photos for a truly personalized experience.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">3</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">AI Generates Your Story</h2>
              <p className="text-gray-600">Our AI crafts a unique narrative featuring you as the hero, with plot twists tailored to your choices.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">4</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Receive & Enjoy</h2>
              <p className="text-gray-600">Get your story as a beautifully formatted e-book, audiobook, or printed hardcover.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
            Start Creating →
          </Link>
        </div>
      </div>
    </main>
  );
}
