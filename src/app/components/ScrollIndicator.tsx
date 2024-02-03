// ScrollToSeeMoreIndicator.tsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust this threshold as needed

      if (scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

    const handleButtonClick = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    };


  return (
    <motion.div
      className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
      onClick={() => handleButtonClick()}
      animate={controls}
    >
      Scroll to see more
    </motion.div>
  );
};

export default ScrollIndicator;