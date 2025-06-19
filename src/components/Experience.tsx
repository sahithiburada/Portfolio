import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Code,
} from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "FullStack Developer Intern",
      company: "Edgroom",
      period: "May 2025 - Present",
      location: "Remote",
      description:
        "Building fullstack features and working with the production team to ensure smooth deployment and performance.",
      achievements: [
        "Increased article extraction to 100+/day by optimizing scrapers",
        "Built core features for EdExams platform",
        "Boosted landing page traffic by 20% ensuring smooth deployment with the production team",
      ],
      skills: ["React", "TypeScript", "MySQL", "PHP"],
      icon: TrendingUp,
      color: "from-pink-400 to-rose-500",
    },
    {
      role: "Fullstack Developer Intern",
      company: "Infosys Springboard",
      period: "Feb 2025 - Apr 2025",
      location: "Remote",
      description:
        "Built a fullstack project management tool to improve team coordination and task tracking.",
      achievements: [
        "Developed TeamSync, a MERN-based real-time collaboration platform",
        "Led agile sprints with a 4-member team, boosting deployment speed by 25%",
        "Delivered the project within a 2-month internship timeline",
      ],
      skills: ["MERN", "Agile", "Database Design", "API Dev"],
      icon: Award,
      color: "from-purple-400 to-indigo-500",
    },
    {
      role: "UI Developer",
      company: "WorkBees Technologies",
      period: "Jan 2025 - Mar 2025",
      location: "Remote",
      description:
        "Designed and developed UI components, conducted user research and usability studies.",
      achievements: [
        "Delivered features with 0 major bugs post-launch",
        "Ran usability testing sessions to guide design",
        "Improved load time by 15% through optimized TypeScript components",
      ],
      skills: ["React.js", "Prototyping", "User Research", "Responsive Design"],
      icon: Code,
      color: "from-rose-400 to-pink-500",
    },
  ];

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-20 px-6 overflow-x-auto">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-20">
        Experience Timeline
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-4 mx-auto" />
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal timeline line */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 rounded-full z-0" />

        <div className="flex gap-12 py-6 overflow-x-auto scrollbar-hide">
          {/* Custom scrollbar for both desktop and mobile */}
          <style>
            {`
              #experience .overflow-x-auto::-webkit-scrollbar {
                height: 4px; /* Reduced height for shorter scrollbar */
                background: transparent;
              }
              #experience .overflow-x-auto::-webkit-scrollbar-thumb {
                background: linear-gradient(to right, #ff70a6, #9b59b6, #ff6f61); /* Matching gradient */
                border-radius: 2px;
              }
              #experience .overflow-x-auto::-webkit-scrollbar-track {
                background: transparent;
              }
            `}
          </style>

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative min-w-[300px] z-10"
              >
                {/* Center dot */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-lg z-20" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${exp.color} text-white relative transition-all h-80 overflow-hidden`} // Increased height to h-80 (320px)
                  >
                    {/* Icon beside title */}
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-white" />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>

                    <h4 className="text-lg opacity-90 mb-2">{exp.company}</h4>

                    <div className="flex justify-between gap-4 text-sm text-white/80 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-white/90 mb-4 line-clamp-4">{exp.description}</p>

                    {/* Skills preview */}
                    <div className="flex justify-between gap-2 flex-wrap mb-6">
                      {exp.skills.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 2 && (
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                          +{exp.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => toggle(i)}
                      className="flex items-center gap-1 text-white/90 hover:text-white text-sm absolute bottom-4 right-4"
                    >
                      {expandedIndex === i ? "Show Less" : "Show More"}
                      {expandedIndex === i ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </motion.div>

                  {/* Expanded content */}
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-white/90 backdrop-blur-md text-gray-700 rounded-2xl p-4 shadow-lg"
                    >
                      <h5 className="text-md font-bold mb-2">Key Achievements:</h5>
                      <ul className="space-y-2 mb-3">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1 w-2 h-2 bg-pink-400 rounded-full" />
                            <span className="text-sm">{a}</span>
                          </li>
                        ))}
                      </ul>
                      <h5 className="text-md font-bold mb-2">Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((s, j) => (
                          <span
                            key={j}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;