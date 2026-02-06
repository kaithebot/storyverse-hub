import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About StoryVerse Hub</h1>
          <p className="text-2xl text-white/90 font-serif italic">Everyone deserves to be a hero in their own story</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6 text-xl leading-relaxed">
              StoryVerse Hub was founded on a simple belief: <strong className="text-indigo-600">Everyone deserves to be a hero in their own story.</strong>
            </p>
            
            <p className="mb-6 leading-relaxed">
              We combine cutting-edge AI technology with timeless storytelling to create personalized adventures 
              where you or your loved ones become the main character. Each story is uniquely crafted based on 
              your choices, preferences, and imagination.
            </p>
            
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
            <p className="mb-6 leading-relaxed">
              To make personalized storytelling accessible to everyone. Whether you are creating a magical 
              adventure for your child, a romantic tale for your partner, or an epic journey for yourself, 
              we believe stories have the power to inspire, connect, and transform.
            </p>
            
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-4">Connected to Livre Magique</h2>
            <p className="mb-6 leading-relaxed">
              StoryVerse Hub works alongside our sister project <strong>Livre Magique</strong> to bring personalized 
              storytelling to French-speaking audiences worldwide. Together, we are building the future 
              of interactive, personalized literature.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Stories Created</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block shadow-lg">
            Start Creating Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 StoryVerse Hub v1.5.0. Everyone deserves to be a hero in their own story.</p>
        </div>
      </footer>
    </main>
  );
}
