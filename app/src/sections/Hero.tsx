import { motion } from 'framer-motion';
import { Clock, CheckSquare, MessageCircle, Sparkles } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-20 pb-16 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 212, 191, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 212, 191, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-20 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-start opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ocean-start"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">Wave Ecosystem</span>
            <Sparkles className="w-4 h-4 text-ocean-start" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
        >
          <span className="gradient-ocean-text">Wave.</span>{' '}
          <span className="text-gray-800">Экосистема</span>
          <br />
          <span className="text-gray-700">ИИ-инструментов</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Забудьте о компромиссах между удобством нейросетей и безопасностью данных.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Проекты семейства Wave работают полностью локально, обеспечивая 100% конфиденциальность
          с помощью передовых моделей Ollama.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://timewave-ai.netlify.app/"
            target="_blank" rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg shadow-ocean-start/25 transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: 'linear-gradient(135deg, #2DD4BF 0%, #0EA5E9 100%)',
            }}
          >
            <Clock className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Попробовать TimeWave</span>
          </motion.a>

          <motion.a
            href="https://taskwave-ai.netlify.app/"
            target="_blank" rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-ocean-start/50 hover:shadow-md transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <CheckSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Попробовать TaskWave</span>
          </motion.a>

          <motion.a
            href="https://tonewave-ai.netlify.app/"
            target="_blank" rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-ocean-start/50 hover:shadow-md transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Попробовать ToneWave</span>
          </motion.a>
        </motion.div>

        {/* Stats or trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>100% Приватно</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-ocean-start"></div>
            <span>Ollama интеграция</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-ocean-mid"></div>
            <span>Whisper распознавание</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
