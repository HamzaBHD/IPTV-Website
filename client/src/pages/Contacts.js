import TopPage from '../components/TopPage'
import ContactForm from '../components/ContactForm';

import '../pages/Contacts.css'

const Contacts = () => {
    return (
        <div className='wrapper'>
            <div className='contact-page'>
                <TopPage
                    topPageClass='top-page-contacts'
                    title='Contact Us.'
                    paragraph='Contact us today to learn more about our services 
                                and how we can help you get the most out of your IPTV experience.'
                    isTrue={false}
                    backgoundClass='background-full-black'
                    contentClass='top-page-content' 
                    aboutPage={false}
                    contactPage={true}
                    primary='Go Home'
                    secondary='Browse product'
                    />
                <ContactForm />
            </div>
        </div>
    );
}
 
export default Contacts;