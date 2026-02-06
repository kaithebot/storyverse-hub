import Link from 'next/link';

export default function BlogPost3() {
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
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Guide</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          How to Choose the Perfect Story Genre for Your Child
        </h1>
        
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <span>Feb 4, 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <div className="prose prose-lg text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            From fantasy adventures to educational tales, find out which story genre 
            will captivate your child's imagination and support their growth.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Understanding Your Child's Interests</h2>
          <p className="mb-4">
            Every child is unique, and their story preferences often reflect their personality, 
            current developmental stage, and natural curiosities. Pay attention to what captures 
            their attention in daily life—dinosaurs, space, animals, or magic?
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Genre Guide by Age</h2>
          
          <h3 className="font-bold text-xl mt-6 mb-3">Ages 3-5: Simple Adventures</h3>
          <p className="mb-4">
            Young children benefit from straightforward narratives with clear heroes and happy endings. 
            Animal stories and simple adventures work best for this age group.
          </p>

          <h3 className="font-bold text-xl mt-6 mb-3">Ages 6-8: Fantasy and Exploration</h3>
          <p className="mb-4">
            As imagination develops, children this age love fantasy worlds, magical creatures, 
            and stories that spark their sense of wonder and possibility.
          </p>

          <h3 className="font-bold text-xl mt-6 mb-3">Ages 9-12: Complex Narratives</h3>
          <p className="mb-4">
            Older children can handle more sophisticated plots, mysteries, and stories that 
            introduce moral complexity and real-world challenges.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Matching Genre to Goals</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Build courage:</strong> Adventure and hero stories</li>
            <li><strong>Encourage learning:</strong> Historical or science-based tales</li>
            <li><strong>Foster empathy:</strong> Stories about friendship and kindness</li>
            <li><strong>Spark creativity:</strong> Fantasy and imaginative fiction</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-xl mt-8">
            <h3 className="font-bold text-green-900 mb-2">Find the Perfect Genre</h3>
            <p className="text-green-800 mb-4">
              Create a personalized story in any genre that matches your child's interests.
            </p>
            <Link href="/create" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-green-700 transition">
              Choose Your Genre →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
