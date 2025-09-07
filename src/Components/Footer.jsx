
import '../App.css'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EcoScience</h3>
            <p className="text-green-200">Empowering environmental awareness through education and action.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="/topics" className="hover:text-green-300 transition">Topics</a></li>
              <li><a href="/activities" className="hover:text-green-300 transition">Activities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-green-300 transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-green-300 transition">Contact</a></li>
              <li><a href="#" className="hover:text-green-300 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition">Facebook</a>
              <a href="#" className="hover:text-green-300 transition">Twitter</a>
              <a href="#" className="hover:text-green-300 transition">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300">
          <p>© {new Date().getFullYear()} EcoScience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}