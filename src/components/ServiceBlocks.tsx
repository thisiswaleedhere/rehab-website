import { serviceData } from '../utils/serviceData.ts';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';


function ServiceBlocks() {

    const servicesRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(servicesRef, { threshold: 0.06 });

    return (
        <div ref={servicesRef} className="content-grid">
            <div className="grid-auto-fit servicegrid">
                {serviceData.map((service, index) => {
                    return (
                        <div
                            className={clsx('servicecard', (isIntersecting && (index % 2 !== 0)) && 'animate__animated animate__fadeInRight', (isIntersecting && (index % 2 === 0)) && 'animate__animated animate__fadeInLeft',)}
                            key={index} >
                            <img loading='lazy' src={service.icon} alt="" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    )
                })}


            </div>

        </div >
    )
}

export default ServiceBlocks
// clsx({isIntersecting ? "animate__animated animate__fadeInRight servicecard" : "servicecard"})