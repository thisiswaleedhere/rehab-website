import AutoScrollBig from "../components/AutoScrollBig";
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';

const TechniqueScroll = () => {

    const techniqueRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(techniqueRef, { threshold: 0.1 });

    return (
        <div ref={techniqueRef} className="sectionblock">
            <h1 className={clsx(isIntersecting && "animate__animated animate__fadeInUp", "sectionhead")}> Techniques and Approaches</h1>
            <AutoScrollBig />
        </div>
    )
}

export default TechniqueScroll