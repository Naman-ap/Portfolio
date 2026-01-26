import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, TrendingUp, Users, Calendar, Zap } from 'lucide-react';
import { MvpProject } from '../types';

// Sample MVP data - replace with your actual projects
const mvpProjects: MvpProject[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    tagline: 'Real-time insights for modern businesses',
    description: 'A comprehensive analytics platform that leverages machine learning to provide actionable insights. Built with modern web technologies and designed for scale, serving thousands of daily active users.',
    heroMedia: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    mediaType: 'image',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TensorFlow', 'AWS'],
    metrics: [
      { label: 'Active Users', value: '10K+', icon: 'Users' },
      { label: 'Growth', value: '+250%', icon: 'TrendingUp' },
      { label: 'Uptime', value: '99.9%', icon: 'Zap' }
    ],
    launchDate: 'Jan 2025',
    status: 'launched',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project',
    features: [
      'Real-time data processing and visualization',
      'AI-powered predictive analytics',
      'Custom dashboard builder with drag-and-drop',
      'Multi-tenant architecture with role-based access',
      'RESTful API and webhook integrations',
      'Automated reporting and alerts'
    ]
  },
  {
    id: '2',
    title: 'Smart Collaboration Tool',
    tagline: 'Where teams work together seamlessly',
    description: 'A next-generation collaboration platform that combines project management, communication, and file sharing in one unified experience. Trusted by startups and enterprises alike.',
    heroMedia: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    mediaType: 'image',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker'],
    metrics: [
      { label: 'Teams', value: '500+', icon: 'Users' },
      { label: 'Messages/Day', value: '50K+', icon: 'Zap' },
      { label: 'Retention', value: '92%', icon: 'TrendingUp' }
    ],
    launchDate: 'Mar 2025',
    status: 'launched',
    demoUrl: 'https://demo.example.com',
    features: [
      'Real-time messaging and video calls',
      'Kanban boards and sprint planning',
      'File storage with version control',
      'Time tracking and productivity insights',
      'Integration with 50+ tools (Slack, Jira, etc.)',
      'Mobile apps for iOS and Android'
    ]
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    tagline: 'Launch your online store in minutes',
    description: 'A fully-featured e-commerce solution that empowers entrepreneurs to build and scale their online businesses. From product management to payment processing, everything you need is included.',
    heroMedia: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    mediaType: 'image',
    techStack: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Vercel', 'Tailwind'],
    metrics: [
      { label: 'Stores', value: '1.2K+', icon: 'Users' },
      { label: 'Revenue', value: '$2M+', icon: 'TrendingUp' },
      { label: 'Conversion', value: '3.8%', icon: 'Zap' }
    ],
    launchDate: 'Oct 2024',
    status: 'launched',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    features: [
      'Beautiful storefront templates',
      'Inventory and order management',
      'Stripe and PayPal integration',
      'SEO optimization and analytics',
      'Discount codes and abandoned cart recovery',
      'Multi-currency support'
    ]
  }
];

const iconMap: Record<string, any> = {
  Users,
  TrendingUp,
  Zap
};

interface MVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MVPModal = ({ isOpen, onClose }: MVPModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = mvpProjects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % mvpProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + mvpProjects.length) % mvpProjects.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') nextProject();
    if (e.key === 'ArrowLeft') prevProject();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          onKeyDown={handleKeyDown as any}
          tabIndex={-1}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg" />
          
          {/* Animated background orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-cyan-500/30 transition-all"
            >
              <X className="w-6 h-6 text-cyan-400" />
            </motion.button>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevProject();
                }}
                className="pointer-events-auto p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-cyan-500/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextProject();
                }}
                className="pointer-events-auto p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-cyan-500/30 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </motion.button>
            </div>

            {/* Project Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                    currentProject.status === 'launched'
                      ? 'bg-green-500/20 border-green-500/50 text-green-400'
                      : currentProject.status === 'beta'
                      ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                      : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                  }`}>
                    {currentProject.status === 'launched' ? '🚀 Launched' : 
                     currentProject.status === 'beta' ? '🧪 Beta' : '🔨 Building'}
                  </span>
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {currentProject.launchDate}
                  </span>
                </div>

                {/* Hero Media */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="relative h-80 mb-8 rounded-xl overflow-hidden border border-cyan-500/30"
                >
                  <img
                    src={currentProject.heroMedia}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    >
                      {currentProject.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-cyan-300"
                    >
                      {currentProject.tagline}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Metrics */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-4 mb-8"
                >
                  {currentProject.metrics.map((metric, idx) => {
                    const Icon = metric.icon ? iconMap[metric.icon] : TrendingUp;
                    return (
                      <div
                        key={idx}
                        className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-400 text-sm">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                  <p className="text-gray-300 leading-relaxed">{currentProject.description}</p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  {currentProject.demoUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      href={currentProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/30"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                  )}
                  {currentProject.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg font-medium border border-cyan-500/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  )}
                </motion.div>

                {/* Project Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {mvpProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'w-8 bg-cyan-400'
                          : 'w-2 bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
