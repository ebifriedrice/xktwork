// Carousel.tsx
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    image: string;
    description: ReactNode;
}

interface CarouselProps {
    projects: Project[]
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={projects[currentIndex].image}
                        alt={`Image ${currentIndex + 1}`}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 lg:left-2/3 right-0 bottom-0 flex flex-col items-center justify-center bg-red-600 bg-opacity-50">
                        <p className="text-white text-lg">{projects[currentIndex].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

                <div className="text-white text-5xl absolute bottom-8 right-20 transform -translate-y-1/2 cursor-pointer">
                    <button onClick={handlePrev}>&#8249;</button>
                </div>
                <div className=" text-white text-5xl absolute bottom-8 right-8 transform -translate-y-1/2 cursor-pointer">
                    <button onClick={handleNext}>&#8250;</button>
                </div>
        </div>
    );
};

export default Carousel;