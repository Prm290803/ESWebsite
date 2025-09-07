import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Activities from './pages/Activities';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TopicDetail from './pages/TopicDetail';
import CarbonCalculator from './Components/CarbonCalculator';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-green-50 bg-opacity-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/topics/:id" element={<TopicDetail />} />
             <Route path="/carbon-calculator" element={<CarbonCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}