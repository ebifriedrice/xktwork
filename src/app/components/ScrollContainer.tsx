import { ReactNode, useEffect, useRef } from "react";
import {useAnimation, useMotionValue} from "framer-motion";

interface ScrollContainerProps {
    children: ReactNode;
}

function ScrollContainer({children}: ScrollContainerProps) {
    const containerRef = useRef<HTMLDivElement|null>(null);
    const controls = useAnimation();
    const scrollY = useMotionValue(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        controls.start({
            y: -container.scrollTop,
            transition: {duration: 0.5, ease: 'linear'},
        });

        const updateScrollY = () => {scrollY.set(container.scrollTop)}

        container.addEventListener('scroll', updateScrollY);

        return () => {
            container.removeEventListener('scroll', updateScrollY);
        }

   }, [containerRef, controls, scrollY]);


    return (
    <div
    ref={containerRef}
    className = "scroll-container scrollbar-hide w-full h-screen overflow-y-scroll snap-y snap-mandatory relative"
    >
        {children}
    </div>
    );
}

export default ScrollContainer
