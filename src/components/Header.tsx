import { useEffect, useRef } from "react"
// import LanguagePicker from "./LanguagePicker";
// import ThemeSwitcher from "./ThemeSwitcher";
import phone from '../assets/phone.svg';
import logo from '../assets/aysha-light.png';
import logo2 from '../assets/aysha-dark.png';

function Header() {

    const menuref = useRef<HTMLButtonElement>(null);
    const navref = useRef<HTMLElement>(null);

    useEffect(() => {
        const primaryHeader = document.getElementsByTagName('header')[0];
        const scrollWatcher = document.createElement("div");

        scrollWatcher.setAttribute("data-scroll-watcher", "");
        primaryHeader.before(scrollWatcher);

        const navObserver = new IntersectionObserver(
            (entries) => {
                primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
            },
            { rootMargin: "50px 0px 0px 0px" }
        );

        navObserver.observe(scrollWatcher);

        fetch('https://rehab-form.onrender.com/');

        return (() => {
            navObserver.unobserve(scrollWatcher);
        })

    }, []);

    const toggleMenu = () => {
        const currentState = menuref.current?.getAttribute("data-state");
        if (currentState === "closed") {
            menuref.current?.setAttribute("data-state", "opened");
            menuref.current?.setAttribute("aria-expanded", "true");
            navref.current?.classList.add('open');
        } else {
            closeMenu();
        }
    }

    const closeMenu = () => {
        menuref.current?.setAttribute("data-state", "closed");
        menuref.current?.setAttribute("aria-expanded", "false");
        navref.current?.classList.remove('open');
    }

    return (
        <header className="content-grid">
            <div className="breakout flex-group">
                <a className='skip-link' href="#main">Skip to Main Content</a>

                <div className="flex-group">
                    <a href="#" className="logo" title="Home">
                        {/* <h2>Aysha</h2> */}
                        <img src={logo} title="Home" alt="Logo" />
                        <img src={logo2} title="Home" alt="Logo" />
                    </a>
                    {/* <LanguagePicker /> */}
                </div>
                <nav ref={navref} className="main-nav">
                    <ul className="flex-group">
                        <li><a href="#" onClick={closeMenu}>Home</a></li>
                        <li><a href="#aboutus" onClick={closeMenu}>About</a></li>
                        <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    </ul>
                </nav>
                <div className="flex-group headerbuttonflex">
                    {/* <ThemeSwitcher /> */}

                    <button type="button" className="mainbutton" onClick={() => { document.getElementById('contact')?.scrollIntoView() }}>
                        Enquire Now
                    </button>

                    <button type="button" title="Call Now" className="callbutton"
                        onClick={() => { window.open('tel:0547950747', '_self') }}>
                        <img src={phone} alt="Phone icon" />
                    </button>

                    <button title="Menu Toggler" type="button" className="menu-toggle"
                        ref={menuref} onClick={toggleMenu} aria-controls="primary-navigation" data-state="closed" aria-expanded="false">
                        <svg stroke="var(--button-color)" fill="none" className="hamburger" viewBox="-10 -10 120 120">
                            <path className="line" strokeWidth="10" strokeLinecap="round"
                                strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                            </path>
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header


// https://codepen.io/kevinpowell/pen/xxyybmj  
