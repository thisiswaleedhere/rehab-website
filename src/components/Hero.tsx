import mainheroimage from '../assets/speechtherapy.png';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

function Hero() {

    const heroRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(heroRef, { threshold: 0.3 });

    return (
        <div ref={heroRef} className="content-grid">

            <div className='breakout herocontent'>
                <h2 className={isIntersecting ? "animate__animated animate__fadeInUp" : ""}>
                    Aysha Center for Rehabilitation and Speech Therapy</h2>
                <hr />
                <h1 className={isIntersecting ? "animate__animated animate__slow animate__fadeInUp" : ""}>
                    Helping Little Voices Grow & Little Steps Get Stronger!
                </h1>
            </div>

            <div className='heroimagediv'>
                <img className='heroimagetherapy' src={mainheroimage} alt="hero image" />
                <div></div>
                <div></div>
            </div>


            <svg width='0' height='0' aria-hidden>
                <filter id='grainy' x='0' y='0' width='100%' height='100%'>
                    <feTurbulence type='fractalNoise' baseFrequency='.537' />
                    <feColorMatrix type='saturate' values='0' />
                    <feBlend in='SourceGraphic' mode='multiply' />
                </filter>
            </svg>

        </div>
    )
}

export default Hero