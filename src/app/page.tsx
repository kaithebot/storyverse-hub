import Link from 'next/link';
import MobileMenu from './components/MobileMenu';
import StickyCTA from './components/StickyCTA';
import LeadMagnet from './components/LeadMagnet';
import PAS from './components/PAS';
import ComparisonTable from './components/ComparisonTable';
import ExitModal from './components/ExitModal';
import TrustBadges from './components/TrustBadges';

import CountdownTimer from './components/CountdownTimer';
import LiveChat from './components/LiveChat';
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Announcement Bar - URGENCY */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-3 px-4 font-semibold animate-pulse">
        🎉 Limited Time: 50% OFF your first story! Offer ends in 24 hours →
      </div>
        <div className="mt-2"><CountdownTimer /></div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">
              StoryVerse Hub
            </Link>
            
            {/* Mobile Menu Component */}
            <MobileMenu />

            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition">How It Works</Link>
              <Link href="/stories" className="text-gray-700 hover:text-indigo-600 font-medium transition">Stories</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition">About</Link>
              <Link href="/create" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
                Create Your Story
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-yellow-300">★★★★★</span>
                <span className="text-sm font-medium">Trusted by 10,000+ story creators</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
                Everyone Deserves to Be a Hero in Their Own Story
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Create personalized adventure stories where you or your loved ones are the main character. 
                AI-powered customization that brings your imagination to life.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>✨ Unique story in under 5 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>📚 Digital, audio & print formats</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>💯 30-day money-back guarantee</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/create" className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition transform">
                  Start Your Adventure →
                </Link>
                <Link href="/how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
                  See How It Works
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 text-sm text-white/80">
                <span>🔒 Secure Payment</span>
                <span>⚡ Instant Delivery</span>
                <span>❤️ Loved by 10k+</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition">
                <div className="text-6xl mb-4">📚✨</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Your Story Awaits</h3>
                <p className="text-white/80 mb-4">Become the hero of your own personalized adventure</p>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-lg">🦸</div>
                  <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-lg">👸</div>
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-lg">🧙</div>
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-lg">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Featured in and trusted by readers worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="font-bold text-xl">📖 Goodreads</span>
            <span className="font-bold text-xl">📚 BookBub</span>
            <span className="font-bold text-xl">🎯 Reedsy</span>
            <span className="font-bold text-xl">✨ Product Hunt</span>
          </div>
        </div>
      </section>

      <PAS />
      <ComparisonTable />
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold tracking-wide uppercase">Simple Process</span>
            <h2 className="font-serif text-4xl font-bold mt-2 mb-4">Create Your Story in 3 Easy Steps</h2>
            <p className="text-xl text-gray-600">From idea to finished story in minutes, not months</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: '🎯', title: 'Choose Your Adventure', desc: 'Select from fantasy, romance, mystery, or sci-fi. Our AI adapts to your choice.' },
              { step: '2', icon: '👤', title: 'Personalize Characters', desc: 'Add names, customize traits, upload photos. Make the characters truly yours.' },
              { step: '3', icon: '📖', title: 'Receive Your Story', desc: 'Get your custom story as e-book, audiobook, or beautiful hardcover.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition group">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
              Start Creating Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Loved by Story Creators</h2>
            <p className="text-xl text-white/90">See what our community is saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Mother of 2", text: "My kids were amazed to see themselves as heroes in their own book! The quality exceeded my expectations." },
              { name: "James T.", role: "Book Lover", text: "Finally, a way to create personalized stories for my nieces. They absolutely loved their custom adventures!" },
              { name: "Emily R.", role: "Grandmother", text: "Created a story for my granddaughter's birthday. Best gift ever! She reads it every night before bed." },
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-yellow-300 text-xl mb-4">★★★★★</div>
                <p className="text-lg mb-6 italic">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-white/70 text-sm">{review.role}</div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Stories Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Choose Your Format</h2>
          <p className="text-xl text-gray-600 mb-12">Digital, audio, or printed - your story, your way</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold mb-2">Digital</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">€9.99</div>
              <p className="text-gray-600 mb-6">PDF & EPUB formats</p>
              <Link href="/create" className="block w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Choose Digital</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-600 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="font-serif text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">€24.99</div>
              <p className="text-gray-600 mb-6">Digital + Audiobook</p>
              <Link href="/create" className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Choose Premium</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold mb-2">Collector</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">€49.99</div>
              <p className="text-gray-600 mb-6">Hardcover book + All digital</p>
              <Link href="/create" className="block w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Choose Collector</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
            <h2 className="font-serif text-4xl font-bold mb-4">Ready to Write Your Story?</h2>
            <p className="text-xl mb-8 text-white/90">Join 10,000+ story creators who brought their imagination to life</p>
            <Link href="/create" className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition transform inline-block">
              Create Your Story Now →
            </Link>
            <p className="mt-6 text-white/80 text-sm">🎉 50% OFF for a limited time • 30-day guarantee • Instant delivery</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <LeadMagnet />
        </div>
      </section>
      {/* Footer */}
      <TrustBadges />
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">StoryVerse Hub</h3>
              <p className="text-gray-400">Everyone deserves to be a hero in their own story.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/create" className="hover:text-white transition">Create Story</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 StoryVerse Hub v1.0.0. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ExitModal />
      <StickyCTA />
      <LiveChat />
    </main>
  );
}
