import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const parallaxOffset = useParallax(0.3);
  const fullText = 'Full-Stack Developer & Product Builder';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
        // Stop cursor blinking after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete]);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8 inline-block">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main avatar container */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1.5 animate-spin-slow group-hover:animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                </div>
                
                {/* Single powerful icon with responsive sizing */}
                <div className="relative z-10 p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient px-2">
          Naman Chawla
        </h1>

        <div className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-6 sm:mb-8 h-10 sm:h-12 font-mono relative flex items-center justify-center px-4">
          <span className="inline-block">
            {text}
            {showCursor && (
              <span className="text-cyan-400 animate-pulse ml-1 font-bold">|</span>
            )}
          </span>
          {isTypingComplete && (
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            </div>
          )}
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Crafting innovative digital experiences across the tech universe.
          Specializing in modern web technologies, cloud architecture, and
          building scalable solutions that push boundaries.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2">
          <a
            href="#contact"
            className="group relative inline-flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-sm sm:text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 text-sm sm:text-base hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
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
