import { useState } from "react";
import { Heart, Coffee, Code, Palette, Star, Sparkles } from "lucide-react";

const AboutMe = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: "Creative Thinking", icon: Palette, color: "bg-pink-400", description: "Turning ideas into beautiful realities" },
    { name: "Problem Solving", icon: Code, color: "bg-purple-400", description: "Finding elegant solutions to complex challenges" },
    { name: "User Experience", icon: Heart, color: "bg-rose-400", description: "Creating meaningful connections through design" },
    { name: "Innovation", icon: Sparkles, color: "bg-indigo-400", description: "Pushing boundaries and exploring new possibilities" }
  ];

  const personalStats = [
    { label: "Years of experience", value: "3+", icon: Coffee },
    { label: "UI screens designed", value: "100+", icon: Code },
    { label: "Industry Internships", value: "4", icon: Heart },
    { label: "Hackathons Participated", value: "5+", icon: Star }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleTouchSkill = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800 font-poppins relative">
          About Me
          <div className="absolute -top-4 -right-4 text-pink-300 animate-pulse">
            <Sparkles className="size-6 sm:size-8" />
          </div>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div
              className="relative w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] mx-auto bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
              onMouseMove={handleMouseMove}
            >
              {/* Floating particles */}
              <div 
                className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-pink-400 rounded-full opacity-60 transition-all duration-300"
                style={{ left: `${mousePosition.x * 0.1}px`, top: `${mousePosition.y * 0.1}px` }}
              />
              <div 
                className="absolute w-2 sm:w-3 h-2 sm:h-3 bg-purple-400 rounded-full opacity-40 transition-all duration-500"
                style={{ left: `${mousePosition.x * 0.05 + 50}px`, top: `${mousePosition.y * 0.05 + 100}px` }}
              />
              <div 
                className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-rose-400 rounded-full opacity-50 transition-all duration-700"
                style={{ left: `${mousePosition.x * 0.03 + 200}px`, top: `${mousePosition.y * 0.03 + 200}px` }}
              />

              <img
                src="/portfolio-pic.jpg"
                alt="Profile"
                className="w-[16rem] sm:w-[22rem] h-[16rem] sm:h-[22rem] rounded-full object-cover border-8 border-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:border-pink-300 transition-all duration-300"
              />

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-6 sm:top-8 left-1/2 w-5 sm:w-6 h-5 sm:h-6 bg-amber-400 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg">
                  <Star className="size-2.5 sm:size-3 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 w-6 sm:w-8 h-6 sm:h-8 bg-emerald-400 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg">
                  <Heart className="size-3 sm:size-4 text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {personalStats.map((stat, index) => {
                const Icon = stat.icon; // Capitalize the icon component
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border border-pink-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="size-4 sm:size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                          {stat.value}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description & Skills */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 opacity-50"></div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-pink-600 font-poppins relative z-10">
                Sahithi Kumari Burada
                <div className="absolute -right-2 -top-2 animate-bounce">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-amber-400 rounded-full"></div>
                </div>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 font-poppins font-bold relative z-10">
                Fullstack Developer and UI/UX Designer
              </p>

              <div className="space-y-3 sm:space-y-4 relative z-10">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
                  A passionate and curious developer–designer currently pursuing a B.Tech in Information Technology. With a strong foundation in frontend and backend technologies, I specialize in crafting full-stack web solutions and intuitive UI/UX experiences.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  My journey includes impactful internships where I collaborated with cross-functional teams to build responsive interfaces, optimize data flows, and lead agile sprints that brought real value to users. Beyond code, I’m a community builder at heart. As the founder of OpenForge, I’ve mentored 100+ peers, fostering a collaborative open-source culture.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  I'm driven by innovation, empathy, and continuous learning—always exploring new technologies and design strategies to solve real-world problems and create meaningful digital experiences.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon; // Capitalize the icon component
                return (
                  <div
                    key={index}
                    className={`${skill.color} rounded-2xl p-4 sm:p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-2 relative overflow-hidden group`}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onClick={() => handleTouchSkill(skill.name)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl"></div>

                    <div className="relative z-10">
                      <Icon className="size-6 sm:size-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">{skill.name}</h4>

                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeSkill === skill.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-white/90 text-xs sm:text-sm">{skill.description}</p>
                      </div>
                    </div>

                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full group-hover:animate-ping"></div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group inline-block">
                <span className="flex items-center space-x-2">
                  <span>Let's Create Together</span>
                  <Heart className="size-4 sm:size-5 group-hover:animate-pulse" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="relative">
        <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3 sm:left-4 w-12 sm:w-16 h-12 sm:h-16 bg-rose-200/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default AboutMe;