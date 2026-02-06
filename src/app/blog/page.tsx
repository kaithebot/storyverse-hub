import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "5 Benefits of Personalized Stories for Child Development",
    excerpt: "Discover how personalized books can improve reading comprehension, boost confidence, and create lasting memories for your children.",
    date: "Feb 6, 2026",
    readTime: "5 min read",
    category: "Education"
  },
  {
    id: 2,
    title: "The Science Behind Why Kids Love Seeing Themselves in Stories",
    excerpt: "Research shows that personalized content increases engagement by 300%. Learn the psychology behind why children connect more with custom stories.",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    category: "Psychology"
  },
  {
    id: 3,
    title: "How to Choose the Perfect Story Genre for Your Child",
    excerpt: "From fantasy adventures to educational tales, find out which story genre will captivate your child's imagination and support their growth.",
    date: "Feb 4, 2026",
    readTime: "6 min read",
    category: "Guide"
  },
  {
    id: 4,
    title: "Creating Magical Bedtime Routines with Personalized Books",
    excerpt: "Transform bedtime into an adventure your child looks forward to every night with these tips for creating memorable reading rituals.",
    date: "Feb 3, 2026",
    readTime: "4 min read",
    category: "Parenting"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Stories, tips, and insights about personalized storytelling</p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold mb-3 hover:text-indigo-600 transition">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-indigo-600 font-semibold hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
            Create Your Own Story →
          </Link>
        </div>
      </div>
    </main>
  );
}
