import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Hero } from './sections/Hero';
import { WhyWave } from './sections/WhyWave';
import { Products } from './sections/Products';
import { TechStack } from './sections/TechStack';
import { FooterCTA } from './sections/FooterCTA';
import { Footer } from './sections/Footer';
import { FloatingOrbs } from './components/WaveStreamer';
import { Waves } from 'lucide-react';
import './App.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 100;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-ocean flex items-center justify-center">
                  <Waves className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">Wave</span>
              </a>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-6">
                <a href="https://timewave-ai.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  TimeWave
                </a>
                <a href="https://taskwave-ai.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  TaskWave
                </a>
                <a href="https://tonewave-ai.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  ToneWave
                </a>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-ocean hover:shadow-lg hover:shadow-ocean-start/25 transition-all duration-300"
              >
                Начать
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-surface flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-ocean flex items-center justify-center mb-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-ocean"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navigation />

        {/* Background Effects */}
        <FloatingOrbs />

        {/* Main Content */}
        <main className="relative z-20">
          <Hero />
          <WhyWave />
          <Products />
          <TechStack />
          <FooterCTA />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}

export default App;
