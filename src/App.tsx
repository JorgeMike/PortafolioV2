import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Stats from "./components/stats";
import SkillsCarousel from "./components/skills";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-2 container px-10 mx-auto">
        <AboutMe />
        <Stats />
      </div>
      <SkillsCarousel />
      <div className="grid grid-cols-2 container px-10 mx-auto"></div>
    </main>
  );
}
