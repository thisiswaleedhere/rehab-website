import lineend from '../assets/lineend.png';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

const AboutUs = () => {

    const aboutusRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(aboutusRef, { threshold: 0.01 });

    return (
        <div ref={aboutusRef} id="aboutus" className="content-grid sectionblock aboutus">

            <h1 className={isIntersecting ? "animate__animated animate__fadeInUp sectionhead" : "sectionhead"} > About Us </h1>

            <img src={lineend} alt="" />

            <div className=" grid-flow">
                <p className={isIntersecting ? "animate__animated animate__slow animate__fadeInUp" : ""}>
                    At our centre, our team of experienced and compassionate therapists uses a play-based, child-friendly approach to make therapy both effective and enjoyable. We collaborate closely with families, creating personalized treatment plans that address each child's unique needs and strengths.
                </p>
                <p className={isIntersecting ? "animate__animated animate__slow animate__fadeInUp" : ""}>
                    Whether a child is experiencing speech delays, difficulty with movement, or sensory processing challenges, we are here to guide them every step of the way—helping them build skills, independence, and confidence in a warm and supportive environment.
                </p>
                <p className={isIntersecting ? "animate__animated animate__slow animate__fadeInUp" : ""}>
                    Here we don't just provide therapy, we empower children to reach their full potential, one step and one word at a time. We believe every child deserves the opportunity to grow, learn, and communicate with confidence.
                </p>
            </div>

        </div>
    )
}

export default AboutUs