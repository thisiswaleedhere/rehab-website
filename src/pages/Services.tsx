import ServiceBlocks from "../components/ServiceBlocks";
import shapeone from '../assets/shapeone.svg';
import shapetwo from '../assets/shapetwo.svg';
import shapethree from '../assets/shapethree.svg';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';



const Services = () => {

    const serviceRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(serviceRef, { threshold: 0.1 });

    return (
        <div ref={serviceRef} id="services" className="sectionblock shapeanchor">
            <h1 className={clsx(isIntersecting && "animate__animated animate__fadeInUp", "sectionhead")}>Services we offer</h1>
            <div className="shapeone">
                <img src={shapeone} alt="Random shapes" />
            </div>
            <div className="shapetwo">
                <img src={shapetwo} alt="Random shapes" />
            </div>
            <div className="shapethree">
                <img src={shapethree} alt="Random shapes" />
            </div>
            <ServiceBlocks />
        </div>
    )
}

export default Services