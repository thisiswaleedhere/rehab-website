import { useEffect, useState } from 'react';
import mailicon from '../assets/mailicon.svg';
import phoneicon from '../assets/phoneicon.svg';
import handicon from '../assets/handicon.svg';
import ayshalogo from '../assets/aysha-light.png';


function Footer() {
    const [copyStatus, setCopyStatus] = useState('');

    useEffect(() => {
        const timeoutid = setTimeout(() => {
            setCopyStatus('');
        }, 2000);

        return () => {
            clearTimeout(timeoutid);
        }
    }, [copyStatus])

    const handleCopy = (copyText: string) => {
        navigator.clipboard.writeText(copyText);
        setCopyStatus('"' + copyText + '"' + ' Copied');
    }

    return (
        <footer className="content-grid">
            <div className="breakout">
                <div className='footer-title'>
                    <div className='flex-group'>

                        <img src={ayshalogo} alt="Logo" />
                        <h2>Aysha Center for Rehabilitation and Speech Therapy</h2>
                    </div>
                    <p>Pediatric rehabilitation and speech therapy center in Sharjah</p>
                </div>

                <div className="grid-auto-fit footer-main">
                    <div>
                        <div className='flex-group'>
                            <img src={phoneicon} alt='' />
                            <button type='button' title='Click to copy contact number' onClick={() => handleCopy('0547950747')}>054 795 0747</button>
                        </div>
                        <div className='flex-group'>
                            <img src={mailicon} alt='' />
                            <button type='button' title='Click to copy email id' onClick={() => handleCopy('aysharehabilitation@gmail.com')}> aysharehabilitation@gmail.com</button>
                        </div>
                        {copyStatus && <p className='copy-status'>{copyStatus}</p>}
                    </div>
                    <div>
                        <h4>Location</h4>
                        <button type='button' title='Click to open the location in a new tab' onClick={() => window.open('https://maps.app.goo.gl/jYhmha1wq7wQEU68A', '_blank')}>
                            <p>Al Shamsi Building (Ground Floor)</p>
                            <p>Corniche Street</p>
                            <p>Al Majaz, Sharjah</p>
                            <p>United Arab Emirates</p>
                        </button>

                    </div>
                    <div>
                        <h4>Working Hours</h4>
                        <p>Monday - Saturday</p>
                        <p>9:00 AM - 8:00 PM</p>

                    </div>
                </div>
                <div className='footer-icon-div'>
                    <img src={handicon} alt="" />
                </div>
                <hr />
                <div className='copyright'>
                    <p> © 2025 Aysha Center for Rehabilitation and Speech Therapy | All rights reserved. </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer