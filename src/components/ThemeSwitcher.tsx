import { useState, useEffect } from "react";
import Moon from '../assets/moonicon.svg';
import Sun from '../assets/sunicon.svg';

function ThemeSwitcher() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        }
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        }
    }, [])

    return (
        <button type="button" className="theme-switcher breakout" onClick={toggleTheme}>
            <label className="visually-hidden">Toggle to {isDarkMode ? 'light' : 'dark'} theme</label>
            {isDarkMode ?
                <img className="lightthemeicon" src={Sun} alt="Light Theme Icon" />
                :
                <img className="darkthemeicon" src={Moon} alt="Dark Theme Icon" />
            }
        </button>

    )
}

export default ThemeSwitcher