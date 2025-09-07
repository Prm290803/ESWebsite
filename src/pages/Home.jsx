import TopicCard from '../Components/TopicCard';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/Image1.jpg';
import { topics } from '../data/topics';

export default function Home() {
  
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        aria-labelledby="hero-heading"
        className="relative h-screen min-h-[32rem] flex items-center justify-center bg-green-700 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={img1}
            alt="Green landscape with mountains"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Environmental <span className="text-green-300">Science</span> Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Comprehensive resources for understanding Earth's complex systems
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
              aria-label="Explore environmental science"
              onClick={() => navigate('/topics')}
            >
              Explore Topics
            </button>
            
          </div>
        </div>
        
        
      </section>

      {/* Interdisciplinary Approach */}
      <section 
        aria-labelledby="interdisciplinary-approach"
        className="py-20 px-4 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Our Framework
          </span>
          <h2 id="interdisciplinary-approach" className="text-3xl md:text-4xl font-bold text-green-800">
            An <span className="text-green-600">Integrated</span> Approach
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Environmental science combines physical, biological, and social sciences to understand complex systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Modern environmental challenges require solutions that bridge traditional academic disciplines. 
              Our resources integrate ecology, chemistry, geology, sociology, and policy studies.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              We emphasize <strong className="text-green-700">systems thinking</strong> and <strong className="text-green-700">evidence-based solutions</strong> to address the interconnected nature of environmental issues.
            </p>
            <div className="pt-4">
              <button 
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition group"
                aria-label="Learn about our methodology"
              >
                Our Methodology
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-green-100 p-1 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
                alt="Network visualization showing interconnected systems" 
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Systems approach</p>
                  <p className="text-xs text-gray-500">Interconnected solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section 
        aria-labelledby="explore-topics"
        className="py-10 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Core Disciplines
            </span>
            <h2 id="explore-topics" className="text-3xl md:text-4xl font-bold text-green-800">
              Key <span className="text-green-600">Environmental</span> Themes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Explore our multidisciplinary resources on critical environmental topics
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.slice(0, 3).map((topic) =>  (
              <TopicCard
                key={topic.id}
                topic={topic.topic}
                icon={topic.icon}
                description={topic.description}
                link={topic.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition group"
              aria-label="View all environmental topics"
              onClick={() => navigate('/topics')}
            >
              View all topics
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        aria-labelledby="take-action"
        className="py-20 px-4 bg-green-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Get Involved
          </span>
          <h2 id="take-action" className="text-3xl md:text-4xl font-bold mb-6">
            Apply Your <span className="text-green-300">Knowledge</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform understanding into action with our community of researchers, educators, and practitioners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              aria-label="Join our community"
            >
              Join Community
            </button>
            <button 
              className="border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              aria-label="Explore research opportunities"
            >
              Research Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12K+", label: "Scientific Resources" },
              { value: "300+", label: "Academic Partners" },
              { value: "1.5M+", label: "Annual Learners" },
              { value: "75+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}