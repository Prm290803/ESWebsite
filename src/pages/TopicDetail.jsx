import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics, categories } from '../data/topics';

const TopicDetail = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [progress, setProgress] = useState({
    content: 60,
    quiz: 75,
    time: 53
  });

  useEffect(() => {
    // Find the topic based on the ID from URL params
    const foundTopic = topics.find(t => t.id === id);
    setTopic(foundTopic);
    
    // Animate progress bars on component mount
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }, [id]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get category name for display
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'General';
  };

  // Generate case study content based on topic
  const getCaseStudyContent = () => {
    if (!topic) return { scenario: '', outcomes: [] };
    
    switch(topic.id) {
      case 'ecology-biosphere':
        return {
          scenario: "The restoration of the Loess Plateau in China demonstrates principles of ecology and biosphere management.",
          outcomes: [
            "Increased vegetation cover from 17% to 34%",
            "Reduced soil erosion by over 100 million tons annually",
            "Improved livelihoods for local farmers through sustainable practices"
          ]
        };
      case 'atmosphere-layers':
        return {
          scenario: "The Montreal Protocol's impact on ozone layer recovery shows how understanding atmospheric structure guides policy.",
          outcomes: [
            "Phased out 99% of ozone-depleting substances worldwide",
            "Prevented an estimated 2 million skin cancer cases annually",
            "Ozone layer showing signs of recovery since 2000"
          ]
        };
      case 'air-pollution':
        return {
          scenario: "London's transformation from the 'Great Smog' of 1952 to a leader in clean air initiatives.",
          outcomes: [
            "Implementation of the Clean Air Act after 4,000 deaths from smog",
            "Ultra Low Emission Zone reduced toxic air pollution by 35%",
            "Now ranked among European cities with improving air quality"
          ]
        };
      case 'human-environment':
        return {
          scenario: "Costa Rica's pioneering payment for ecosystem services program.",
          outcomes: [
            "Increased forest cover from 21% in 1987 to over 50% today",
            "Protected biodiversity while supporting rural livelihoods",
            "Generated $500 million in hydroelectric benefits from watershed protection"
          ]
        };
      case 'pollution-causes':
        return {
          scenario: "The Chesapeake Bay Program's comprehensive approach to reducing pollution from multiple sources.",
          outcomes: [
            "Reduced nitrogen pollution by 28% since 1985",
            "Implemented agricultural best management practices on 1.7 million acres",
            "Witnessed the return of submerged aquatic vegetation critical to ecosystem health"
          ]
        };
      case 'tech-environment':
        return {
          scenario: "Singapore's use of technology to become a model 'Garden City' despite limited space.",
          outcomes: [
            "Vertical gardens and green buildings combat urban heat island effect",
            "Advanced water recycling technology (NEWater) meets 40% of water needs",
            "AI-powered energy management reduces carbon footprint"
          ]
        };
      case 'soil-degradation':
        return {
          scenario: "The Great Green Wall initiative across Africa's Sahel region to combat desertification.",
          outcomes: [
            "Restored 36 million hectares of degraded land across 11 countries",
            "Created 350,000 jobs in rural areas through sustainable land management",
            "Improved food security for 20 million people"
          ]
        };
      case 'global-issues':
        return {
          scenario: "International cooperation through the Paris Agreement to address climate change.",
          outcomes: [
            "194 countries committed to limiting global warming to well below 2°C",
            "Accelerated transition to renewable energy worldwide",
            "Created framework for increasing ambition over time"
          ]
        };
      default:
        return {
          scenario: "A major environmental initiative demonstrating these principles in action.",
          outcomes: [
            "Measurable environmental improvements",
            "Community engagement benefits",
            "Lessons learned for future projects"
          ]
        };
    }
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Topic Not Found</h2>
          <Link 
            to="/topics" 
            className="text-green-600 hover:underline inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all topics
          </Link>
        </div>
      </div>
    );
  }

  const caseStudy = getCaseStudyContent();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/topics" className="hover:text-emerald-700 transition-colors">Topics</Link>
          <span className="mx-2">/</span>
          <span className="text-emerald-700">{topic.topic}</span>
        </div>

        {/* Topic Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 fade-in">
          <div className="relative">
            <img 
              src={topic.image} 
              alt={topic.topic}
              className="w-full h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-2">{topic.topic}</h1>
                <p className="text-xl">{topic.description}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">
                  {topic.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{topic.topic}</h2>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  topic.level === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                  topic.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {topic.level}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  {getCategoryName(topic.category)}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <i className="far fa-clock mr-2"></i>
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <i className="far fa-calendar mr-2"></i>
                <span>Updated: June 15, 2023</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {topic.detailedDescription}
            </p>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8 sticky-nav fade-in">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Topic Navigation</h3>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => scrollToSection('key-concepts')} className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition-colors">
              Key Concepts
            </button>
            <button onClick={() => scrollToSection('case-study')} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
              Case Study
            </button>
            <button onClick={() => scrollToSection('resources')} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors">
              Resources
            </button>
            <button onClick={() => scrollToSection('actions')} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors">
              Take Action
            </button>
            <button onClick={() => scrollToSection('related')} className="px-4 py-2 bg-rose-100 text-rose-800 rounded-lg hover:bg-rose-200 transition-colors">
              Related Topics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Concepts Section */}
            <section id="key-concepts" className="bg-white rounded-xl shadow-md p-6 fade-in">
              <div className="flex items-center mb-6">
                <div className="section-icon mr-4">
                  <i className="fas fa-key"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Key Concepts</h2>
              </div>
              
              <div className="space-y-4">
                {topic.keyPoints.map((point, index) => (
                  <div key={index} className="key-point p-4 bg-gray-50 rounded-lg flex items-start">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study Section */}
            <section id="case-study" className="bg-white rounded-xl shadow-md p-6 fade-in">
              <div className="flex items-center mb-6">
                <div className="section-icon mr-4" style={{backgroundColor: '#dbeafe', color: '#1d4ed8'}}>
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Environmental Case Study</h2>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-800 text-lg mb-2">Real-World Scenario</h3>
                <p className="text-gray-700 mb-4">
                  {caseStudy.scenario}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Before</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Environmental challenges existed</li>
                      <li>Limited awareness or action on the issue</li>
                      <li>Traditional approaches were insufficient</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">After</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Implementation of effective solutions</li>
                      <li>Measurable improvements in environmental indicators</li>
                      <li>Positive social and economic impacts</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-semibold text-blue-700 mb-2">Key Outcomes</h4>
                <div className="flex overflow-x-auto pb-2 space-x-4">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg min-w-[200px]">
                      <div className="text-2xl font-bold text-blue-700">{index + 1}</div>
                      <p className="text-sm text-blue-900">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resources Section */}
            {topic.resources && topic.resources.length > 0 && (
              <section id="resources" className="bg-white rounded-xl shadow-md p-6 fade-in">
                <div className="flex items-center mb-6">
                  <div className="section-icon mr-4" style={{backgroundColor: '#f3e8ff', color: '#7e22ce'}}>
                    <i className="fas fa-book"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Recommended Resources</h2>
                </div>
                
                <div className="space-y-4">
                  {topic.resources.map((resource, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg text-gray-800 mb-1">{resource.title}</h3>
                          <p className="text-gray-600 mb-2">{resource.description}</p>
                        </div>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-sm">Guide</span>
                      </div>
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline inline-flex items-center"
                      >
                        View Resource
                        <i className="fas fa-external-link-alt ml-1 text-sm"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Take Action Section */}
            <section id="actions" className="bg-white rounded-xl shadow-md p-6 fade-in">
              <div className="flex items-center mb-6">
                <div className="section-icon mr-4" style={{backgroundColor: '#fef3c7', color: '#d97706'}}>
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Take Action</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Ready to make a difference? Here's how you can contribute to solutions addressing {topic.topic.toLowerCase()}:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 text-lg mb-3 flex items-center">
                    <i className="fas fa-user mr-2"></i> Individual Actions
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Reduce your carbon footprint</li>
                    <li>Support environmentally responsible businesses</li>
                    <li>Educate others about these issues</li>
                    <li>Participate in local conservation efforts</li>
                    <li>Make sustainable choices in daily life</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 text-lg mb-3 flex items-center">
                    <i className="fas fa-users mr-2"></i> Community Engagement
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Join environmental organizations</li>
                    <li>Advocate for sustainable policies</li>
                    <li>Volunteer for local cleanup events</li>
                    <li>Support environmental education initiatives</li>
                    <li>Participate in citizen science projects</li>
                  </ul>
                </div>
              </div>
              
              
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Progress Widget */}
            

            {/* Related Topics */}
            <div id="related" className="bg-white rounded-xl shadow-md p-6 fade-in">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Explore Related Topics</h3>
              <div className="space-y-4">
                {topics
                  .filter(t => t.category === topic.category && t.id !== topic.id)
                  .slice(0, 3)
                  .map(relatedTopic => (
                    <Link 
                      key={relatedTopic.id} 
                      to={`/topics/${relatedTopic.id}`}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-lg mr-3">
                        {relatedTopic.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{relatedTopic.topic}</h4>
                        <p className="text-sm text-gray-600">{relatedTopic.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;