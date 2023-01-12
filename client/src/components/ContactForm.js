import { FaPaperPlane } from 'react-icons/fa'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contacts--form'>

            <form className='contacts-form'>
                
                <label for='fname'>First Name</label>
                <input type='text' id='fname' name='fname' placeholder='First Name'/>

                <label for='lname'>last Name</label>
                <input type='text' id='lname' name='lname' placeholder='Last Name'/>

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