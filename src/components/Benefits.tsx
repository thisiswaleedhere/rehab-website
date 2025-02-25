import { benefitList } from '../utils/benefitList';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';

const Benefits = () => {

    const benefitsRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(benefitsRef, { threshold: 0.1 });

    return (
        <div ref={benefitsRef} className="content-grid benefits">
            <div className='grid-flow'>
                {benefitList.map((benefit) => (
                    <div key={benefit.id}
                        className={clsx('benefitcard', (isIntersecting && (benefit.id % 2 !== 0)) && 'animate__animated animate__fadeInRight', (isIntersecting && (benefit.id % 2 === 0)) && 'animate__animated animate__fadeInLeft')}>
                        <img src={benefit.image} alt="" />
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits