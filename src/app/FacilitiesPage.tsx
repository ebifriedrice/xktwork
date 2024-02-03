import React, { ReactNode } from 'react';
import ImageGallery from './components/ImageGallery';

const images = Array.from({length: 8}, (x,i) => `facility/${i+1}.jpg`)

const FacilitiesSection: React.FC = () => {
    return (
        <div id="facility" className="absolute w-full top-[415%] h-screen p-10 lg:p-28 ">
            <SectionRight content={
                <div>
                    <h2 className="text-3xl font-bold">Facility</h2>
                    <br/>
                    <br/>
                    XKT Engineering's plant consists of fabrication and assembly bays with 200,000 square feet under roof situated on approximately 19 acres. Included in this space is a 35,000 square foot, full service machine shop. Overhead cranes and mobile equipment provide for ease of lifting raw materials, component parts and completed fabrication.
                    <br />
                    <br />
                    We are serviced by all major trucking companies, rail service into the facility and direct access to the Mare Island Straits and San Francisco Bay for barge movements.

                    <br />
                    <br />
                    XKT's dock area consist of a 546'-0" long reinforced pier serviced by a 100 ton derrick barge and a 100 ton portal crane. Laydown and assembly areas approximately 4.5 acres.
                    <br />
                    <br />
                    Our marine division has 5 barges, each approximately 33'-0" x 110'-0", available for delivery of marine based projects. These barges are also available for charter.
                </div>} />
        </div>
    );
};

interface SectionProps {
    content: ReactNode
}

const SectionRight: React.FC<SectionProps> = ({ content }) => {
    return (
        <div className="flex flex-col lg:flex-row mb-5">
            <div className="lg:w-1/2 hidden lg:block"><ImageGallery images={images} /></div>
            <div className="lg:w-1/2">{content}</div>
        </div>
    );
};

export default FacilitiesSection;


