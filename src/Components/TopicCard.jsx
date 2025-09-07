import { Link } from 'react-router-dom';

export default function TopicCard({ topic, icon, description, level, duration, link }) {
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800'
  };

  return (
    <Link 
      to={link}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100 hover:border-green-200 h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start">
          <div className="text-4xl mr-4 mt-1 group-hover:text-green-600 transition">{icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition">{topic}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColors[level] || 'bg-gray-100 text-gray-800'}`}>
            {level}
          </span>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
        </div>
      </div>
    </Link>
  );
}