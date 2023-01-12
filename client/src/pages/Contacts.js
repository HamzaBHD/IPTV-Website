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
                    paragraph='Lorem ipsum dolor sit amet, consectetur,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. '
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