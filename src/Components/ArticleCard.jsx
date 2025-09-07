import '../App.css'

export default function ArticleCard({ title, excerpt, date, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-green-600 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-green-600 hover:text-green-800 font-medium transition">
          Read article →
        </button>
      </div>
    </div>
  );
}