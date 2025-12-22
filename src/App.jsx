import Background from "./components/Background";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <div className="relative isolate">
      <Background />
      <main>
        <Hero />
        <SkillsMarquee />
        <ProjectGrid />

        {/* Footer */}
        <footer className="py-20 text-center border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-sm">
          <p className="text-zinc-500 text-sm">
            © 2025 Ed Portfolio. Designed with precision.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
