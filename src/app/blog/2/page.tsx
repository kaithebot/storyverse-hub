import Link from 'next/link';

export default function BlogPost2() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/blog" className="text-gray-600 hover:text-indigo-600 font-medium">← Back to Blog</Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Psychology</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          The Science Behind Why Kids Love Seeing Themselves in Stories
        </h1>
        
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <span>Feb 5, 2026</span>
          <span>•</span>
          <span>4 min read</span>
        </div>

        <div className="prose prose-lg text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            Research shows that personalized content increases engagement by 300%. 
            Learn the psychology behind why children connect more with custom stories.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">The Mirror Neuron Effect</h2>
          <p className="mb-4">
            When children see themselves in a story, their brains activate mirror neurons—specialized 
            cells that fire both when we act and when we observe someone else acting. This creates 
            a powerful sense of immersion and identification with the narrative.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Personal Relevance = Better Retention</h2>
          <p className="mb-4">
            Studies in educational psychology have consistently shown that personalized learning 
            materials improve information retention by 40-60%. When content is relevant to a child's 
            own life, their brain encodes it as important and worth remembering.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">The Power of Agency</h2>
          <p className="mb-4">
            Children who see themselves as protagonists in stories develop a stronger sense of agency 
            and self-efficacy. They begin to see themselves as capable of adventure, problem-solving, 
            and heroism—qualities that translate into real-world confidence.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Emotional Connection</h2>
          <p className="mb-4">
            Personalized stories trigger stronger emotional responses because they activate the 
            child's self-concept. This emotional engagement is crucial for developing empathy, 
            emotional intelligence, and a lifelong love of reading.
          </p>

          <div className="bg-purple-50 p-6 rounded-xl mt-8">
            <h3 className="font-bold text-purple-900 mb-2">Create a Science-Backed Story</h3>
            <p className="text-purple-800 mb-4">
              Use the power of personalization to help your child develop confidence and a love of reading.
            </p>
            <Link href="/create" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-purple-700 transition">
              Start Creating →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
