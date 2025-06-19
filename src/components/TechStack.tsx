import { useState } from "react";
import { Code, Database, Palette, Wrench, Star, Zap, Heart, ChevronDown, ChevronUp } from "lucide-react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set(["React", "MongoDB", "Figma"]));
  const [showAll, setShowAll] = useState(false);

  const technologies = [
    { name: "React.js", category: "Frontend", color: "bg-blue-500", level: 95, icon: Code, description: "Component-based JavaScript UI library" },
    { name: "TypeScript", category: "Frontend", color: "bg-blue-600", level: 90, icon: Code, description: "Typed superset of JavaScript" },
    { name: "Tailwind CSS", category: "Frontend", color: "bg-cyan-500", level: 90, icon: Palette, description: "Utility-first CSS framework" },
    { name: "HTML/CSS/JS", category: "Frontend", color: "bg-yellow-400", level: 85, icon: Code, description: "Core web development stack" },
    { name: "Bootstrap", category: "Frontend", color: "bg-indigo-500", level: 80, icon: Palette, description: "Popular CSS framework for responsive design" },
    { name: "Node.js", category: "Backend", color: "bg-green-600", level: 90, icon: Code, description: "JavaScript runtime for server-side development" },
    { name: "Express.js", category: "Backend", color: "bg-gray-600", level: 75, icon: Code, description: "Minimal and flexible Node.js web framework" },
    { name: "Flask", category: "Backend", color: "bg-orange-400", level: 70, icon: Code, description: "Lightweight Python web framework" },
    { name: "MongoDB", category: "Database", color: "bg-green-400", level: 80, icon: Database, description: "NoSQL database for scalable applications" },
    { name: "MySQL", category: "Database", color: "bg-blue-700", level: 75, icon: Database, description: "Relational database management system" },
    { name: "Hugging Face", category: "ML", color: "bg-pink-400", level: 70, icon: Code, description: "Transformers and NLP models for AI tasks" },
    { name: "Python", category: "ML", color: "bg-purple-600", level: 85, icon: Code, description: "Forecasting models for time series analysis" },
    { name: "Figma", category: "Design", color: "bg-purple-500", level: 95, icon: Palette, description: "Collaborative interface design tool" },
    { name: "Git", category: "Tools", color: "bg-orange-500", level: 87, icon: Wrench, description: "Version control system for tracking changes" },
    { name: "Android Studio", category: "Tools", color: "bg-green-500", level: 40, icon: Wrench, description: "IDE for Android app development" },
  ];

  const categories = [
    { name: "all", label: "All", icon: Star, color: "bg-gradient-to-r from-pink-400 to-purple-500" },
    { name: "Frontend", label: "Frontend", icon: Code, color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
    { name: "Backend", label: "Backend", icon: Database, color: "bg-gradient-to-r from-green-400 to-emerald-500" },
    { name: "Database", label: "Database", icon: Database, color: "bg-gradient-to-r from-emerald-400 to-teal-500" },
    { name: "Design", label: "Design", icon: Palette, color: "bg-gradient-to-r from-purple-400 to-pink-500" },
    { name: "Tools", label: "Tools", icon: Wrench, color: "bg-gradient-to-r from-orange-400 to-red-500" },
  ];

  const filteredTechnologies = activeCategory === null || activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const toggleFavorite = (techName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(techName)) {
      newFavorites.delete(techName);
    } else {
      newFavorites.add(techName);
    }
    setFavorites(newFavorites);
  };

  const visibleTechnologies = showAll ? filteredTechnologies : filteredTechnologies.slice(0, 5);

  return (
    <section id="tech" className="py-20 px-4 md:px-8 bg-white/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 font-poppins">
          Tech Stack
          <div className="text-center mt-4">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
          </div>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Explore my technical expertise through this section
        </p>

        {/* Interactive Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.name
                  ? `${category.color} text-white shadow-xl scale-105`
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 shadow-lg'
              }`}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
              {category.name !== "all" && (
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {technologies.filter(t => t.category === category.name).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid for Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 relative overflow-hidden">
                <button
                  onClick={(e) => toggleFavorite(tech.name, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
                    favorites.has(tech.name)
                      ? 'bg-red-100 text-red-500 scale-110'
                      : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-400'
                  }`}
                >
                  <Heart size={16} className={favorites.has(tech.name) ? 'fill-current' : ''} />
                </button>
                <div className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <tech.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2 font-poppins group-hover:text-purple-600 transition-colors">
                  {tech.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600 font-medium">Proficiency</span>
                    <span className="text-xs text-gray-800 font-bold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: hoveredTech === tech.name ? `${tech.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className={`text-center transition-all duration-300 ${hoveredTech === tech.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                {hoveredTech === tech.name && (
                  <div className="absolute top-2 left-2">
                    <Zap size={16} className="text-yellow-400 animate-pulse" />
                  </div>
                )}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stacked Grid Layout for Mobile */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:hidden">
          {activeCategory !== null && visibleTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 relative overflow-hidden">
                <button
                  onClick={(e) => toggleFavorite(tech.name, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
                    favorites.has(tech.name)
                      ? 'bg-red-100 text-red-500 scale-110'
                      : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-400'
                  }`}
                >
                  <Heart size={16} className={favorites.has(tech.name) ? 'fill-current' : ''} />
                </button>
                <div className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <tech.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2 font-poppins group-hover:text-purple-600 transition-colors">
                  {tech.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600 font-medium">Proficiency</span>
                    <span className="text-xs text-gray-800 font-bold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: hoveredTech === tech.name ? `${tech.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className={`text-center transition-all duration-300 ${hoveredTech === tech.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                {hoveredTech === tech.name && (
                  <div className="absolute top-2 left-2">
                    <Zap size={16} className="text-yellow-400 animate-pulse" />
                  </div>
                )}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            </div>
          ))}
          {activeCategory !== null && filteredTechnologies.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {showAll ? "Show Less" : "Show More"}
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-rose-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TechStack;