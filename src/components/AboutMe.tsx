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

  return (
    <section id="about" className="py-20 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 font-poppins relative">
          About Me
          <div className="absolute -top-4 -right-4 text-pink-300 animate-pulse">
            <Sparkles size={32} />
          </div>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div
              className="relative w-[28rem] h-[28rem] mx-auto bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
              onMouseMove={handleMouseMove}
            >
              {/* Floating particles */}
              <div 
                className="absolute w-4 h-4 bg-pink-400 rounded-full opacity-60 transition-all duration-300"
                style={{ left: `${mousePosition.x * 0.1}px`, top: `${mousePosition.y * 0.1}px` }}
              />
              <div 
                className="absolute w-3 h-3 bg-purple-400 rounded-full opacity-40 transition-all duration-500"
                style={{ left: `${mousePosition.x * 0.05 + 50}px`, top: `${mousePosition.y * 0.05 + 100}px` }}
              />
              <div 
                className="absolute w-2 h-2 bg-rose-400 rounded-full opacity-50 transition-all duration-700"
                style={{ left: `${mousePosition.x * 0.03 + 200}px`, top: `${mousePosition.y * 0.03 + 200}px` }}
              />

              <img
                src="public/portfolio-pic.jpg"
                alt="Profile"
                className="w-[22rem] h-[22rem] rounded-full object-cover border-8 border-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:border-pink-300 transition-all duration-300"
              />

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-8 left-1/2 w-6 h-6 bg-amber-400 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg">
                  <Star size={12} className="text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-8 left-1/2 w-8 h-8 bg-emerald-400 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg">
                  <Heart size={16} className="text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {personalStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-pink-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <stat.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description & Skills */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>

              <h3 className="text-3xl font-bold mb-2 text-pink-600 font-poppins relative z-10">
                Sahithi Kumari Burada
                <div className="absolute -right-2 -top-2 animate-bounce">
                  <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                </div>
              </h3>
              <p className="text-gray-600 text-lg mb-6 font-poppins font-bold relative z-10">
                Fullstack Developer and UI/UX Designer
              </p>

              <div className="space-y-4 relative z-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  A passionate and curious developer–designer currently pursuing a B.Tech in Information Technology. With a strong foundation in frontend and backend technologies, I specialize in crafting full-stack web solutions and intuitive UI/UX experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey includes impactful internships where I collaborated with cross-functional teams to build responsive interfaces, optimize data flows, and lead agile sprints that brought real value to users. Beyond code, I’m a community builder at heart. As the founder of OpenForge, I’ve mentored 100+ peers, fostering a collaborative open-source culture.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm driven by innovation, empathy, and continuous learning—always exploring new technologies and design strategies to solve real-world problems and create meaningful digital experiences.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${skill.color} rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-2 relative overflow-hidden group`}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl"></div>

                  <div className="relative z-10">
                    <skill.icon size={32} className="text-white mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-bold text-lg mb-2">{skill.name}</h4>

                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeSkill === skill.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-white/90 text-sm">{skill.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/50 rounded-full group-hover:animate-ping"></div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group inline-block">
                <span className="flex items-center space-x-2">
                  <span>Let's Create Together</span>
                  <Heart size={20} className="group-hover:animate-pulse" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="relative">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-4 w-16 h-16 bg-rose-200/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default AboutMe;
