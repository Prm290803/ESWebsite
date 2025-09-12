import { useState } from 'react';
import { Link } from 'react-router-dom';

const CarbonCalculator = () => {
  const [inputs, setInputs] = useState({
    electricity: '',
    carMileage: '',
    flights: '',
    diet: 'average'
  });

  const [result, setResult] = useState(null);

  // Calculation logic remains the same
  const calculateFootprint = () => {
    const electricFootprint = inputs.electricity ? inputs.electricity * 0.5 * 12 : 0;
    const carFootprint = inputs.carMileage ? inputs.carMileage * 0.3 : 0;
    const flightFootprint = inputs.flights ? inputs.flights * 200 : 0;
    
    const dietFootprint = {
      vegan: 1000,
      vegetarian: 1500,
      average: 2500,
      'meat-heavy': 3500
    }[inputs.diet];

    const total = electricFootprint + carFootprint + flightFootprint + dietFootprint;
    
    setResult({
      total: Math.round(total),
      breakdown: {
        electric: Math.round(electricFootprint),
        car: Math.round(carFootprint),
        flights: Math.round(flightFootprint),
        diet: Math.round(dietFootprint)
      },
      comparison: getComparison(Math.round(total))
    });
  };

  const getComparison = (total) => {
    if (total < 6000) return { text: "Excellent! Well below global average", color: "text-emerald-600" };
    if (total < 12000) return { text: "Good! Below global average", color: "text-green-600" };
    if (total < 18000) return { text: "Average. Room for improvement", color: "text-amber-600" };
    return { text: "High. Consider reducing your footprint", color: "text-red-600" };
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header with back button */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/activities" className="flex items-center text-emerald-700 hover:text-emerald-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Activities
        </Link>
        <button 
          onClick={() => {
            setInputs({
              electricity: '',
              carMileage: '',
              flights: '',
              diet: 'average'
            });
            setResult(null);
          }}
          className="text-white bg-opacity-0 bg-green-600 hover:text-green-300"
        >
          Reset
        </button>
      </div>

      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <h1 className="text-2xl font-bold">Carbon Footprint Calculator</h1>
          <p className="opacity-95">Estimate your annual CO₂ emissions</p>
        </div>

        {/* Calculator Body */}
        <div className="p-6">
          {/* Input Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-800 font-medium mb-2">Monthly Electricity (kWh)</label>
              <input
                type="number"
                name="electricity"
                value={inputs.electricity}
                onChange={(e) => setInputs({...inputs, electricity: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                placeholder="e.g. 300"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Annual Car Mileage</label>
              <input
                type="number"
                name="carMileage"
                value={inputs.carMileage}
                onChange={(e) => setInputs({...inputs, carMileage: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                placeholder="e.g. 12000"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Flights (per year)</label>
              <input
                type="number"
                name="flights"
                value={inputs.flights}
                onChange={(e) => setInputs({...inputs, flights: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                placeholder="e.g. 2"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Diet Type</label>
              <select
                name="diet"
                value={inputs.diet}
                onChange={(e) => setInputs({...inputs, diet: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
              >
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="average">Average</option>
                <option value="meat-heavy">Meat Heavy</option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateFootprint}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg mb-6"
          >
            Calculate My Carbon Footprint
          </button>

          {/* Results Section */}
          {result && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Results</h2>
              
              {/* Main Result Card */}
              <div className="bg-emerald-50 p-4 rounded-lg mb-6 border border-emerald-100">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-emerald-800">{result.total} kg</div>
                  <div className="text-gray-600">CO₂ emissions per year</div>
                  <div className={`mt-2 font-medium ${result.comparison.color}`}>
                    {result.comparison.text}
                  </div>
                </div>

                {/* Breakdown Bars */}
                <div className="space-y-3">
                  {Object.entries(result.breakdown).map(([category, value]) => (
                    <div key={category} className="flex items-center">
                      <div className="w-24 capitalize text-gray-700 font-medium">
                        {category.replace('-', ' ')}:
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" 
                            style={{ width: `${(value / result.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-16 text-right font-medium text-gray-800">
                        {value} kg
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Reduction Tips</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {result.breakdown.electric > 1000 && (
                    <li>Switch to renewable energy providers or install solar panels</li>
                  )}
                  {result.breakdown.car > 1000 && (
                    <li>Use public transport, carpool, or consider an electric vehicle</li>
                  )}
                  {result.breakdown.flights > 1000 && (
                    <li>Reduce air travel and consider video conferencing alternatives</li>
                  )}
                  {result.breakdown.diet > 2000 && (
                    <li>Reduce meat consumption, especially beef and lamb</li>
                  )}
                  <li>Improve home insulation and use energy-efficient appliances</li>
                  <li>Adopt the 3Rs: Reduce, Reuse, Recycle</li>
                  <li>Support carbon offset programs for unavoidable emissions</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;