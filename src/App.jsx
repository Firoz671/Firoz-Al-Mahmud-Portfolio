import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
const Skills = lazy(() => import('./sections/Skills'));
import SkillsSkeleton from './components/ui/SkillsSkeleton';

const LazySection = ({ children, fallback, minHeight = "800px" }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' } // Pre-load slightly before scrolling to it
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : minHeight }}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};
import Projects from './sections/Projects';
import Education from './sections/Education';
import Impact from './sections/Impact';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // High-performance cursor tracking using Framer Motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen font-sans antialiased transition-colors duration-500">

      {/* Scroll Progress Indicator - sharp editorial style */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Premium Custom Cursor (Hidden on mobile) */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.2 : 0.8,
          backgroundColor: isHovering ? "transparent" : "#1c1c1c",
          border: isHovering ? "1px solid #1c1c1c" : "none"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[999] hidden md:block"
      />

      {/* Removed Abstract Background Elements and Noise Overlay for clean editorial look */}

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <LazySection fallback={<SkillsSkeleton />}>
            <Skills />
          </LazySection>
          <Projects />
          <Impact />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
