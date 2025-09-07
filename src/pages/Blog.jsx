import ArticleCard from '../Components/ArticleCard';
import '../App.css'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "The Future of Renewable Energy in Urban Areas",
      excerpt: "Exploring how cities worldwide are transitioning to sustainable energy sources.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
    },
    {
      id: 2,
      title: "Plastic Pollution: Small Changes, Big Impact",
      excerpt: "How individual actions contribute to solving the global plastic crisis.",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1588591795084-1770cb3be374"
    },
    {
      id: 3,
      title: "Biodiversity Hotspots Under Threat",
      excerpt: "A look at the world's most ecologically important regions facing destruction.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1470114716159-e389f8712fda"
    },
    {
      id: 4,
      title: "Sustainable Agriculture Practices That Work",
      excerpt: "Farmers share success stories of eco-friendly farming methods.",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
    },
    {
      id: 5,
      title: "The Psychology of Climate Change Denial",
      excerpt: "Understanding why some people resist accepting climate science.",
      date: "April 5, 2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      id: 6,
      title: "Green Architecture: Buildings of the Future",
      excerpt: "How innovative design is reducing the construction industry's environmental impact.",
      date: "March 18, 2023",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    }
  ];

  const featuredArticle = articles[0];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Environmental Science Blog</h1>
      
      {/* Featured Article */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img 
            src={featuredArticle.image} 
            alt={featuredArticle.title} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="text-green-600 text-sm mb-4">{featuredArticle.date}</div>
            <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{featuredArticle.excerpt}</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
              Read Full Article
            </button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-green-700">Latest Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-green-700 text-white p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive the latest articles, research updates, and environmental news 
            directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow max-w-md px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-700 hover:bg-green-100 font-bold py-2 px-6 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}