import { useState } from 'react';
import { StarField } from './components/StarField';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { TechnicalSkills } from './components/TechnicalSkills';
import { MVPModal } from './components/MVPModal';
import { Navigation } from './components/Navigation';
function App() {
  const [isMVPModalOpen, setIsMVPModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <StarField />
      <Navigation onMVPClick={() => setIsMVPModalOpen(true)} />
      <main className="relative z-10">
        <Hero onMVPClick={() => setIsMVPModalOpen(true)} />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Blog />
        <Contact />
      </main>
      <MVPModal isOpen={isMVPModalOpen} onClose={() => setIsMVPModalOpen(false)} />
    </div>
  );
}

export default App;
