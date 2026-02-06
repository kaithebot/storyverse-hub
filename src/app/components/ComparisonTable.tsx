import React from 'react';

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-4">Why StoryVerse Hub?</h2>
        <p className="text-xl text-gray-600 text-center mb-12">See how we compare to generic storybooks</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Feature</th>
                <th className="text-center py-4 px-4 font-bold text-indigo-600 bg-indigo-50 rounded-t-lg">StoryVerse Hub</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-500">Generic Books</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Personalized with your name', us: '✅ Yes', them: '❌ No' },
                { feature: 'Custom illustrations', us: '✅ Yes', them: '❌ No' },
                { feature: 'Multiple format options', us: '✅ 3 formats', them: '❌ 1 format' },
                { feature: 'AI-generated unique story', us: '✅ Yes', them: '❌ Mass-produced' },
                { feature: 'Character customization', us: '✅ Full control', them: '❌ None' },
                { feature: 'Delivery time', us: '✅ Instant - 8 days', them: '❌ 2-3 weeks' },
                { feature: 'Price', us: '✅ From €9.99', them: '❌ €15-30' },
                { feature: 'Money-back guarantee', us: '✅ 30 days', them: '❌ None' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center bg-indigo-50/50 font-semibold text-green-600">{row.us}</td>
                  <td className="py-4 px-4 text-center text-gray-400">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/create" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block shadow-lg"
          >
            Get Your Personalized Story →
          </a>
        </div>
      </div>
    </section>
  );
}
