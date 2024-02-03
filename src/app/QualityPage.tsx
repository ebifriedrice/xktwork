import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './components/ScrollIndicator';

const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const QualityPage: React.FC = () => {
    return (
        <div id="about" className="flex items-center justify-center bg-gray-100">
            <motion.div
                className=" absolute top-[110%] w-full max-w-screen-lg mx-auto p-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <Section title={<h2 className="text-3xl font-bold py-5">About Us</h2>} content={
                    <div>
                    We are steel fabricators who bring together the experience, expertise and dedication to quality necessary to produce superior fabricated metal products, machinery and equipment in a timely manner.
                    </div>
                }>

                </Section>
                <Section 
                title={<h2 className="text-xl font-bold py-4">A Commitment To Quality!</h2>} 
                content={
                    <div>
                            Every item XKT Engineering produces has diverse quality control requirements. Our Quality Control/Quality Assurance personnel are committed to seeing that all of our products and services meet or exceed our customers' quality requirements.
                            XKT Engineering has the experience, personnel, equipment and proven record in assuring quality welded fabrication and machinery. Our personnel bring with them experience in heavy structural steel, pressure vessels, power piping, vacuum chambers, hydraulic power units, bridge fabrication, piling, barge manufacturing, test fixtures and crane fabrication.
                            We are fully knowledgeable with AWS; AASTO; API 2B; API RP2A; AISC and other standard commercial specifications. Through numerous government and defense related projects, our personnel have become thoroughly familiar with many MIL-specs.
                            <br/>
                            <br/>
                            <b>
                            Currently held certifications:
                            </b>
                        <ul>
                            <li>ASME Section VIII, Division 1</li>
                            <li>AISC Cbd, Cbr, with F & P endorsements</li>
                            <li>MIL-Q-9858A</li>
                            <li>MIL-I-45208A</li>
                        </ul>
                    </div>} />

                <ScrollIndicator/>
            </motion.div>

        </div>
    );
};

interface SectionProps {
    title: ReactNode;
    content: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <div className="flex flex-col mb-8 items-center content-center">
            <motion.div className="lg:w-2/3" variants={sectionVariants}>
                <div>{title}</div>
                <div>{content}</div>
            </motion.div>
        </div>
    );
};

export default QualityPage;