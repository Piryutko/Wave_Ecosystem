import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Clock, CheckSquare, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function FooterCTA() {
  return (
    <section className="relative py-24 md:py-32 section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-95" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255,255,255,0)',
                '0 0 0 20px rgba(255,255,255,0.1)',
                '0 0 0 0 rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы взять контроль
            <br />
            над своими данными?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Начните использовать экосистему Wave сегодня и поднимите свою продуктивность
            на новый уровень без ущерба для приватности.
          </p>

          {/* Action Area (Big Button + Options) */}
          <div className="flex flex-col items-center gap-10">
            {/* Main Big CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-3 px-10 py-5 rounded-2xl font-bold bg-white text-gray-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-start/10 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative text-lg">Начать работу бесплатно</span>
              <BookOpen className="w-5 h-5 relative transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Product selection cards */}
            <div className="w-full max-w-3xl">
              <p className="text-white/60 text-sm font-medium mb-4 uppercase tracking-wider">Или выберите нужный инструмент:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* TimeWave */}
                <motion.a
                  href="https://timewave-ai.netlify.app/"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="flex flex-col items-center p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">TimeWave</h4>
                  <p className="text-xs text-white/70">AI-анализ встреч</p>
                </motion.a>

                {/* TaskWave */}
                <motion.a
                  href="https://taskwave-ai.netlify.app/"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="flex flex-col items-center p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CheckSquare className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">TaskWave</h4>
                  <p className="text-xs text-white/70">AI-таск менеджер</p>
                </motion.a>

                {/* ToneWave */}
                <motion.a
                  href="https://tonewave-ai.netlify.app/"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="flex flex-col items-center p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">ToneWave</h4>
                  <p className="text-xs text-white/70">Редактура эмоций</p>
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>
    </section>
  );
}
