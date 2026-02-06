import Link from 'next/link';

export default function BlogPost4() {
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
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">Parenting</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Creating Magical Bedtime Routines with Personalized Books
        </h1>
        
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <span>Feb 3, 2026</span>
          <span>•</span>
          <span>4 min read</span>
        </div>

        <div className="prose prose-lg text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            Transform bedtime into an adventure your child looks forward to every night 
            with these tips for creating memorable reading rituals.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">The Power of Consistency</h2>
          <p className="mb-4">
            Children thrive on routine. When reading becomes a predictable, cherished part 
            of their evening, it creates a sense of security and anticipation. The key is 
            consistency—reading at the same time and in the same special place each night.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Creating the Perfect Environment</h2>
          <p className="mb-4">
            Set the stage for relaxation with soft lighting, comfortable seating, and minimal 
            distractions. Some families create a special "reading corner" with pillows and 
            blankets that makes the experience feel special and cozy.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Making It Interactive</h2>
          <p className="mb-4">
            With personalized stories, encourage your child to point out their name, make 
            predictions about what happens next, and discuss how they would handle the 
            situations the character faces. This engagement deepens their connection to the story.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Building Anticipation</h2>
          <p className="mb-4">
            Let your child choose which personalized story to read each night. This sense 
            of agency and control makes them more invested in the routine. You might even 
            create a special "story selection" ritual where they pick from a designated shelf.
          </p>

          <div className="bg-pink-50 p-6 rounded-xl mt-8">
            <h3 className="font-bold text-pink-900 mb-2">Start Your Bedtime Ritual</h3>
            <p className="text-pink-800 mb-4">
              Create a personalized story that becomes the centerpiece of your child's bedtime routine.
            </p>
            <Link href="/create" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-pink-700 transition">
              Create Bedtime Story →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
