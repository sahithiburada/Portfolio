import { useState, useEffect } from "react";
import { Sparkles, Star, Heart, Code, Palette, Coffee, ArrowDown, Zap, Globe } from "lucide-react";

const Hero = () => {
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ id: null, tiltX: 0, tiltY: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [titleAnimation, setTitleAnimation] = useState(false);
  const [activeFolder, setActiveFolder] = useState<string | null>(null); // For touch support

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setTitleAnimation(true), 500);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const folders = [
    {
      name: "About Me",
      id: "about",
      color: "bg-gradient-to-br from-rose-400/80 via-pink-500/80 to-orange-500/80",
      icon: Heart,
      description: "Get to know me",
    },
    {
      name: "Projects",
      id: "projects",
      color: "bg-gradient-to-br from-violet-500/80 via-purple-600/80 to-indigo-600/80",
      icon: Code,
      description: "My creative works",
    },
    {
      name: "Experience",
      id: "experience",
      color: "bg-gradient-to-br from-pink-500/80 via-rose-500/80 to-red-500/80",
      icon: Star,
      description: "Professional journey",
    },
    {
      name: "Skills",
      id: "skills",
      color: "bg-gradient-to-br from-blue-500/80 via-indigo-600/80 to-purple-600/80",
      icon: Palette,
      description: "Technical expertise",
    },
    {
      name: "Contact",
      id: "contact",
      color: "bg-gradient-to-br from-emerald-500/80 via-teal-500/80 to-cyan-600/80",
      icon: Coffee,
      description: "Let's connect",
    },
  ];

  const handleFolderClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (centerY - y) / centerY * 10; // Max 10 degrees tilt
    const tiltY = (x - centerX) / centerX * 10; // Max 10 degrees tilt
    setCardTilt({ id, tiltX, tiltY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ id: null, tiltX: 0, tiltY: 0 });
    setHoveredFolder(null);
  };

  const handleTouchStart = (id: string) => {
    setActiveFolder(id);
    setHoveredFolder(id);
  };

  const handleTouchEnd = () => {
    setActiveFolder(null);
    setHoveredFolder(null);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 via-pink-100 to-white overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Glassy Background Overlay with Subtle Noise and Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none backdrop-blur-sm bg-white/10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none"%3E%3Crect width="100" height="100" fill="url(%23noise)" fill-opacity="0.05"/%3E%3Cdefs%3E%3Cfilter id="noise" x="0" y="0"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-200 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`, // Subtle parallax effect
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-6xl text-center flex flex-col items-center justify-center h-full py-12 space-y-8">
        {/* CTA Buttons (Positioned at the Very Top) */}
        <div className="absolute top-0 pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            className="group px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500/80 via-purple-600/80 to-blue-600/80 text-white font-semibold rounded-full backdrop-blur-md border border-white/30 hover:scale-105 transition-all duration-500 shadow-[0_0_10px_rgba(236,72,153,0.3)] text-sm sm:text-base"
            onClick={() => handleFolderClick('projects')}
          >
            View My Work
          </button>
          <button
            className="group px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 text-purple-600 font-semibold rounded-full backdrop-blur-md border border-purple-400/50 hover:bg-purple-50/20 transition-all duration-500 shadow-[0_0_10px_rgba(139,92,246,0.3)] text-sm sm:text-base"
            onClick={() => handleFolderClick('contact')}
          >
            Get In Touch
          </button>
        </div>

        {/* Text Section */}
        <div className="pt-16 sm:pt-0">
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 mb-2 ${titleAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Sahithi Burada
          </h1>
          <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 drop-shadow-2xl mb-2 transition-all duration-1000 delay-300 ${titleAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            PORTFOLIO
          </h2>
          <br></br>
        </div>

        {/* Cards Section (Horizontal Arc on All Screens) */}
        <div className="relative w-full flex items-end justify-center pb-24">
          {folders.map((folder, index) => {
            const totalCards = folders.length;
            // Dynamically calculate card width based on viewport
            const viewportWidth = window.innerWidth;
            const cardWidth = viewportWidth < 640 ? Math.max(90, viewportWidth / 5 - 10) : 160; // Min 90px, max fit for mobile
            const overlap = viewportWidth < 640 ? Math.max(10, cardWidth / 4) : 40; // Dynamic overlap
            const totalWidth = (totalCards - 1) * (cardWidth - overlap); // Total width of the row
            const x = (index * (cardWidth - overlap)) - (totalWidth / 2); // Horizontal positioning

            // Calculate slight curve for y-position (mimicking a subtle arc)
            const maxOffsetY = viewportWidth < 640 ? 8 : 20; // Reduced arc height on mobile
            const curve = maxOffsetY * Math.sin((index / (totalCards - 1)) * Math.PI); // Subtle sine wave for arc

            // Calculate base tilt: cards on the left tilt right, cards on the right tilt left
            const baseTiltAngle = (index - (totalCards - 1) / 2) * (viewportWidth < 640 ? 2 : 5); // Reduced tilt on mobile

            // Apply dynamic tilt based on mouse position
            const isHovered = hoveredFolder === folder.id || activeFolder === folder.id;
            const tiltX = isHovered && cardTilt.id === folder.id ? cardTilt.tiltX : 0;
            const tiltY = isHovered && cardTilt.id === folder.id ? cardTilt.tiltY : 0;

            // Capitalize the icon component to use in JSX
            const Icon = folder.icon;

            return (
              <div
                key={folder.id}
                className={`absolute animate-float-card transition-all duration-300 ease-in-out cursor-pointer backdrop-blur-md border border-white/30 rounded-2xl w-[${cardWidth}px] sm:w-40 ${
                  isHovered
                    ? 'scale-110 -translate-y-8 z-50 shadow-[0_0_40px_rgba(236,72,153,0.6)]'
                    : 'hover:scale-105 hover:-translate-y-4'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  bottom: `${-curve - 20}px`,
                  transform: `translate(-50%, 0) rotate(${baseTiltAngle}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                  zIndex: isHovered ? 50 : totalCards - Math.abs(index - (totalCards - 1) / 2), // Middle cards on top
                  animationDelay: `${index * 0.2}s`, // Staggered animation for each card
                  transition: 'transform 0.5s ease, scale 0.5s ease, translate 0.5s ease, box-shadow 0.5s ease',
                  width: `${cardWidth}px`, // Apply dynamic width
                }}
                onMouseEnter={() => setHoveredFolder(folder.id)}
                onMouseLeave={handleCardMouseLeave}
                onMouseMove={(e) => handleCardMouseMove(e, folder.id)}
                onTouchStart={() => handleTouchStart(folder.id)}
                onTouchEnd={handleTouchEnd}
                onClick={() => handleFolderClick(folder.id)}
              >
                <div className={`w-full h-36 sm:h-48 ${folder.color} rounded-2xl flex flex-col items-center justify-center text-white text-center px-2 sm:px-4`}>
                  <Icon size={viewportWidth < 640 ? 20 : 30} className="mb-1 sm:mb-2" />
                  <h3 className="text-xs sm:text-lg font-bold">{folder.name}</h3>
                  <p className="text-[10px] sm:text-sm opacity-90">{folder.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-600 animate-pulse" size={24} />
      </div>

      {/* CSS for Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-15px);
              opacity: 0.4;
            }
          }
          .animate-float {
            animation: float infinite ease-in-out;
          }

          @keyframes float-card {
            0%, 100% {
              transform: translate(-50%, 0) rotate(${folders.map((_, i) => (i - (folders.length - 1) / 2) * 5)[0]}deg) translateY(0);
            }
            50% {
              transform: translate(-50%, 0) rotate(${folders.map((_, i) => (i - (folders.length - 1) / 2) * 5)[0]}deg) translateY(-5px);
            }
          }
          .animate-float-card {
            animation: float-card 4s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;