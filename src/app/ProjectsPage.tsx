// App.tsx
import React from 'react';
import Carousel from './components/Carousel'

const projects = [
    {
        image: "images/golden_gate.jpg", description:
            <Project title="Golden Gate Bridge"
                subtitle="Golden Gate Bridge Seismic Retrofit (Phase II) South Approach Structure"
                content="Furnish structural steel and plate fabrication for replacement and strengthening of members from Fort Point Arch to the Toll Plaza. Replacement of members in the Arch; Girder and Truss spans; Towers and Bents and Pylons involved approximately 5,000 tons of fabricated plate and structural steel fabricated to exacting specifications replicating and matching the existing bridge members."
            />
    },
    {
        image: "images/sf_oakland.jpg", description:
            <Project title="SF - Oakland Bay Bridge"
                subtitle="San Francisco Oakland Bay Bridge Seismic Upgrade Skyway Replacement Project"
                content="XKT Engineering provided handling, fabrication, splicing, and loading 57,000 ton of steel casing 2.5M diameter x 100M long with wall thickness of up to 3 inch; loaded in two sections to customer barges at our Mare Island facility. Each completed casing section weighed up to 230 tons. 320 sections are required to make a total of 160 steel casing."
            />
    },
    {
        image: "images/richmond.jpg", description:
            <Project title="Richmond - San Rafael Bridge"
                subtitle="Richmond San Rafael Bridge Seismic Retrofit Project"
                content="Assembled ten thousand tons of fabricated substructure members for the bents and towers at XKT's Mare Island dock staging area prior to loading on barges for transport and erection of full size frames at the Richmond San Rafael Bridge in San Francisco Bay. This project also involved furnishing, fabricating and delivering cover plates for existing tower members; providing 12, 14 and 16 inch diameter pipe piling in full lengths up to 192 feet.; Column Restrainer Brackets; Reaction Collars and miscellaneous fabricated pieces."
            />
    },
    {
        image: "images/SFO.jpg", description:
            <Project title="SFO"
                subtitle="Main Roof Trusses for the new International Terminal at San Francisco International Airport"
                content={`Architectural roof trusses are 700' wide with a 200' depth that spans the entrance to SFIA. The tubular sections are 2" thick, up to 20" in diameter and are supported on 4" thick cruciform columns. Overall weight is approximately 3,200 tons.

                Fabricated, pre-assembled, painted at our Mare Island , CA facility, the project was loaded onto barges in 100 ton lifts with our dockside crane. Thirty (30) barge loads were shipped through San Francisco Bay to the jobsite.`}
            />
    },
    {
        image: "images/south_bay.jpg", description:
            <Project title="South Bay Ocean Outfall Casing"
                subtitle="South Bay Ocean Outfall Casing and Riser Assembly with Offshore Work / Installation Platform and Driving Follower, San Diego Waste Water Treatment Plant"
                content={`The Riser Assembly, a 143'-0" long x 1-1/4" thick pipe with a 15' diameter head section was fabricated in one piece, with plugs, valves and piping installed. Concrete lining was partially installed into inaccessible areas prior to closure. Weight at loadout was approximately 300 tons.

                Final weight with concrete installed full length was in excess of 500 tons.
                
                Included in the assembly was a 14' -0" diameter 1'-1/2" thick casing enclosing the Riser, as well as a 126'-0" long, 13'-6" diameter 2-1/2" thick driving follower.
                
                The Work / Installation Platform was fabricated with a footprint of 55'-0" x 65'-0" x 100'-0". Fabricated 48" diameter piling were driven through the legs to secure the platform to the ocean floor. Decks, boat launching platforms, walkways, hand rails and a helideck were fabricated and loaded onto barges and shipped to the installation site 4 miles offshore San Diego, CA.`}
            />
    },
    {
        image: "images/pittsburg.jpg", description:
            <Project title="Pittsburg Shiploader"
                subtitle="Shiploader, Shuttle, Machinery House, Pittsburg, CA Marine Terminal"
                content={`
                The Shiploader consists of 235'-0" long plate girders fabricated, tested, painted and assembled into a 24'-0" wide bridge and includes a boom shuttle and a machinery house. All components were fabricated and installed prior to barge loadout. The completed assembly was the shipped from our Mare Island facility to the Pittsburg Marine Terminal for installation on preset foundations.

Delivered weight was approximately 300 tons.`}
            />
    },
    {
        image: "images/cape_canaveral.jpg", description:
            <Project title="Cape Canaveral AFS, FL"
                subtitle="Drive & Lifting Beams and EMI RF Shield, Launch Complex 40, Cape Canaveral Air Force Station, FL"
                content={`Fabricated steel hydraulic driven trucks designed to lift and level the 6,500 ton MST building, used to enclose the Titan IV Heavy Launch Vehicle prior to launch. Four trucks (one at each corner) were designed to move the MST at 50 fpm in a 50 knot head wind. Trucks were fabricated, outfitted and tested prior to rail shipment to Florida Launch Complex. Hydraulic power drive units, instrumentation and 6,000 psi stainless steel interconnecting piping were included in our scope of work.

Weight of each drive truck is approximately 125 tons.

EMI RF Shield and Hinge assembly 123'-0" long x 28'0" wide x 10'-0" deep was fabricated in two pieces with platform and stairs an integral part of the fabrication. The "doors" were shipped by over- dimensional trucks to Florida and joined together at the jobsite.  The Shield was outfitted for pneumatic opening/closing and seated on hinges we provided. Weight of each fabricated door section was approximately 100 tons.`}
            />
    },
]

interface ProjectProps {
    title: string,
    subtitle: string,
    content: string
}

function Project({ title, subtitle, content }: ProjectProps) {
    return (
        <div id="projects" className='p-5'>
            <div className=''>
                <h2 className='text-3xl font-bold py-2'>{title}</h2>
                <div className='text-lg font-bold py-2'>{subtitle}</div>
                <div>{content}</div>
            </div>
        </div>)
}

const ProjectsSection: React.FC = () => {
    return (
        <div>
            <Carousel projects={projects} />
        </div>
    );
};

export default ProjectsSection;

