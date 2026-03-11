import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Brain, Building2, Terminal } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const technologies = [
  {
    icon: ShieldCheck,
    title: 'Корпоративная безопасность',
    subtitle: 'Zero Trust Архитектура',
    description: 'Абсолютный контроль над данными. Все конфиденциальные обсуждения остаются строго внутри компании.',
    metrics: [
      '100% приватность данных',
      'Никаких утечек в интернет',
      'Полный контроль доступа'
    ],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-600',
    metricsColor: 'text-blue-500',
    borderColor: 'hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10',
    code: `import { WaveEngine } from '@wave/core';\n\nconst engine = new WaveEngine({\n  security: 'zero-trust',\n  encryption: 'AES-256'\n});\n\nawait engine.start();`,
    langColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Рост продуктивности',
    description: 'Избавьте команду от рутины. ИИ автоматически берет на себя протоколирование и формирование задач.',
    metrics: [
      '-4 часа/нед на отчеты',
      'Мгновенная постановка задач',
      'Фокус на важных решениях'
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-600',
    metricsColor: 'text-emerald-500',
    borderColor: 'hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10',
    code: `const workflow = new WorkflowBuilder()\n  .trigger('meeting_end')\n  .action('generate_summary')\n  .action('create_tickets')\n  .build();\n\nworkflow.deploy();`,
    langColor: 'text-emerald-400',
  },
  {
    icon: Brain,
    title: 'Передовой AI-Движок',
    subtitle: 'Мощные персональные нейросети',
    description: 'Мы используем алгоритмы, настроенные под ваш бизнес. Они не просто пишут текст, а глубоко анализируют контекст встреч.',
    metrics: [
      'Высокая точность анализа',
      'Понимание бизнес-контекста',
      'Интеллектуальная аналитика'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-600',
    metricsColor: 'text-purple-500',
    borderColor: 'hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10',
    code: `const model = await WaveAI.load('enterprise-v4');\n\nconst analysis = await model.analyze({\n  context: meeting.transcript,\n  focus: ['decisions', 'action_items']\n});`,
    langColor: 'text-purple-400',
  },
];

export function TechStack() {
  return (
    <section className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-ocean-start/10 text-ocean-start mb-4">
            Передовые технологии
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Инновации для вашего бизнеса
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Инструменты, которые сокращают издержки, защищают данные и ускоряют работу команды с помощью ИИ.
          </p>
        </ScrollReveal>

        {/* Tech Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {technologies.map((tech, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`bento-card card-hover relative overflow-hidden group h-full ${tech.borderColor}`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${tech.gradient}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tech.iconColor} bg-white shadow-sm`}>
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                      <p className={`text-sm font-medium ${tech.iconColor}`}>{tech.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Code Preview */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-900">
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                      <div className="flex items-center gap-1.5 ml-2">
                        <Terminal className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500 font-mono">{tech.title.toLowerCase()}</span>
                      </div>
                    </div>

                    {/* Code content */}
                    <div className="p-3 overflow-x-auto">
                      <pre className="text-xs font-mono leading-relaxed">
                        <code className={tech.langColor}>
                          {tech.code}
                        </code>
                      </pre>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-start/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-ocean-start/5 to-ocean-deep/5 blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional info */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="bento-card hover:border-ocean-start hover:shadow-xl hover:shadow-ocean-start/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-ocean flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Корпоративный стандарт</h4>
                  <p className="text-sm text-gray-600">Готовое решение для вашего бизнеса</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-ocean-text">100%</div>
                  <div className="text-xs text-gray-500">Приватно</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-ocean-text">24/7</div>
                  <div className="text-xs text-gray-500">Доступность</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
