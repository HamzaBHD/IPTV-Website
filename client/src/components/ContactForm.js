import { FaPaperPlane } from 'react-icons/fa'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contacts--form'>
            
            <h3>Let's talk!</h3>
            <p>Send us a message.</p>

            <form className='contacts-form'>
                <label for='fname'>First Name</label>
                <input type='text' id='fname' name='fname' placeholder='John Doe'/>

                <label for='email'>last Name</label>
                <input type='email' id='email' name='email' placeholder='John@doe.com'/>

                <label for='msg'>Your Message goes here!</label>
                <input type='text' id='msg' name='msg' placeholder='Hi Watched.' />

                <a href='/' className='cta-form' type='submit'>
                    <span>Send</span>
                    <FaPaperPlane 
                        className='plane-icon'
                    />
                </a>

            </form>
        </div>
    );
}
 
export default ContactForm;