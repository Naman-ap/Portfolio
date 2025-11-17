import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const parallaxOffset = useParallax(0.3);
  const fullText = 'Full-Stack Developer & Product Builder';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Terminal className="w-20 h-20 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          Naman Chaw
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 font-mono">
          {text}
          {showCursor && <span className="text-cyan-400">|</span>}
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting innovative digital experiences across the tech universe.
          Specializing in modern web technologies, cloud architecture, and
          building scalable solutions that push boundaries.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            View Projects
          </a>
        </div>

        {/* <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div> */}
      </div>

      {/* <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button> */}
    </section>
  );
};
