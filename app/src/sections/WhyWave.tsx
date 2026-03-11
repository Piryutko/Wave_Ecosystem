import { motion } from 'framer-motion';
import { Shield, Zap, Palette, Brain } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'Абсолютная приватность',
    description: 'Все вычисления происходят на вашем устройстве. Никакой отправки данных в сторонние облака.',
    gradient: 'from-emerald-400/20 to-teal-500/20',
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10',
  },
  {
    icon: Zap,
    title: 'Мгновенный отклик',
    description: 'Использование технологии Server-Sent Events (SSE) для стриминга токенов в реальном времени.',
    gradient: 'from-amber-400/20 to-orange-500/20',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10',
  },
  {
    icon: Palette,
    title: 'Современный дизайн',
    description: 'Реактивные интерфейсы на SvelteKit, Glassmorphism и плавные анимации.',
    gradient: 'from-purple-400/20 to-pink-500/20',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10',
  },
  {
    icon: Brain,
    title: 'Передовые ИИ-модели',
    description: 'Оптимизировано для работы с мощными нейросетями для достижения наилучшего результата.',
    gradient: 'from-blue-400/20 to-cyan-500/20',
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10',
  },
];

export function WhyWave() {
  return (
    <section className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-ocean-start/10 text-ocean-start mb-4">
            Почему Wave?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Общие преимущества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Все продукты экосистемы Wave построены на единых принципах безопасности и производительности
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-full"
              >
                <div className={`bento-card h-full flex flex-col card-hover relative overflow-hidden transition-all duration-300 ${feature.borderColor}`}>
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`feature-icon mb-5 ${feature.iconColor}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-ocean-start/5 to-ocean-deep/5 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom highlight */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-ocean-start animate-pulse"></div>
              <span>Безопасное хранение данных</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-ocean-mid animate-pulse"></div>
              <span>Без подписок и API-ключей</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-ocean-deep animate-pulse"></div>
              <span>Open Source</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
