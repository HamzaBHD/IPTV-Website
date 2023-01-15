import { FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {
    return (
        <div className='contacts--form'>
            
            <h3>Let's talk!</h3>
            <p>Send us a message.</p>

            <form className='contacts-form'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' id='fname' name='fname' placeholder='John Doe'/>

                <label htmlFor='email'>last Name</label>
                <input type='email' id='email' name='email' placeholder='John@doe.com'/>

                <label htmlFor='msg'>Your Message goes here!</label>
                <input type='text' id='msg' name='msg' placeholder='Hi Watched.' />

                <a href='/contacts' className='cta-form' type='submit'>
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