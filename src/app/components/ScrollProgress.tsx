import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const scrollY = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateScrollY = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / documentHeight) * 100;
      scrollY.set(scrollProgress);
    };

    const handleResize = () => {
      controls.start({ opacity: window.scrollY > 0 ? 1 : 0 });
    };

    updateScrollY(); // Initial update
    window.addEventListener('scroll', updateScrollY);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', updateScrollY);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollY, controls]);

  return (
    <div>
    <motion.div
      className="fixed top-0 left-0 w-full z-100 h-2 bg-blue-500"
      style={{ scaleX: scrollY }}
      animate={controls}
    />
    </div>
  );
};

export default ScrollProgressIndicator;