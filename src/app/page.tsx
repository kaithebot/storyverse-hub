import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">
              StoryVerse Hub
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium">How It Works</Link>
              <Link href="/stories" className="text-gray-700 hover:text-indigo-600 font-medium">Stories</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
              <Link href="/create" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700">
                Create Your Story
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
                Everyone Deserves to Be a Hero in Their Own Story
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Create personalized adventure stories where you or your loved ones are the main character. 
                AI-powered customization that brings your imagination to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/create" className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition">
                  Start Your Adventure
                </Link>
                <Link href="/how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-6xl mb-4">📚✨</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Your Story Awaits</h3>
                <p className="text-white/80">Become the hero of your own personalized adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">How StoryVerse Hub Works</h2>
            <p className="text-xl text-gray-600">Create your personalized story in minutes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-serif text-xl font-bold mb-2">1. Choose Your Adventure</h3>
              <p className="text-gray-600">Select from fantasy, adventure, mystery, or romance story templates</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="font-serif text-xl font-bold mb-2">2. Personalize Characters</h3>
              <p className="text-gray-600">Add names, traits, and photos to make characters truly yours</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-serif text-xl font-bold mb-2">3. Receive Your Story</h3>
              <p className="text-gray-600">Get your custom book delivered or download the digital version</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Become the Hero?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of readers who have discovered the magic of personalized storytelling.
          </p>
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
            Create Your Story Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">StoryVerse Hub</h3>
              <p className="text-gray-400">Everyone deserves to be a hero in their own story.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/stories" className="hover:text-white">Stories</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2026 StoryVerse Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
