import { useState, useEffect, useRef } from "react";
import { Folder, ExternalLink, Github, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [carouselIndex, setCarouselIndex] = useState<{ [key: string]: number }>({});
  const [aspectRatios, setAspectRatios] = useState<{ [key: string]: number }>({});
  const imageRefs = useRef<{ [key: string]: HTMLImageElement[] }>({});
  const descriptionRef = useRef<HTMLDivElement>(null); // Reference for description section

  const placeholderImage = "https://via.placeholder.com/800x600.png?text=Image+Not+Found";

  const projects = [
    {
      id: "bugpatrol",
      name: "Bugpatrol",
      description: "BugPatrol is a MERN-based civic-tech platform that streamlines bug reporting and project management for public websites. It features image-to-text extraction, voice and multilingual input, OTP authentication, and a built-in community space where users can discuss issues and share updates. Designed for accessibility, it simplifies issue tracking and promotes transparency in digital governance.",
      images: [
        "/bugpatrol1.png",
        "/bugpatrol2.png",
        "/bugpatrol3.png"
      ],
      technologies: ["MERN", "Bootstrap", "Gemini API"],
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      features: ["Issue Reporting with Multimedia Input", "Community Discussion Forum", "Dual Dashboard & Analytics"],
      Figma: "https://www.figma.com/design/QNI1cmgxKLq6ptH80JxpQ7/BugPatrol?node-id=0-1&t=bePiZvXNvrDhuvyX-1",
      githubUrl: "https://github.com/sahithiburada/Bugpatrol"
    },
    {
      id: "teamsync",
      name: "TeamSync",
      description: "It is a collaboration and team management platform designed to streamline project organization, task tracking, and internal communication. Built using the MERN stack, it enables teams to manage workflows efficiently with real-time task updates, team messaging, and progress monitoring—all in one unified interface. Ideal for boosting productivity and simplifying coordination in fast-paced environments.",
      images: [
        "/team1.png",
        "/team2.png",
        "/team3.png"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
      features: ["Project Organization Tools", "File sharing", "Integrated Team Communication"],
      Figma: "https://www.figma.com/design/DaSTxoGHOfcWasaWYdl3TC/TeamSync?node-id=0-1&t=VgqfF1DFVGXiXqa6-1",
      githubUrl: "https://github.com/sahithiburada/TeamSync"
    },
    {
      id: "quarrycrew",
      name: "Quarry Crew",
      description: "QuarryCrew is a full-stack platform for monitoring carbon emissions in Indian coal mines. It features an interactive dashboard, integrates ML models (SARIMA/ARIMA) with GIS data, and identifies emission hotspots and carbon sink gaps. The system also proposes region-specific carbon neutrality strategies using EV adoption, renewable energy, and afforestation.",
      images: [
        "/quarry1.png",
        "/quarry2.png",
        "/quarry3.png"
      ],
      technologies: ["React", "MongoDB", "Node.js", "Flask", "Python","Chart.js"],
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      features: ["Emission Analytics", "Carbon Sink Gap Analysis", "Neutrality Strategy Generator"],
      Figma: "https://www.figma.com/design/wNSXYbQ77Q2xu3pFNRPBiq/Quarry_Crew?node-id=0-1&t=zbnAFPkKibXvVAqc-1",
      githubUrl: "https://github.com/sahithiburada/QuarryCrew"
    }
  ];

  const toggleLike = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedProjects);
    if (newLiked.has(projectId)) {
      newLiked.delete(projectId);
    } else {
      newLiked.add(projectId);
    }
    setLikedProjects(newLiked);
  };

  const handlePrevImage = (projectId: string) => {
    setCarouselIndex(prev => {
      const project = projects.find(p => p.id === projectId);
      const currentIndex = prev[projectId] || 0;
      const newIndex = (currentIndex - 1 + (project?.images.length || 1)) % (project?.images.length || 1);
      return { ...prev, [projectId]: newIndex };
    });
  };

  const handleNextImage = (projectId: string) => {
    setCarouselIndex(prev => {
      const project = projects.find(p => p.id === projectId);
      const currentIndex = prev[projectId] || 0;
      const newIndex = (currentIndex + 1) % (project?.images.length || 1);
      return { ...prev, [projectId]: newIndex };
    });
  };

  const handleImageError = (projectName: string, imageSrc: string, img: HTMLImageElement) => {
    console.error(`Failed to load image for ${projectName}: ${imageSrc}`);
    img.src = placeholderImage; // Fallback to placeholder image
  };

  const handleImageLoad = (projectId: string, idx: number, img: HTMLImageElement) => {
    if (img.naturalWidth && img.naturalHeight) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      setAspectRatios(prev => ({
        ...prev,
        [`${projectId}-${idx}`]: aspectRatio
      }));
    }
  };

  // Scroll to description when project is selected
  useEffect(() => {
    if (selectedProject && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-8 bg-white/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 font-poppins">
          My Projects
          <div className="text-center mt-4">
            <div className="inline-block w-20 md:w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
          </div>
        </h2>

        {/* Interactive Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer perspective-1000"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative transform transition-all duration-500 hover:scale-105 hover:-rotate-y-12 ${
                hoveredProject === project.id ? 'z-20' : 'z-10'
              }`}>
                {/* Project Card */}
                <div className={`${project.color} rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border-4 border-white/20 backdrop-blur-sm h-72 md:h-80`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-12 md:w-16 h-12 md:h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-6 md:bottom-8 left-4 w-10 md:w-12 h-10 md:h-12 border-2 border-white rounded-full"></div>
                    <div className="absolute top-10 md:top-12 left-6 md:left-8 w-6 md:w-8 h-6 md:h-8 border-2 border-white rounded-full"></div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => toggleLike(project.id, e)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                  >
                    <Heart 
                      size={18} 
                      className={`transition-all duration-300 ${
                        likedProjects.has(project.id) 
                          ? 'text-red-500 fill-red-500 scale-110' 
                          : 'text-white hover:text-red-300'
                      }`} 
                    />
                  </button>

                  {/* Folder Icon */}
                  <div className="relative z-10 mb-4 md:mb-6">
                    <Folder 
                      size={48} 
                      className="w-12 h-12 md:w-14 md:h-14 text-white/90 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 font-poppins group-hover:text-yellow-100 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                      {project.description.substring(0, 80)}...
                    </p>
                    
                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="text-white/70 text-xs md:text-sm font-medium">
                      Tap to explore →
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-white/5 rounded-3xl transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Floating Tab */}
                <div className="absolute -top-4 left-6 md:left-8 w-20 md:w-24 h-6 md:h-8 bg-white/90 rounded-t-lg shadow-lg flex items-center justify-center group-hover:bg-white transition-colors">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project View */}
        {selectedProject && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-pink-100 animate-fade-in relative overflow-hidden">
            {projects
              .filter(project => project.id === selectedProject)
              .map(project => {
                const currentImageIndex = carouselIndex[project.id] || 0;
                const currentAspectRatio = aspectRatios[`${project.id}-${currentImageIndex}`] || 4/3; // Fallback to 4:3

                return (
                  <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Project Carousel */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur-lg opacity-25 transition-opacity"></div>
                      <div
                        className="relative w-full min-h-40 max-h-72 md:max-h-80 overflow-hidden rounded-2xl shadow-xl"
                        style={{ aspectRatio: currentAspectRatio }}
                      >
                        {/* Carousel Images */}
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                          {project.images.map((image, idx) => (
                            <img
                              key={idx}
                              ref={el => {
                                if (el) {
                                  if (!imageRefs.current[project.id]) imageRefs.current[project.id] = [];
                                  imageRefs.current[project.id][idx] = el;
                                }
                              }}
                              src={image}
                              alt={`${project.name} snippet ${idx + 1}`}
                              className="w-full h-full object-contain flex-shrink-0 bg-gray-100"
                              onLoad={() => handleImageLoad(project.id, idx, imageRefs.current[project.id][idx])}
                              onError={(e) => handleImageError(project.name, image, e.currentTarget)}
                            />
                          ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={() => handlePrevImage(project.id)}
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-3 md:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all"
                        >
                          <ChevronLeft 
                            size={20} 
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
                          />
                        </button>
                        <button
                          onClick={() => handleNextImage(project.id)}
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-3 md:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all"
                        >
                          <ChevronRight 
                            size={20} 
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
                          />
                        </button>

                        {/* Indicators (Dots) */}
                        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCarouselIndex(prev => ({ ...prev, [project.id]: idx }))}
                              className={`w-2 h-2 rounded-full transition-all ${
                                (carouselIndex[project.id] || 0) === idx ? 'bg-pink-500 scale-125' : 'bg-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Details */}
                    <div className="space-y-6">
                      <div ref={descriptionRef}> {/* Reference to scroll to */}
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800 font-poppins">
                          {project.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Key Features:</h4>
                        <div className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                              <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs md:text-sm font-medium hover:scale-105 transition-transform cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 md:space-x-4 pt-3 md:pt-4">
                        <a href={project.Figma} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-5 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                          <ExternalLink 
                            size={18} 
                            className="w-4.5 h-4.5 md:w-5 md:h-5" 
                          />
                          <span>Figma</span>
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-5 md:px-6 py-2 md:py-3 bg-gray-800 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                          <Github 
                            size={18} 
                            className="w-4.5 h-4.5 md:w-5 md:h-5" 
                          />
                          <span>View Code</span>
                        </a>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="px-5 md:px-6 py-2 md:py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* Background Elements */}
      <div className="absolute top-16 md:top-20 right-8 md:right-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 md:bottom-20 left-8 md:left-10 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-purple-200 to-rose-200 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Projects;