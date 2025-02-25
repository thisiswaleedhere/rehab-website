import { FormEvent, useState, useEffect } from "react"
import scheduleicon from '../assets/scheduleicon.svg';

const ContactInput = () => {

    const [contactNumber, setContactNumber] = useState('');
    const [contactName, setContactName] = useState("");

    const [ajaxStatus, setAjaxStatus] = useState('');

    useEffect(() => {
        const timeoutid = setTimeout(() => {
            setAjaxStatus('');
        }, 2000);

        return () => {
            clearTimeout(timeoutid);
        }
    }, [ajaxStatus])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data = await fetch('https://rehab-form.onrender.com/submit'
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: contactName,
                    number: contactNumber
                })
            }
        );
        const response = await data.text();
        setAjaxStatus(response);
        setContactName('');
        setContactNumber('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="visually-hidden"> Enter Your Name:</label>
            <input type="text" id="name" placeholder="Your Name" required
                value={contactName} onChange={(e) => setContactName(e.target?.value)} />

            <label htmlFor="telephone" className="visually-hidden"> Enter Contact Number:</label>
            <input type="tel" id="telephone" placeholder="Your Contact No."
                required pattern="[0-9]{10}" title="Please enter in the format (0501234455)"
                value={contactNumber} onChange={(e) => setContactNumber(e.target?.value)} />
            <button type="submit">
                <img src={scheduleicon} alt="" />
                Schedule Call
            </button>
            {ajaxStatus && <div className="ajax-status">{ajaxStatus}</div>}
        </form>
    )
}

export default ContactInput