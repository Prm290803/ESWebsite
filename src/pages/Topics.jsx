import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopicCard from '../Components/TopicCard';
import { categories, topics } from '../data/topics';

export default function Topics() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter(topic => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch = topic.topic.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-green-50">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Environmental <span className="text-green-600">Science Topics</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the multidisciplinary field of environmental science through our comprehensive topic collection.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full px-6 py-3 border border-green-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-12 bg-white text-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-4 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {filteredTopics.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopics.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic.topic}
              icon={topic.icon}
              description={topic.description}
              level={topic.level}
              duration={topic.duration}
              link={`/topics/${topic.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No topics found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="mt-20 bg-green-100 rounded-2xl p-8 md:p-12 border border-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive new topic alerts and environmental science updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-800"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}