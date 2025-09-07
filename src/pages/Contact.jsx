export default function Contact() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Get Involved</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-green-700">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <select 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a subject</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="donation">Donation Question</option>
                <option value="education">Educational Resources</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Volunteer & Donate */}
        <div className="space-y-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Volunteer Opportunities</h2>
            <p className="mb-6">
              Join our team of passionate volunteers helping to educate communities about environmental 
              science. We have opportunities for all skill levels and time commitments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-green-600 mr-4 mt-1">📚</div>
                <div>
                  <h3 className="font-bold">Education Volunteers</h3>
                  <p className="text-gray-600">Help develop educational materials or teach workshops.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-4 mt-1">💻</div>
                <div>
                  <h3 className="font-bold">Tech Volunteers</h3>
                  <p className="text-gray-600">Assist with website development or data analysis.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-4 mt-1">🌍</div>
                <div>
                  <h3 className="font-bold">Community Outreach</h3>
                  <p className="text-gray-600">Help organize local events and awareness campaigns.</p>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition">
              Learn About Volunteering
            </button>
          </div>

          <div className="bg-green-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
            <p className="mb-6">
              Your donation helps us create more educational resources, develop interactive tools, 
              and reach more people with vital environmental information.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button className="bg-white text-green-800 font-bold py-2 rounded-lg transition hover:bg-green-100">
                $25
              </button>
              <button className="bg-white text-green-800 font-bold py-2 rounded-lg transition hover:bg-green-100">
                $50
              </button>
              <button className="bg-white text-green-800 font-bold py-2 rounded-lg transition hover:bg-green-100">
                $100
              </button>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition w-full">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <section className="mt-16 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Other Ways to Connect</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 flex items-center">
              <span className="text-green-600 mr-2">📧</span> Email
            </h3>
            <p className="text-gray-600">info@ecoscience.org</p>
            <p className="text-gray-600">partnerships@ecoscience.org</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 flex items-center">
              <span className="text-green-600 mr-2">📱</span> Social Media
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-800">Twitter</a>
              <a href="#" className="text-green-600 hover:text-green-800">Facebook</a>
              <a href="#" className="text-green-600 hover:text-green-800">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 flex items-center">
              <span className="text-green-600 mr-2">🏢</span> Office
            </h3>
            <p className="text-gray-600">123 Greenway Blvd</p>
            <p className="text-gray-600">EcoCity, EC 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
}