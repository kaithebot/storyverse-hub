import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold mb-8">About StoryVerse Hub</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6 text-xl">
            StoryVerse Hub was founded on a simple belief: <strong>Everyone deserves to be a hero in their own story.</strong>
          </p>
          
          <p className="mb-6">
            We combine cutting-edge AI technology with timeless storytelling to create personalized adventures 
            where you or your loved ones become the main character. Each story is uniquely crafted based on 
            your choices, preferences, and imagination.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To make personalized storytelling accessible to everyone. Whether you're creating a magical 
            adventure for your child, a romantic tale for your partner, or an epic journey for yourself, 
            we believe stories have the power to inspire, connect, and transform.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">Connected to Livre Magique</h2>
          <p className="mb-6">
            StoryVerse Hub works alongside our sister project Livre Magique to bring personalized 
            storytelling to French-speaking audiences worldwide. Together, we're building the future 
            of interactive, personalized literature.
          </p>
        </div>
      </div>
    </main>
  );
}
