# Motion Library Integration Plan

**Date:** November 10, 2025  
**Project:** clintandrewhall.com  
**Branch:** vite  
**Current State:** Analysis complete, ready for implementation

## Executive Summary

This document outlines the plan to integrate the Motion animation library into the website, replacing existing CSS animations, manual JavaScript animations, and the Rellax parallax library. The Motion library provides GPU-accelerated animations with built-in accessibility support that integrates seamlessly with our existing `useMotionPreferences` hook.

### Key Benefits
- **Performance:** 120fps GPU-accelerated animations vs current CSS transitions
- **Bundle Size:** Remove Rellax (~15KB) and simplify animation code
- **Accessibility:** Built-in `prefers-reduced-motion` support
- **Developer Experience:** Unified animation API vs mixed CSS/JS approaches
- **Advanced Features:** Spring physics, gesture support, layout animations, scroll-linked effects

### Library Stats
- **Package:** `motion` (not Framer Motion)
- **Size:** 386KB unpacked (tree-shakable)
- **Compatibility:** ✅ No known issues with Linaria
- **TypeScript:** ✅ Built-in type declarations
- **React Support:** ✅ First-class React integration

## Compatibility Assessment

### Motion + Linaria
**Status:** ✅ **Fully Compatible**

- Motion uses inline styles and CSS variables for animations
- Linaria extracts CSS at build time
- No conflicts between static (Linaria) and dynamic (Motion) styles
- Linaria issue #1417 relates to Framer Motion's styled components, not the Motion library

### Current Architecture Benefits
- Existing `useMotionPreferences` hook already implements motion preference detection
- Vite + Linaria configuration is well-optimized
- React Router setup supports Motion's animation patterns

## Prioritized Implementation Plan

---

## 🔴 Priority 1: High Impact, Low Effort

### 1.1 Replace Manual Fade Function
**File:** `src/App.tsx`

**Current Implementation:**
```typescript
function fade(element: HTMLElement, callback: (() => void) | null = null): void {
  let opacity = parseFloat(element.style.opacity);
  opacity -= 0.1;
  if (opacity < 0) {
    element.style.display = 'none';
    callback && callback();
  } else {
    setTimeout(() => fade(element, callback), 40);
  }
  element.style.opacity = `${opacity}`;
}
```

**Motion Replacement:**
```typescript
import { animate } from 'motion';

function fade(element: HTMLElement, callback?: () => void): void {
  animate(element, { opacity: 0 }, { 
    duration: 0.4,
    onComplete: callback 
  });
}
```

**Pros:**
- More performant (GPU-accelerated)
- Cleaner code
- Built-in callback support
- Respects motion preferences automatically

**Cons:**
- Requires Motion dependency

**Effort:** Low (30 min)  
**Impact:** Medium

---

### 1.2 GitHub Corner Animation
**File:** `src/components/github/corner.styles.ts`

**Current Implementation:**
```typescript
animation: octocat-wave 560ms ease-in-out;

@keyframes octocat-wave {
  0%, 100% { transform: rotate(0); }
  20%, 60% { transform: rotate(-25deg); }
  40%, 80% { transform: rotate(10deg); }
}
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';

<motion.svg
  whileHover={{
    rotate: [0, -25, 10, -25, 10, 0]
  }}
  transition={{ duration: 0.56, ease: "easeInOut" }}
>
```

**Pros:**
- Smoother animation with spring physics option
- Less code (remove keyframes CSS)
- More maintainable

**Cons:**
- Component needs conversion to Motion component

**Effort:** Low (1 hour)  
**Impact:** Low (polish)

---

### 1.3 Header Background Transition
**File:** `src/components/layout/header/header.styles.ts`

**Current Implementation:**
```typescript
transition: background-color 1s ease;
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';
import { useMotionPreferences } from '@lib/hooks';

const Header = ({ background }) => {
  const { shouldReduceMotion } = useMotionPreferences();
  
  return (
    <motion.header
      animate={{ 
        backgroundColor: background === 'opaque' ? '#000' : 'transparent' 
      }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 1,
        ease: 'easeInOut'
      }}
    />
  );
};
```

**Pros:**
- More control over animation
- Better accessibility integration
- Can add other animated properties easily

**Cons:**
- Component refactor required

**Effort:** Low-Medium (2 hours)  
**Impact:** Medium

---

## 🟡 Priority 2: Medium Impact, Medium Effort

### 2.1 Navigation Menu Animations
**File:** `src/components/layout/navigation/navigation.styles.ts`

**Current Implementation:**
```typescript
transform: translate3d(0, -100%, 0);
transition: 
  transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
  opacity 1s ease,
  background-color 1s ease;
```

**Motion Replacement:**
```tsx
import { motion, AnimatePresence } from 'motion/react';

const Navigation = ({ isOpen, isNarrow }) => (
  <AnimatePresence>
    {isNarrow && (
      <motion.nav
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ 
          y: isOpen ? 0 : '-100%',
          opacity: isOpen ? 1 : 0,
          backgroundColor: isOpen ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'
        }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
      >
        {/* menu items */}
      </motion.nav>
    )}
  </AnimatePresence>
);
```

**Pros:**
- Smoother spring-based animation
- Better mobile UX
- Declarative animation state
- Exit animations supported

**Cons:**
- Requires component restructure
- Need to handle open/close state properly

**Effort:** Medium (4 hours)  
**Impact:** High (user experience)

---

### 2.2 Navigation Button (Hamburger) Animation
**File:** `src/components/layout/navigation/navigation.styles.ts`

**Current Implementation:**
```typescript
&:before { transform: rotate(135deg); }
&:after { transform: rotate(225deg); }
transition: transform 0.5s ease-in-out;
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';

const HamburgerButton = ({ isOpen }) => (
  <button>
    <motion.span
      animate={{
        backgroundColor: isOpen ? 'transparent' : 'white'
      }}
    >
      <motion.span
        animate={{
          rotate: isOpen ? 135 : 0,
          top: isOpen ? 0 : -9
        }}
      />
      <motion.span
        animate={{
          rotate: isOpen ? 225 : 0,
          bottom: isOpen ? 0 : -9
        }}
      />
    </motion.span>
  </button>
);
```

**Pros:**
- Smooth transformation
- Easy to adjust timing per element
- Better visual feedback

**Cons:**
- Component structure change

**Effort:** Medium (3 hours)  
**Impact:** Medium

---

### 2.3 Portfolio Item Hover Effects
**File:** `src/components/portfolio/portfolio_item.styles.ts`

**Current Implementation:**
```typescript
transition: opacity 0.3s;

&:hover {
  &:before { opacity: 0.8; }
  > p, > footer { opacity: 1; }
  > p { top: var(${vars.spacing.step3}); }
  > footer { right: var(${vars.spacing.step5}); }
}
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';

const PortfolioItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        animate={{ 
          opacity: isHovered ? 1 : 0,
          top: isHovered ? 'var(--spacing-step3)' : 'var(--spacing-step7)'
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.footer
        animate={{ 
          opacity: isHovered ? 1 : 0,
          right: isHovered ? 'var(--spacing-step5)' : 'var(--spacing-step9)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
```

**Pros:**
- Smoother animations
- Better control over timing
- Can add stagger effects
- Pointer-events handled automatically

**Cons:**
- Significant component refactor
- Need to manage hover state

**Effort:** Medium (5 hours)  
**Impact:** High (visual polish)

---

### 2.4 Hero Section Fade-In
**File:** `src/components/home/Hero.module.css`

**Current Implementation:**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translate3d(0, -50%, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}

:global(html.loaded) .main {
  animation-duration: 1s;
  animation-name: fadeIn;
}
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';
import { useMotionPreferences } from '@lib/hooks';

const Hero = () => {
  const { shouldReduceMotion } = useMotionPreferences();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 1,
        ease: 'easeOut'
      }}
    >
      {/* content */}
    </motion.div>
  );
};
```

**Pros:**
- Remove CSS keyframes
- Better integration with React lifecycle
- More control over animation timing

**Cons:**
- Need to coordinate with page load event

**Effort:** Medium (3 hours)  
**Impact:** Medium

---

## 🟢 Priority 3: High Impact, High Effort

### 3.1 Replace Rellax with Motion Scroll Animations
**Files:** 
- `src/components/home/Home.tsx`
- `src/components/home/index.module.css`

**Current Implementation:**
```typescript
import Rellax from 'rellax';

Rellax('.rellax', { speed: -6 });
```

**Motion Replacement:**
```tsx
import { motion, useScroll, useTransform } from 'motion/react';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -600]);
  
  return (
    <motion.div
      style={{ y }}
      className="background"
    />
  );
};
```

**Pros:**
- Remove Rellax dependency (~15KB)
- More flexible scroll-based animations
- Better performance
- Integrated with React

**Cons:**
- Need to reimplement parallax logic
- May need to adjust scroll ranges
- Testing across different viewport sizes

**Effort:** High (8-10 hours)  
**Impact:** High (performance + bundle size)

**Dependencies:**
- Remove `rellax` from package.json
- Remove related CSS classes
- Update all components using `.rellax` class

---

### 3.2 Portfolio Grid with Stagger Animations
**Files:**
- `src/components/home/PortfolioSection.tsx`
- `src/components/portfolio/portfolio_item.tsx`

**Current Implementation:**
- Static grid with CSS transitions on hover

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';

const PortfolioSection = () => {
  const items = usePortfolioItems();
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <PortfolioItem item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};
```

**Pros:**
- Beautiful entrance animations
- Stagger effect improves perceived performance
- Better user engagement
- Can use IntersectionObserver for scroll-triggered animations

**Cons:**
- Complex implementation with masonry layout
- Need to coordinate with existing grid system
- Performance testing required with many items

**Effort:** High (10-12 hours)  
**Impact:** High (visual polish + engagement)

---

### 3.3 Page Transitions System
**Files:** Multiple route components

**Current Implementation:**
- No page transitions

**Motion Replacement:**
```tsx
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router';

const App = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} />
      </motion.div>
    </AnimatePresence>
  );
};
```

**Pros:**
- Smooth page transitions
- Better perceived performance
- Modern UX pattern

**Cons:**
- Complex implementation with React Router
- Need to handle scroll restoration
- May conflict with other animations
- Testing required

**Effort:** High (12-15 hours)  
**Impact:** Medium (polish, but not critical)

---

### 3.4 Testimonials Carousel Replacement
**Files:**
- `src/components/home/Testimonials.tsx`

**Current Implementation:**
```typescript
import { Swiper, SwiperSlide } from 'swiper/react';
```

**Motion Replacement:**
```tsx
import { motion, AnimatePresence } from 'motion/react';
import { wrap } from 'motion';

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonials = useTestimonials();
  
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const index = wrap(0, testimonials.length, page);
  
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={page}
        custom={direction}
        variants={{
          enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1
          },
          exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          })
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <Testimonial data={testimonials[index]} />
      </motion.div>
    </AnimatePresence>
  );
};
```

**Pros:**
- Remove Swiper dependency
- Native drag gestures
- More flexible animations
- Better integration with React

**Cons:**
- Complex implementation
- Need to reimplement pagination
- Need to reimplement touch gestures
- Extensive testing required

**Effort:** Very High (15-20 hours)  
**Impact:** Medium (functionality exists, this is optimization)

**Note:** Consider keeping Swiper unless there's a compelling reason to replace it. Swiper is battle-tested and handles many edge cases.

---

## 🔵 Priority 4: Nice to Have

### 4.1 Loading Animation
**File:** `src/css/main.css`

**Current Implementation:**
```css
@keyframes sk-scaleout {
  0% { transform: scale(0); }
  100% { transform: scale(1); opacity: 0; }
}
```

**Motion Replacement:**
```tsx
import { motion } from 'motion/react';

const Loader = () => (
  <motion.div
    animate={{
      scale: [0, 1],
      opacity: [1, 0]
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);
```

**Effort:** Low (1 hour)  
**Impact:** Low

---

### 4.2 Button Hover/Active States
**File:** `src/site/pages/home/hero/hero_header.styles.ts`

**Current Implementation:**
```typescript
transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
           background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
```

**Motion Replacement:**
```tsx
<motion.a
  whileHover={{ 
    backgroundColor: 'var(--color-light)',
    color: 'var(--color-dark)',
    scale: 1.05
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.25 }}
>
```

**Effort:** Low (2 hours across all buttons)  
**Impact:** Low (polish)

---

## Implementation Strategy

### Phase 1: Foundation (Week 1)
1. Install Motion library
2. Replace manual fade function (1.1)
3. Update GitHub corner animation (1.2)
4. Update header background transition (1.3)

**Deliverable:** Basic Motion integration with visible improvements

---

### Phase 2: Navigation (Week 2)
1. Navigation menu animations (2.1)
2. Hamburger button animation (2.2)
3. Testing across mobile/desktop

**Deliverable:** Improved navigation UX

---

### Phase 3: Content (Week 3-4)
1. Portfolio hover effects (2.3)
2. Hero section animations (2.4)
3. Portfolio grid stagger (3.2)

**Deliverable:** Enhanced content presentation

---

### Phase 4: Scroll & Advanced (Week 5-6)
1. Replace Rellax with Motion scroll (3.1)
2. Evaluate page transitions (3.3)
3. Evaluate testimonials replacement (3.4)

**Deliverable:** Complete animation system

---

### Phase 5: Polish (Week 7)
1. Loading animations (4.1)
2. Button states (4.2)
3. Performance optimization
4. Accessibility testing
5. Documentation

**Deliverable:** Production-ready implementation

---

## Technical Considerations

### Motion Preferences Integration
```tsx
import { MotionConfig } from 'motion/react';
import { useMotionPreferences } from '@lib/hooks';

const App = () => {
  const { shouldReduceMotion } = useMotionPreferences();
  
  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? 'always' : 'never'}>
      {/* app content */}
    </MotionConfig>
  );
};
```

### Performance Monitoring
- Monitor bundle size impact
- Test on low-end devices
- Measure FPS during animations
- Check memory usage with many animated elements

### Testing Checklist
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Mobile performance is acceptable
- [ ] Animations don't block user interaction
- [ ] No layout shift during animations
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

---

## Rollback Plan

If issues arise:
1. Motion is added as a standard dependency - can be removed
2. Keep old CSS/animations during transition
3. Feature flag new animations for gradual rollout
4. Git branches for each phase allow easy rollback

---

## Success Metrics

### Performance
- [ ] Maintain or improve Lighthouse score
- [ ] 60fps minimum during animations
- [ ] No janky scrolling
- [ ] Bundle size increase < 100KB (after removing Rellax)

### User Experience
- [ ] Smoother perceived performance
- [ ] Better mobile interaction
- [ ] Improved accessibility scores
- [ ] Positive user feedback

### Developer Experience
- [ ] Reduced animation code by ~30%
- [ ] Easier to maintain
- [ ] Better TypeScript integration
- [ ] Clearer animation patterns

---

## Resources

### Documentation
- [Motion Docs](https://motion.dev/docs)
- [Motion React Docs](https://motion.dev/docs/react-quick-start)
- [Motion Examples](https://motion.dev/examples)

### Key APIs to Learn
- `animate()` - Imperative animations
- `<motion.div>` - React component animations
- `useScroll()` - Scroll-linked animations
- `AnimatePresence` - Enter/exit animations
- `useTransform()` - Value transformation
- `useSpring()` - Spring physics

### Team Knowledge Sharing
- Document patterns as they're established
- Create reusable animation components
- Share common transition configurations
- Build animation design system

---

## Notes for Future Agents

### Context
This website uses:
- **Styling:** Linaria (CSS-in-JS, build-time)
- **Framework:** React + React Router
- **Build Tool:** Vite
- **Motion Preferences:** Already implemented via `useMotionPreferences` hook

### Key Files to Understand
- `src/lib/hooks/use_motion_preferences.ts` - Motion preference detection
- `src/theme/` - Design system with CSS variables
- `vite.config.ts` - Build configuration

### Animation Philosophy
- Animations should enhance, not distract
- Respect user preferences (reduce motion)
- Performance over fancy effects
- Mobile-first approach
- Accessibility is non-negotiable

### Common Patterns to Use
```tsx
// 1. Basic entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// 2. Hover animation
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// 3. Scroll-linked animation
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

<motion.div style={{ opacity }} />

// 4. Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

---

## Questions to Address

- [ ] Should we implement page transitions? (May affect SEO/initial load)
- [ ] Keep or replace Swiper for testimonials?
- [ ] Animation duration standards across site?
- [ ] Spring vs. tween defaults?
- [ ] Gesture support priority (drag, pinch, etc.)?

---

## Changelog

- **2025-11-10:** Initial analysis and planning document created
- **TBD:** Phase 1 implementation started
- **TBD:** Phase 1 completed
- ... (to be updated during implementation)
