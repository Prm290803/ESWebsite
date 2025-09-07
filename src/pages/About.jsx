import '../App.css'

export default function About() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-800">About EcoScience</h1>
      
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-700">Our Mission</h2>
            <p className="text-lg mb-4">
              EcoScience was founded with a simple yet powerful goal: to make environmental science accessible to everyone.
            </p>
            <p className="text-lg">
              We believe that education is the first step toward meaningful environmental action. By providing clear, 
              engaging, and scientifically accurate information, we empower individuals and communities to make 
              informed decisions about our planet's future.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" 
              alt="Team working together" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Our Story</h2>
        <div className="space-y-6">
          <p className="text-lg">
            Founded in 2018 by a group of environmental scientists and educators, EcoScience began as a small 
            blog sharing research findings in accessible language. As our audience grew, so did our ambitions.
          </p>
          <p className="text-lg">
            Today, we're a team of scientists, educators, designers, and developers working together to create 
            engaging educational resources that inspire real-world environmental action.
          </p>
          <p className="text-lg">
            Our materials are used in classrooms, community centers, and homes around the world, helping to 
            foster a new generation of environmentally conscious citizens.
          </p>
        </div>
      </section>

      <section className="bg-green-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Our Impact</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-700">Educational Resources</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-700">Schools Using Our Materials</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
            <div className="text-gray-700">Annual Visitors</div>
          </div>
        </div>
      </section>
    </div>
  );
}