import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
    const staggerDelay = 0.1;

    const splitText = (text: string) => {
        return text.split(' ').map((word, index) => (
            <motion.span
                key={index}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{ delay: index * staggerDelay }}
            >
                {word}{' '}
            </motion.span>
        ));
    };

    return (
        <div id="home" className="relative min-h-screen">
            {/* Backdrop Picture */}
            <div className="absolute inset-0 overflow-hidden top-[10%]">
                <img
                    src="/background-image.jpg" // Replace with your actual image
                    alt="Backdrop"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 top-[10%]">
                <div className="bg-red-600 bg-opacity-60 w-full h-full  flex items-center content-center p-10">
                    <div className="text-center text-white text-[2rem]">
                        {splitText(`
                        Where we bring the expertise, dedication, and a passion for quality craftsmanship together to redefine the world of steel fabrication.
                        `)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
