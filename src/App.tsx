import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Stats from "./components/stats";
import SkillsCarousel from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import CarwashPitch from "./components/carwash-pitch";
import CarwashLandingPreview from "./components/carwash-landing-preview";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="grid md:grid-cols-2 container px-10 mx-auto">
        <AboutMe />
        <Stats />
      </div>
      <SkillsCarousel />
      <Experience />
      <Projects />
      <CarwashPitch />
      <CarwashLandingPreview />
    </main>
  );
}
