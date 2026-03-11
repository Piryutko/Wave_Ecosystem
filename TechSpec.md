好的设计是尽可能少的设计。
# Wave Ecosystem — Техническое задание

## 1. Архитектура проекта

### Структура
```
app/
├── src/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhyWave.tsx
│   │   ├── Products.tsx
│   │   ├── TechStack.tsx
│   │   └── FooterCTA.tsx
│   ├── components/
│   │   ├── WaveStreamer.tsx
│   │   ├── BentoCard.tsx
│   │   ├── FeatureIcon.tsx
│   │   ├── ProductCard.tsx
│   │   ├── TechCard.tsx
│   │   ├── GradientButton.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   └── useInView.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

### Технологии
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS 3.4
- Framer Motion (animations)
- Lucide React (icons)
- Google Fonts (Plus Jakarta Sans)

---

## 2. Компоненты

### WaveStreamer
**Purpose:** Анимированная синусоида, соединяющая секции
**Props:** `progress: number` (0-1)
**Implementation:**
- SVG path с синусоидой
- stroke-dasharray анимация
- Gradient stroke
- Glow filter

### BentoCard
**Purpose:** Универсальная карточка для Bento Grid
**Props:** `title, description, icon, gradient, size ('sm' | 'md' | 'lg')`
**Features:**
- Rounded-3xl corners
- Hover lift effect
- Gradient border on hover
- Scroll reveal animation

### ProductCard
**Purpose:** Карточка продукта с расширенными возможностями
**Props:** `product: ProductData`
**Features:**
- Tag badge
- Feature list
- Mode pills (для ToneWave)
- Visual preview area

### ScrollReveal
**Purpose:** Wrapper для анимации появления при скролле
**Props:** `children, delay, direction`
**Implementation:** Framer Motion + Intersection Observer

---

## 3. Анимации (Framer Motion)

### Page Load Sequence
```
1. Hero badge: fadeIn (delay: 0)
2. Hero title: fadeIn + slideUp (delay: 0.1)
3. Hero subtitle: fadeIn + slideUp (delay: 0.2)
4. CTA buttons: fadeIn + slideUp (delay: 0.3, stagger: 0.1)
```

### Scroll Reveal
```
initial: { opacity: 0, y: 40 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
```

### Wave Streamer
```
Continuous: strokeDashoffset animation (3s loop)
Scroll-linked: progress tied to scroll position
Glow: filter blur on active section
```

### Hover Effects
```
Card: { y: -4, boxShadow: 'increased' }
Button: { scale: 1.02, boxShadow: 'increased' }
```

---

## 4. Стили (Tailwind)

### Custom Colors
```javascript
// tailwind.config.js
colors: {
  ocean: {
    start: '#2DD4BF',
    mid: '#0EA5E9',
    deep: '#1E3A8A',
  },
  surface: {
    DEFAULT: '#F8F9FB',
    elevated: '#FFFFFF',
  }
}
```

### Custom Utilities
```css
.gradient-ocean {
  background: linear-gradient(135deg, #2DD4BF 0%, #0EA5E9 50%, #1E3A8A 100%);
}

.glow-ocean {
  box-shadow: 0 0 40px rgba(45, 212, 191, 0.3);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}
```

---

## 5. Зависимости

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

---

## 6. План реализации

### Phase 1: Setup
1. Initialize project with Vite + React + TS
2. Install Tailwind CSS
3. Install Framer Motion + Lucide
4. Setup Google Fonts

### Phase 2: Core Components
1. Create WaveStreamer component
2. Create BentoCard component
3. Create ScrollReveal wrapper
4. Create GradientButton

### Phase 3: Sections
1. Hero section with animations
2. WhyWave section with feature cards
3. Products Bento Grid
4. TechStack section
5. Footer CTA

### Phase 4: Polish
1. Add scroll-linked wave animation
2. Fine-tune all transitions
3. Responsive adjustments
4. Performance optimization

### Phase 5: Build & Deploy
1. Production build
2. Asset optimization
3. Deploy

---

## 7. Performance Considerations

- Use `will-change` on animated elements
- Lazy load sections below fold
- Optimize SVG paths
- Use CSS transforms instead of layout properties
- Add `prefers-reduced-motion` support
