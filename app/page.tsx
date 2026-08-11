import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnimatedBackground />

      <div className="page-shell">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <CurrentlyBuilding />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}