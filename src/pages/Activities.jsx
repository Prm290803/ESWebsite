import { Link } from 'react-router-dom';

const Activities = () => {
  const activities = [
    {
      title: "Carbon Footprint Calculator",
      description: "Calculate your personal carbon emissions and learn how to reduce them.",
      icon: "👣",
      path: "/carbon-calculator",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Recycling Challenge",
      description: "Test your knowledge about what can and can't be recycled.",
      icon: "♻️",
      path: "/recycling-game",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Ecosystem Simulator",
      description: "See how different factors affect a virtual ecosystem.",
      icon: "🌳",
      path: "/ecosystem-simulator",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Environmental Quiz",
      description: "Test your knowledge about environmental science topics.",
      icon: "📝",
      path: "/quiz",
      color: "bg-violet-100 text-violet-800"
    },
    {
      title: "Sustainability Planner",
      description: "Create a personalized plan to live more sustainably.",
      icon: "📅",
      path: "/sustainability-planner",
      color: "bg-fuchsia-100 text-fuchsia-800"
    },
    {
      title: "Water Conservation Tool",
      description: "Track your water usage and find ways to conserve.",
      icon: "💧",
      path: "/water-conservation",
      color: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          <span className="text-indigo-600">Interactive</span> Environmental Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Engage with our interactive tools to deepen your understanding of environmental science and sustainability.
        </p>
      </div>

      {/* Featured Carbon Calculator Card */}
      <div className="mb-12">
        <Link 
          to="/carbon-calculator"
          className="block bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 hover:shadow-md transition hover:border-indigo-300"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mb-4 md:mb-0 md:mr-6">👣</div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-2">Featured Activity: Carbon Calculator</h2>
              <p className="text-gray-700 mb-4">
                Discover your environmental impact and get personalized recommendations to reduce your carbon footprint.
              </p>
              <div className="text-indigo-600 font-medium">Start Calculating →</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Activities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <Link 
            to={activity.path} 
            key={index}
            className={`group p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer h-full flex flex-col border border-gray-100 hover:border-${activity.color.split('-')[1]}-300`}
          >
            <div className={`${activity.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4`}>
              {activity.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
              {activity.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">{activity.description}</p>
            <div className="text-indigo-600 font-medium self-start flex items-center group-hover:underline">
              Try it now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activities;