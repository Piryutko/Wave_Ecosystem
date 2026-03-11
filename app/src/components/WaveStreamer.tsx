import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function WaveStreamer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 top-0 w-full h-full pointer-events-none z-10 overflow-hidden"
      style={{ opacity: 0.6 }}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 4000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background wave - subtle */}
        <motion.path
          d="M100,0 
             C150,200 50,400 100,600 
             C150,800 50,1000 100,1200
             C150,1400 50,1600 100,1800
             C150,2000 50,2200 100,2400
             C150,2600 50,2800 100,3000
             C150,3200 50,3400 100,3600
             C150,3800 50,4000 100,4000"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          strokeOpacity="0.2"
          fill="none"
          filter="url(#waveGlow)"
        />

        {/* Main animated wave */}
        <motion.path
          d="M100,0 
             C150,200 50,400 100,600 
             C150,800 50,1000 100,1200
             C150,1400 50,1600 100,1800
             C150,2000 50,2200 100,2400
             C150,2600 50,2800 100,3000
             C150,3200 50,3400 100,3600
             C150,3800 50,4000 100,4000"
          stroke="url(#waveGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#waveGlow)"
          style={{
            pathLength,
            strokeLinecap: 'round',
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Glow orb that follows the wave */}
        <motion.circle
          r="8"
          fill="url(#waveGradient)"
          filter="url(#waveGlow)"
          style={{
            opacity: glowOpacity,
          }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M100,0 
                  C150,200 50,400 100,600 
                  C150,800 50,1000 100,1200
                  C150,1400 50,1600 100,1800
                  C150,2000 50,2200 100,2400
                  C150,2600 50,2800 100,3000
                  C150,3200 50,3400 100,3600
                  C150,3800 50,4000 100,4000"
          />
        </motion.circle>
      </svg>
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top right orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom left orb */}
      <motion.div
        className="absolute top-[60%] -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle right orb */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
