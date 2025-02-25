import Contact from "../components/Contact"
import inbox from '../assets/Inbox2.png';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { clsx } from 'clsx/lite';

const CallToAction = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(contactRef, { threshold: 0.1 });

    return (
        <div id="contact" ref={contactRef} className="calltoaction">
            <div>
                <img src={inbox} alt="icon" className="mailbox-icon" />
            </div>
            <div className="">
                <h1 className={clsx(isIntersecting && "animate__animated animate__fadeInUp", "sectionhead noline")}> Get in touch with us </h1>

                <div className="cform">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default CallToAction