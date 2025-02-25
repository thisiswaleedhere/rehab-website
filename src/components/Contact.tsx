import mailicon from '../assets/mailicon.svg';
import phoneicon from '../assets/phoneicon.svg';
import ContactInput from './ContactInput';


const Contact = () => {

    return (
        <div className="contact-form">

            <div className="contact-block">

                <div className="input-section">
                    <h4>
                        Drop your contact number and we will contact you before the end of the day
                    </h4>

                    <ContactInput />

                </div>

                <p>OR</p>

                <div className="contact-buttons">
                    <h4>
                        Contact us right away
                    </h4>
                    <form>
                        <button type="button"
                            onClick={() => { window.location.href = "mailto:aysharehabilitation@gmail.com?subject=Enquiry&body=hey%20there"; }}>
                            <img src={mailicon} alt="" />
                            Email Us
                        </button>
                        <button type="button" onClick={() => {
                            window.open('tel:0547950747', '_self')
                        }}>
                            <img src={phoneicon} alt="" />
                            Call Us
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact