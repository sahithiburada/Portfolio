
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 ">
      
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Index;
