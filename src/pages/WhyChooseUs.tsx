import Benefits from "../components/Benefits";
import shapeone from '../assets/shapeone.svg';
import shapetwo from '../assets/shapetwo.svg';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';

const WhyChooseUs = () => {

    const whychooseusRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(whychooseusRef, { threshold: 0.05 });

    return (
        <div ref={whychooseusRef} className="sectionblock shapeanchor">
            <h1 className={clsx(isIntersecting && "animate__animated animate__fadeInUp", "sectionhead")}> Why Choose Us? </h1>
            <div className="shapeone">
                <img src={shapeone} alt="Random shapes" />
            </div>
            <div className="shapetwo">
                <img src={shapetwo} alt="Random shapes" />
            </div>
            <Benefits />
        </div>
    )
}

export default WhyChooseUs