import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-600 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🌱</span>
          EcoSphere
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/about" className="hover:text-green-200 transition">About</Link>
          <Link to="/topics" className="hover:text-green-200 transition">Topics</Link>
          <Link to="/activities" className="hover:text-green-200 transition">Activities</Link>
          <Link to="/blog" className="hover:text-green-200 transition">Blog</Link>
          <Link to="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-green-300 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-700 md:hidden flex flex-col space-y-4 p-4">
            <Link to="/about" className="hover:text-green-900 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/topics" className="hover:text-green-200 transition" onClick={() => setMobileMenuOpen(false)}>Topics</Link>
            <Link to="/activities" className="hover:text-green-200 transition" onClick={() => setMobileMenuOpen(false)}>Activities</Link>
            <Link to="/blog" className="hover:text-green-200 transition" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="hover:text-green-200 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}