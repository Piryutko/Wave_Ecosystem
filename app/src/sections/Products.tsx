import { motion } from 'framer-motion';
import { Clock, CheckSquare, MessageCircle, Mic, FileText, ListTodo, Sparkles, Cpu, Radio } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const modes = [
  { name: 'PROFESSIONAL', className: 'professional', desc: 'Деловой стиль' },
  { name: 'KIND', className: 'kind', desc: 'Эмпатичная подача' },
  { name: 'TECHNICAL', className: 'technical', desc: 'Сухие факты' },
  { name: 'LACONIC', className: 'laconic', desc: 'Сжатая мысль' },
];

export function Products() {
  return (
    <section className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-ocean-start/10 text-ocean-start mb-4">
            Продукты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Три инструмента. Одна экосистема.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Каждый продукт решает конкретную задачу, работая как единый облачный сервис
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://timewave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 hover:bg-[#0EA5E9]/20 transition-colors"
            >
              <Clock className="w-4 h-4" />
              TimeWave
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://taskwave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              <CheckSquare className="w-4 h-4" />
              TaskWave
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://tonewave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              ToneWave
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.15}>

          {/* TimeWave AI - Large Card */}
          <StaggerItem className="lg:col-span-2">
            <motion.a
              id="timewave"
              href="https://timewave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bento-card card-hover relative overflow-hidden group block cursor-pointer transition-all hover:border-ocean-start hover:shadow-xl hover:shadow-ocean-start/10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-ocean-start/20 to-ocean-mid/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-ocean-start" />
                    </span>
                    <span className="text-sm font-medium text-ocean-start">Time Management</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    TimeWave AI
                  </h3>
                  <p className="text-lg text-ocean-mid font-medium mb-4">
                    Интеллектуальное управление вашими встречами
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Превратите хаос многочасовых созвонов в четкие и структурированные итоги.
                    TimeWave AI анализирует транскрипции ваших встреч, автоматически составляя
                    краткие резюме и извлекая важнейшие задачи.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: Mic, text: 'Умная обработка многочасовых транскрипций' },
                      { icon: ListTodo, text: 'Автоматическое создание списков задач' },
                      { icon: FileText, text: 'Экспорт готовых, структурированных саммари' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-ocean-start/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3 h-3 text-ocean-start" />
                        </div>
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2DD4BF] to-[#0EA5E9] group-hover:shadow-lg group-hover:shadow-ocean-start/25 transition-all w-full sm:w-auto mt-2"
                  >
                    <span>Перейти к TimeWave</span>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative h-64 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-start/10 via-ocean-mid/5 to-ocean-deep/10 rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated wave visualization */}
                      <svg className="w-48 h-32" viewBox="0 0 200 100">
                        <motion.path
                          d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50"
                          stroke="url(#timeGradient)"
                          strokeWidth="3"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path
                          d="M0,60 Q25,30 50,60 T100,60 T150,60 T200,60"
                          stroke="url(#timeGradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeOpacity="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <defs>
                          <linearGradient id="timeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2DD4BF" />
                            <stop offset="100%" stopColor="#0EA5E9" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Floating cards */}
                      <motion.div
                        className="absolute -top-4 -left-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs font-medium text-gray-700">Summary</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <div className="flex items-center gap-2">
                          <CheckSquare className="w-3 h-3 text-ocean-start" />
                          <span className="text-xs font-medium text-gray-700">5 tasks</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </StaggerItem>

          {/* TaskWave AI */}
          <StaggerItem>
            <motion.a
              id="taskwave"
              href="https://taskwave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bento-card card-hover relative overflow-hidden group h-full block cursor-pointer transition-all hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-indigo-600" />
                  </span>
                  <span className="text-sm font-medium text-indigo-600">Project Manager</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  TaskWave AI
                </h3>
                <p className="text-base text-indigo-600 font-medium mb-3">
                  Интеллектуальный AI Project Manager
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Слушает встречи — создаёт документацию. Забудьте о ручном написании тасок
                  после звонков с командой.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Mic, text: 'Распознавание аудио полностью офлайн' },
                    { icon: Cpu, text: 'Двухшаговый AI-конвейер' },
                    { icon: ListTodo, text: 'Генерация структурированных эпиков' },
                    { icon: Radio, text: 'Интерактивный Live-прогресс' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Whisper', 'Ollama', 'SSE'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all w-full sm:w-auto"
                >
                  <span>Перейти к TaskWave</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 blur-3xl" />
            </motion.a>
          </StaggerItem>

          {/* ToneWave AI */}
          <StaggerItem>
            <motion.a
              id="tonewave"
              href="https://tonewave-ai.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bento-card card-hover relative overflow-hidden group h-full block cursor-pointer transition-all hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div>
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </span>
                  <span className="text-sm font-medium text-emerald-600">Communication</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ToneWave AI
                </h3>
                <p className="text-base text-emerald-600 font-medium mb-3">
                  Ваш личный ИИ-дипломат
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Оцифруйте эмоции в конструктив. Мгновенно трансформируйте резкие тексты
                  в профессиональные, сохраняя их изначальный смысл.
                </p>

                {/* Mode pills */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Режимы трансформации
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {modes.map((mode) => (
                      <motion.div
                        key={mode.name}
                        whileHover={{ scale: 1.05 }}
                        className={`mode-pill ${mode.className} cursor-pointer`}
                        title={mode.desc}
                      >
                        {mode.name}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="mt-4 mb-6 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-medium text-gray-600">Пример трансформации</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 line-through decoration-red-400">
                      "Это вообще не работает, переделывай!"
                    </p>
                    <p className="text-xs text-gray-700">
                      "Текущая реализация требует доработки. Предлагаю обсудить улучшения."
                    </p>
                  </div>
                </div>

                <div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all w-full sm:w-auto"
                >
                  <span>Перейти к ToneWave</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-3xl" />
            </motion.a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
