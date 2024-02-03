import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const AboutPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <motion.div
                className=" absolute top-[209%] w-full max-w-screen-lg mx-auto p-10 lg:p-20"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <SectionRight title="Fabricating" content={
                    <div className="text-md">
                        XKT Engineering is accustomed to precise and close tolerance work. We have designed, fabricated and installed numerous structures for marine, military and general industry needs. As a result of this experience in both commercial and defense contracts, we are accustomed to manufacturing a variety of fabrications which require extensive documentation. Our performance on such contracts qualifies us to produce structures of the highest quality with complete traceability.
                    </div>
                } />

                <SectionLeft title="Welding" content={
                    <div className="text-md">
                        Our welding experience is substantial. We do ferrous, non-ferrous and bimetal welding. Our processes include GMAW, FCAW, SMAW and SAW. Our strength lies in welding know-how from joint design through metal disposition. Our craftsmen routinely weld large and small steel components to precise tolerances. We also weld stainless steel and dissimilar metals while meeting every N.D.T. requirement. Our shop is staffed by highly qualified personnel operation the most modern welding equipment available. We routinely meet the requirements of AWS and ASME welding codes.
                    </div>
                } />

                <SectionRight title="Engineering" content={
                    <div className="text-md">
                        Our engineers have many years of practical experience in the application of structural and mechanical engineering design and installation, extensive experience in custom design of hydraulic circuitry, heavy machinery and systems, and support equipment for industrial, marine and defense applications. At XKT we can build to a client's drawings, provide analysis of a customer's design or handle complete design and fabrication functions to strict specifications.
                    </div>
                } />

                {/* Add more sections as needed */}
            </motion.div>
        </div>
    );
};

interface SectionProps {
    title: string;
    content: ReactNode;
}

const SectionLeft: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <div className="flex flex-col lg:flex-row mb-5">
            <motion.div className="lg:w-2/3" variants={sectionVariants}>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <div>{content}</div>
            </motion.div>
            <div className="lg:w-1/3"></div>
        </div>
    );
};

const SectionRight: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <div id="services" className="flex flex-col lg:flex-row mb-5">
            <div className="lg:w-1/3"></div>
            <motion.div className="lg:w-2/3" variants={sectionVariants}>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <div>{content}</div>
            </motion.div>
        </div>
    );
};

export default AboutPage;