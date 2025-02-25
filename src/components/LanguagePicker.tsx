import { useState } from "react";


function LanguagePicker() {
    const [isArabic, setIsArabic] = useState(false);

    const switchLanguage = () => {
        if (isArabic) {
            setIsArabic(false);
        } else {
            setIsArabic(true);
        }
    }
    return (
        <div className="language-picker">
            <label className="visually-hidden" htmlFor="languageSwitcher">Switch the language</label>
            <button id="languageSwitcher" type="button" onClick={switchLanguage} tabIndex={0}> {isArabic ? 'English' : ' العربية '}</button>
        </div>
    )
}

export default LanguagePicker