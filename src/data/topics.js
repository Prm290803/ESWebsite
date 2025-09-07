export const categories = [
  { id: 'all', name: 'All Topics', icon: '🌐' },
  { id: 'pollution', name: 'Pollution and Its Impacts', icon: '⚠️' },
  { id: 'ecology', name: 'Ecology and Ecosystems', icon: '🌳' },
  { id: 'biodiversity', name: 'Biodiversity and Conservation', icon: '🦉' },
  { id: 'resources', name: 'Natural Resources', icon: '⛏️' },
  { id: 'communities', name: 'Human and Environment', icon: '👥' }
];

export const topics = [
  // 1. Introduction to Environmental Science
  {
    id: 'intro-environmental-science',
    topic: "Introduction to Environmental Science",
    icon: "📚",
    image: "/image/Image1.jpg",
    description: "Multidisciplinary study of environment and our place in it.",
    detailedDescription: "Environmental science is the scientific study of the environment and our relationship with it. It is a multidisciplinary field that integrates knowledge from physics, chemistry, biology, sociology, ecology, forestry, engineering, and other disciplines. The scope includes natural resources and their conservation, ecology and biodiversity, environmental pollution and control, social issues related to development and environment, and human population impacts.",
    category: 'all',
    level: 'Beginner',
    keyPoints: [
      "Multidisciplinary nature of environmental studies",
      "Natural resources conservation",
      "Ecology and biodiversity concepts",
      "Environmental pollution and control",
      "Social issues in development and environment",
      "Human population and environment"
    ],
    resources: [
      {
        title: "Environmental Science Textbook",
        description: "Comprehensive guide covering all aspects of environmental science",
        link: "https://example.com/env-science-textbook"
      },
      {
        title: "UNESCO Environmental Education Resources",
        description: "Official resources for environmental education and awareness",
        link: "https://example.com/unesco-environment"
      }
    ]
  },

  // 2. Fundamentals of Ecology
  {
    id: 'fundamentals-ecology',
    topic: "Fundamentals of Ecology",
    icon: "🔍",
    image: "/image/Image2.jpg",
    description: "Study of interactions between living organisms and their environment.",
    detailedDescription: "Ecology (from Greek 'oikos' meaning house/habitation and 'logos' meaning study) is the scientific study of interactions between living organisms and their physical and biological environment. It examines how organisms interact with each other and with their surroundings, including both biotic (living) and abiotic (non-living) components. Ecology helps us understand the complex relationships that sustain life on Earth.",
    category: 'ecology',
    level: 'Beginner',
    keyPoints: [
      "Biotic and abiotic components of environment",
      "Organism interactions with environment",
      "Levels of ecological organization",
      "Energy flow through ecosystems",
      "Nutrient cycling processes"
    ],
    resources: [
      {
        title: "Ecology Basics Course",
        description: "Interactive course covering fundamental ecological principles",
        link: "https://example.com/ecology-basics"
      },
      {
        title: "Ecological Relationships Handbook",
        description: "Guide to understanding species interactions and ecosystems",
        link: "https://example.com/ecological-relationships"
      }
    ]
  },

  // 3. Ecosystem Structure and Function
  {
    id: 'ecosystem-structure',
    topic: "Ecosystem Structure and Function",
    icon: "🔄",
    image: "/image/Image3.webp",
    description: "Structural and functional system of communities and their environment.",
    detailedDescription: "An ecosystem is a structural and functional unit where living organisms (communities) interact with each other and their physical environment. The term combines 'eco' (environment) and 'system' (interacting independent complex). Ecosystems can be natural or artificial, small or large, and they function through energy flow, nutrient cycling, and ecological processes that maintain balance and sustainability.",
    category: 'ecology',
    level: 'Beginner',
    keyPoints: [
      "Ecosystem = Environment + Interacting system",
      "Structural components: biotic and abiotic",
      "Functional processes: energy flow, nutrient cycling",
      "Food chains and food webs",
      "Ecological balance and sustainability"
    ],
    resources: [
      {
        title: "Ecosystem Functioning Guide",
        description: "Detailed explanation of ecosystem processes and functions",
        link: "https://example.com/ecosystem-functioning"
      },
      {
        title: "Ecosystem Services Database",
        description: "Comprehensive database of ecosystem services and their values",
        link: "https://example.com/ecosystem-services-db"
      }
    ]
  },

  // 4. Components of Environment
  {
    id: 'environment-components',
    topic: "Components of Environment",
    icon: "🧩",
    image: "/image/Image4.webp",
    description: "The four spheres that make up our environment: atmosphere, hydrosphere, lithosphere, and biosphere.",
    detailedDescription: "The environment consists of four major components: 1) Atmosphere - the layer of gases surrounding Earth; 2) Hydrosphere - all water on Earth's surface; 3) Lithosphere - the solid outer layer of Earth; and 4) Biosphere - the zone where life exists. These components interact continuously, creating the conditions that support life on our planet.",
    category: 'all',
    level: 'Beginner',
    keyPoints: [
      "Atmosphere: protective gas layer",
      "Hydrosphere: Earth's water systems",
      "Lithosphere: solid Earth surface",
      "Biosphere: zone of life",
      "Interconnections between spheres"
    ],
    resources: [
      {
        title: "Earth's Systems Interactive",
        description: "Interactive learning tool for Earth's four major systems",
        link: "https://example.com/earth-systems"
      },
      {
        title: "Environmental Components Textbook",
        description: "Comprehensive guide to atmosphere, hydrosphere, lithosphere, and biosphere",
        link: "https://example.com/env-components-textbook"
      }
    ]
  },

  // 5. Atmosphere Structure and Layers
  {
    id: 'atmosphere-layers',
    topic: "Atmosphere Structure and Layers",
    icon: "☁️",
    image: "/image/Image5.jpg",
    description: "Layers of Earth's atmosphere and their unique characteristics.",
    detailedDescription: "Earth's atmosphere consists of several distinct layers: 1) Troposphere (0-16 km) - lowest layer where weather occurs, temperature decreases with altitude; 2) Stratosphere (16-50 km) - contains ozone layer that absorbs UV radiation; 3) Mesosphere (50-85 km) - where meteors burn up, temperature drops to -100°C; 4) Thermosphere/Ionosphere (85-500 km) - contains ionized gases that reflect radio waves, temperature increases; 5) Exosphere (500-2000 km) - outermost layer merging with space, contains ionized hydrogen.",
    category: 'all',
    level: 'Intermediate',
    keyPoints: [
      "Troposphere: weather layer, 8-16 km thick, temperature decreases with altitude",
      "Stratosphere: ozone layer, up to 50 km, protects from UV radiation",
      "Mesosphere: meteor burning layer, up to 85 km, coldest layer",
      "Thermosphere: ionized gases, up to 500 km, reflects radio waves",
      "Exosphere: outer layer merging with space, contains ionized hydrogen"
    ],
    resources: [
      {
        title: "NASA Atmosphere Explorer",
        description: "Interactive exploration of atmospheric layers from NASA",
        link: "https://example.com/nasa-atmosphere"
      },
      {
        title: "Atmospheric Science Course",
        description: "Complete course on atmospheric structure and dynamics",
        link: "https://example.com/atmospheric-science"
      }
    ]
  },

  // 6. Hydrosphere and Water Resources
  {
    id: 'hydrosphere-water',
    topic: "Hydrosphere and Water Resources",
    icon: "💧",
    image: "/image/Image6.jpg",
    description: "Earth's water systems and distribution across the planet.",
    detailedDescription: "The hydrosphere encompasses all water on Earth's surface, covering about 71% of the planet (1.4 billion km³). Water distribution includes: oceans and seas (97%), ice at polar regions (2.3%), groundwater (0.69%), and fresh water in lakes, ponds, rivers, and streams (0.03%). This limited freshwater is essential for all terrestrial life and human civilization, making water conservation critically important.",
    category: 'resources',
    level: 'Beginner',
    keyPoints: [
      "Oceans and seas: 97% of Earth's water",
      "Polar ice: 2.3% of total water",
      "Groundwater: 0.69% of water resources",
      "Fresh surface water: only 0.03%",
      "Water conservation importance"
    ],
    resources: [
      {
        title: "Global Water Resources Database",
        description: "Comprehensive data on global water distribution and availability",
        link: "https://example.com/global-water"
      },
      {
        title: "Water Conservation Guide",
        description: "Practical strategies for water conservation and management",
        link: "https://example.com/water-conservation-guide"
      }
    ]
  },

  // 7. Lithosphere and Earth's Crust
  {
    id: 'lithosphere-crust',
    topic: "Lithosphere and Earth's Crust",
    icon: "🏔️",
    image: "/image/Image7.jpg",
    description: "The solid outer layer of Earth containing soil, minerals, and rocks.",
    detailedDescription: "The lithosphere is Earth's solid outer layer, extending from the surface to about 100 km depth. It includes soil, minerals, rocks, and organic and inorganic matter. Earth is approximately 4.8 billion years old, while humans have existed for about 8 million years, and animal life has been present for approximately 540 million years. The lithosphere provides essential resources and supports terrestrial ecosystems.",
    category: 'resources',
    level: 'Beginner',
    keyPoints: [
      "Soil, minerals, rocks composition",
      "Earth's age: 4.8 billion years",
      "Human existence: 8 million years",
      "Animal life: 540 million years",
      "Resource provision and ecosystem support"
    ],
    resources: [
      {
        title: "Geology and Earth Sciences Textbook",
        description: "Comprehensive guide to Earth's lithosphere and geological processes",
        link: "https://example.com/geology-textbook"
      },
      {
        title: "Mineral Resources Database",
        description: "Information about Earth's mineral resources and their distribution",
        link: "https://example.com/mineral-resources"
      }
    ]
  },

  // 8. Biosphere: The Zone of Life
  {
    id: 'biosphere-life',
    topic: "Biosphere: The Zone of Life",
    icon: "🌍",
    image: "/image/Image8.jpg",
    description: "The portion of Earth where life exists, extending from deep oceans to atmosphere.",
    detailedDescription: "The biosphere is the global ecosystem where life exists, extending from the deepest ocean trenches to about 10 km altitude in the atmosphere. It includes all living organisms and their interactions with the atmosphere, hydrosphere, and lithosphere. The biosphere sustains life through complex biochemical processes and represents a thin, fragile layer that has taken billions of years to develop.",
    category: 'ecology',
    level: 'Intermediate',
    keyPoints: [
      "Extends from oceans to atmosphere",
      "Includes all living organisms",
      "Interacts with all Earth spheres",
      "Complex biochemical processes",
      "Thin, fragile, and ancient system"
    ],
    resources: [
      {
        title: "Biosphere Documentary Series",
        description: "Exploring Earth's diverse ecosystems and life forms",
        link: "https://example.com/biosphere-documentary"
      },
      {
        title: "Biosphere Research Papers",
        description: "Scientific research on biosphere dynamics and processes",
        link: "https://example.com/biosphere-research"
      }
    ]
  },

  // 9. Environmental Pollution Overview
  {
    id: 'pollution-overview',
    topic: "Environmental Pollution Overview",
    icon: "⚠️",
    image: "/image/Image9.webp",
    description: "Introduction to pollution types, sources, and impacts on environment.",
    detailedDescription: "Environmental pollution refers to the introduction of harmful substances or energy into the environment at rates faster than natural processes can neutralize them. Pollution can be from natural sources (volcanic eruptions, earthquakes, storms, dust, UV radiation) or human-made sources (industrial activities, urbanization, agriculture, mining). Pollution affects air, water, soil, and living organisms, causing widespread environmental damage.",
    category: 'pollution',
    level: 'Beginner',
    keyPoints: [
      "Natural sources: volcanoes, earthquakes, storms, dust, UV radiation",
      "Human sources: industry, urbanization, agriculture, mining",
      "Air, water, and soil pollution",
      "Harmful effects on ecosystems",
      "Need for pollution control measures"
    ],
    resources: [
      {
        title: "Pollution Types and Sources Guide",
        description: "Comprehensive overview of different pollution types and their sources",
        link: "https://example.com/pollution-types"
      },
      {
        title: "Environmental Pollution Textbook",
        description: "Detailed textbook covering all aspects of environmental pollution",
        link: "https://example.com/pollution-textbook"
      }
    ]
  },

  // 10. Air Pollution: Causes and Effects
  {
    id: 'air-pollution',
    topic: "Air Pollution: Causes and Effects",
    icon: "🌫️",
    image: "/image/Image10.jpg",
    description: "Sources, types, and impacts of air pollution on health and environment.",
    detailedDescription: "Air pollution occurs when harmful substances are present in the atmosphere at concentrations that cause adverse effects on humans, animals, plants, and materials. Humans breathe about 22,000 times daily, inhaling 16 kg of air, making air quality crucial for health. Major sources include industrial units, thermal power plants, vehicle exhaust, fossil fuel burning, agricultural activities, mining, and domestic fuel burning. Air pollutants can damage health, ecosystems, and climate.",
    category: 'pollution',
    level: 'Intermediate',
    keyPoints: [
      "Industrial and vehicular emissions",
      "Fossil fuel combustion",
      "Agricultural and mining activities",
      "Natural sources: volcanic eruptions, forest fires, dust storms",
      "Health impacts: respiratory diseases, cancer, eye problems",
      "Environmental impacts: acid rain, climate change"
    ],
    resources: [
      {
        title: "WHO Air Quality Guidelines",
        description: "Global standards and recommendations for air quality management",
        link: "https://example.com/who-air-quality"
      },
      {
        title: "Air Pollution Monitoring Toolkit",
        description: "Resources for measuring and analyzing air quality parameters",
        link: "https://example.com/air-monitoring"
      }
    ]
  },

  // 11. Human-Environment Relationship
  {
    id: 'human-environment',
    topic: "Human-Environment Relationship",
    icon: "👥",
    image: "/image/Image11.webp",
    description: "How humans interact with and modify their natural surroundings.",
    detailedDescription: "Humans have a unique ability to modify their environment to meet needs, but this has led to significant environmental disruptions. Since the Industrial Revolution, increased use of fossil fuels for power, vehicles, and industry has caused pollution, river contamination, global warming, acid rain, and ozone depletion. While nature has self-purification systems with tremendous assimilative capacity, human activities now exceed these natural restorative abilities.",
    category: 'communities',
    level: 'Intermediate',
    keyPoints: [
      "Environmental modification capabilities",
      "Industrial Revolution impacts",
      "Fossil fuel dependence consequences",
      "Nature's self-purification systems",
      "Exceeding natural assimilation capacity",
      "Need for sustainable practices"
    ],
    resources: [
      {
        title: "Human Ecology Textbook",
        description: "Comprehensive study of human-environment interactions through history",
        link: "https://example.com/human-ecology"
      },
      {
        title: "Sustainable Development Goals Guide",
        description: "UN framework for balancing human development with environmental protection",
        link: "https://example.com/sdgs-guide"
      }
    ]
  },

  // 12. Technology's Environmental Impact
  {
    id: 'tech-environment',
    topic: "Technology's Environmental Impact",
    icon: "⚙️",
    image: "/image/Image12.jpg",
    description: "How technological applications affect environment directly and indirectly.",
    detailedDescription: "Technology applications improve human well-being but often cause environmental disruptions through both direct and indirect impacts. Direct impacts include accidents, modifications to landscapes, vegetation removal, deforestation, and resource exhaustion. Indirect impacts involve secondary or chain effects such as climate change, biodiversity loss, and pollution spread. Balancing technological progress with environmental protection is a critical challenge for sustainable development.",
    category: 'communities',
    level: 'Intermediate',
    keyPoints: [
      "Direct impacts: accidents, landscape changes, resource depletion",
      "Indirect impacts: climate change, biodiversity loss, pollution spread",
      "Deforestation and habitat destruction",
      "Need for eco-friendly technologies",
      "Sustainable development challenges"
    ],
    resources: [
      {
        title: "Technology Impact Assessment Framework",
        description: "Methodology for evaluating environmental impacts of new technologies",
        link: "https://example.com/tech-impact"
      },
      {
        title: "Green Technology Innovation Database",
        description: "Catalog of environmentally friendly technological solutions",
        link: "https://example.com/green-tech"
      }
    ]
  },

  // 13. Global Environmental Issues
  {
    id: 'global-issues',
    topic: "Global Environmental Issues",
    icon: "🌡️",
    image: "/image/Image13.jpg",
    description: "Major worldwide environmental challenges and their interconnectedness.",
    detailedDescription: "The world faces multiple interconnected environmental crises: climate change from rising CO2 concentrations potentially increasing temperatures several degrees by 2100; ozone depletion from CFCs allowing more UV radiation; acid rain damaging ecosystems; rapid species extinction (36,500 species annually); desertification (81,000 km² of productive land becoming desert in 50 years); and wetland destruction (20-50% already lost). These issues require global cooperation and urgent action.",
    category: 'all',
    level: 'Advanced',
    keyPoints: [
      "Climate change and global warming",
      "Ozone layer depletion",
      "Acid rain effects on ecosystems",
      "Biodiversity loss and species extinction",
      "Desertification and land degradation",
      "Wetland destruction",
      "Interconnected nature of global issues"
    ],
    resources: [
      {
        title: "IPCC Climate Change Reports",
        description: "Comprehensive scientific assessments of climate change impacts and solutions",
        link: "https://example.com/ipcc-reports"
      },
      {
        title: "Global Environmental Outlook",
        description: "UNEP's assessment of the state of the global environment",
        link: "https://example.com/geo-reports"
      }
    ]
  },

  // 14. Environmental Conservation Principles
  {
    id: 'conservation-principles',
    topic: "Environmental Conservation Principles",
    icon: "🛡️",
    image: "/image/Image14.webp",
    description: "Guiding principles for protecting and preserving our natural environment.",
    detailedDescription: "According to UNESCO, environmental conservation principles include: creating awareness about environmental problems; providing basic knowledge; developing positive attitudes; motivating public participation; acquiring practical skills; and striving to attain harmony with nature. These principles guide efforts to address environmental challenges through education, policy, and community engagement, emphasizing the importance of living in balance with natural systems.",
    category: 'biodiversity',
    level: 'Beginner',
    keyPoints: [
      "Creating environmental awareness",
      "Providing basic knowledge",
      "Developing positive attitudes",
      "Motivating public participation",
      "Acquiring practical skills",
      "Striving for harmony with nature"
    ],
    resources: [
      {
        title: "UNESCO Environmental Education Resources",
        description: "Official resources and guidelines for environmental education",
        link: "https://example.com/unesco-education"
      },
      {
        title: "Conservation Principles Handbook",
        description: "Practical guide to environmental conservation principles",
        link: "https://example.com/conservation-handbook"
      }
    ]
  },

  // 15. Soil Degradation and Conservation
  {
    id: 'soil-degradation',
    topic: "Soil Degradation and Conservation",
    icon: "🌾",
    image: "/image/Image15.jpg",
    description: "Causes and consequences of soil loss and remedies.",
    detailedDescription: "Soil degradation reduces land productivity and disrupts ecosystems. Causes include deforestation, overgrazing, excessive fertilizer/pesticide use, and urban sprawl. Effects include reduced crop yield, desertification, and increased floods. Remedies involve afforestation, crop rotation, organic farming, and controlled grazing. Sustainable soil management ensures long-term agricultural security.",
    category: 'biodiversity',
    level: 'Intermediate',
    keyPoints: [
      "Deforestation and overgrazing impacts",
      "Chemical fertilizer overuse",
      "Urbanization loss of fertile land",
      "Consequences: desertification, low productivity",
      "Remedies: afforestation, crop rotation, organic farming"
    ],
    resources: [
      {
        title: "Soil Conservation Techniques Manual",
        description: "Practical guide to preventing soil erosion and degradation",
        link: "https://example.com/soil-conservation"
      },
      {
        title: "Global Soil Partnership Resources",
        description: "FAO initiative for sustainable soil management worldwide",
        link: "https://example.com/global-soil"
      }
    ]
  },

  // 16. Water Pollution and Treatment
  {
    id: 'water-pollution',
    topic: "Water Pollution and Treatment",
    icon: "💧",
    image: "/image/Image16.jpg",
    description: "Sources, impacts, and solutions for water contamination.",
    detailedDescription: "Water pollution occurs when harmful substances contaminate water bodies, making water quality unsuitable for intended uses. Major sources include industrial discharge, agricultural runoff, sewage, and plastic waste. Impacts include ecosystem damage, spread of waterborne diseases, and disruption of aquatic life. Treatment methods range from physical filtration to advanced chemical and biological processes to restore water quality.",
    category: 'pollution',
    level: 'Intermediate',
    keyPoints: [
      "Point source vs non-point source pollution",
      "Eutrophication and algal blooms",
      "Microplastics in water systems",
      "Water treatment technologies",
      "Conservation and prevention strategies"
    ],
    resources: [
      {
        title: "Water Quality Monitoring Handbook",
        description: "Practical guide to assessing and monitoring water quality parameters",
        link: "https://example.com/water-quality"
      },
      {
        title: "Wastewater Treatment Technologies",
        description: "Overview of modern methods for treating industrial and municipal wastewater",
        link: "https://example.com/wastewater-tech"
      }
    ]
  },


  // 18. Renewable Energy Sources
  {
    id: 'renewable-energy',
    topic: "Renewable Energy Sources",
    icon: "☀️",
    image: "/image/Image17.jpeg",
    description: "Sustainable alternatives to fossil fuels.",
    detailedDescription: "Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, water, geothermal heat, and biomass. Unlike fossil fuels, these energy sources produce little to no greenhouse gas emissions, reducing environmental impact. Advancements in technology have made renewables increasingly cost-competitive, though challenges remain in energy storage, grid integration, and intermittency management.",
    category: 'resources',
    level: 'Intermediate',
    keyPoints: [
      "Solar, wind, hydro, geothermal, and biomass energy",
      "Advantages over fossil fuels",
      "Energy storage solutions",
      "Grid integration challenges",
      "Policy and economic incentives"
    ],
    resources: [
      {
        title: "Renewable Energy Technology Guide",
        description: "Comprehensive overview of different renewable energy technologies",
        link: "https://example.com/renewable-tech"
      },
      {
        title: "Energy Storage Solutions Database",
        description: "Catalog of emerging technologies for storing renewable energy",
        link: "https://example.com/energy-storage"
      }
    ]
  },

  // 19. Sustainable Agriculture Practices
  {
    id: 'sustainable-agriculture',
    topic: "Sustainable Agriculture Practices",
    icon: "🚜",
    image: "/image/Image18.webp",
    description: "Farming methods that protect environment and communities.",
    detailedDescription: "Sustainable agriculture meets society's food needs without compromising the ability of future generations to meet their own needs. It integrates three main goals: environmental health, economic profitability, and social equity. Practices include crop rotation, cover cropping, reduced tillage, integrated pest management, and organic farming. These approaches maintain soil health, conserve water, reduce chemical inputs, and support biodiversity.",
    category: 'communities',
    level: 'Intermediate',
    keyPoints: [
      "Soil conservation techniques",
      "Water management strategies",
      "Reducing chemical inputs",
      "Biodiversity in agricultural systems",
      "Community-supported agriculture"
    ],
    resources: [
      {
        title: "Sustainable Farming Practices Manual",
        description: "Practical guide to implementing sustainable agricultural methods",
        link: "https://example.com/sustainable-farming"
      },
      {
        title: "Organic Certification Guide",
        description: "Process and requirements for obtaining organic certification",
        link: "https://example.com/organic-certification"
      }
    ]
  },

  // 20. Climate Change Impacts and Adaptation
  {
    id: 'climate-change-impacts',
    topic: "Climate Change Impacts and Adaptation",
    icon: "🔥",
    image: "/image/Image19.jpg",
    description: "Consequences of global warming and response strategies.",
    detailedDescription: "Climate change is causing widespread impacts across natural and human systems. These include rising sea levels, more frequent and intense extreme weather events, shifting ecosystems, and threats to food and water security. Adaptation strategies involve adjusting to actual or expected climate effects to minimize harm, while mitigation focuses on reducing greenhouse gas emissions. Both approaches are necessary to address the climate crisis.",
    category: 'all',
    level: 'Advanced',
    keyPoints: [
      "Rising temperatures and heatwaves",
      "Sea-level rise and coastal erosion",
      "Extreme weather events",
      "Ecosystem shifts and species migration",
      "Climate resilience planning"
    ],
    resources: [
      {
        title: "Climate Impact Assessment Tools",
        description: "Resources for evaluating climate change impacts at local and regional levels",
        link: "https://example.com/climate-impacts"
      },
      {
        title: "Adaptation Planning Framework",
        description: "Step-by-step guide to developing climate adaptation strategies",
        link: "https://example.com/adaptation"
      }
    ]
  }
];