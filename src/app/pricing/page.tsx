import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Digital',
      price: '€9.99',
      description: 'Perfect for digital readers',
      features: ['E-book (PDF & EPUB)', 'Personalized story', 'Instant delivery', 'Lifetime access'],
      cta: 'Choose Digital',
      popular: false
    },
    {
      name: 'Premium',
      price: '€24.99',
      description: 'Most popular choice',
      features: ['Everything in Digital', 'Audiobook version', 'Custom illustrations', 'Priority delivery (24h)', 'Bonus: Character art'],
      cta: 'Choose Premium',
      popular: true
    },
    {
      name: 'Collector',
      price: '€49.99',
      description: 'The complete experience',
      features: ['Everything in Premium', 'Hardcover printed book', 'Gift box & ribbon', 'Free worldwide shipping', 'Signed by the author'],
      cta: 'Choose Collector',
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/90">Choose the perfect format for your personalized story</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 shadow-lg relative ${plan.popular ? 'border-2 border-indigo-600 transform scale-105 z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="text-5xl font-bold text-indigo-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/create" 
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition ${
                    plan.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-serif text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Not satisfied with your story? Contact us within 30 days for a full refund. No questions asked.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does it take to create a story?', a: 'Most stories are generated within minutes. You\'ll receive an email notification when your story is ready.' },
              { q: 'Can I edit my story after it\'s created?', a: 'Yes! You can request up to 3 revisions for free to get your story exactly how you want it.' },
              { q: 'What formats are available?', a: 'Digital stories come as PDF and EPUB. Premium adds audiobook (MP3). Collector includes a printed hardcover book.' },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
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
          <p className="text-gray-400">&copy; 2026 StoryVerse Hub v1.3.0. Everyone deserves to be a hero in their own story.</p>
        </div>
      </footer>
    </main>
  );
}
