import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      icon: '🎯',
      title: 'Choose Your Genre',
      desc: 'Select from fantasy, adventure, romance, mystery, or sci-fi. Each genre offers unique story templates that adapt to your preferences.',
      color: 'bg-blue-500'
    },
    {
      step: '2',
      icon: '👤',
      title: 'Personalize Characters',
      desc: 'Add your name, customize appearance traits, and even upload photos for a truly personalized experience that makes you the hero.',
      color: 'bg-purple-500'
    },
    {
      step: '3',
      icon: '🤖',
      title: 'AI Crafts Your Story',
      desc: 'Our advanced AI weaves your details into a unique narrative with plot twists, character development, and engaging dialogue.',
      color: 'bg-pink-500'
    },
    {
      step: '4',
      icon: '📖',
      title: 'Receive & Enjoy',
      desc: 'Get your story as a beautifully formatted e-book, immersive audiobook, or premium hardcover delivered to your door.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">How StoryVerse Hub Works</h1>
          <p className="text-xl text-white/90">From idea to finished story in minutes, not months</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className={`w-20 h-20 ${item.color} text-white rounded-2xl flex items-center justify-center text-3xl font-bold shrink-0 shadow-lg group-hover:scale-110 transition transform`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Step {item.step}</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-3 text-gray-900">{item.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl text-gray-600 mb-8">Join 10,000+ story creators who brought their imagination to life</p>
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block shadow-lg hover:shadow-xl">
            Start Creating Now →
          </Link>
          <p className="mt-4 text-gray-500 text-sm">Takes less than 5 minutes • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 StoryVerse Hub v1.2.0. Everyone deserves to be a hero in their own story.</p>
        </div>
      </footer>
    </main>
  );
}
