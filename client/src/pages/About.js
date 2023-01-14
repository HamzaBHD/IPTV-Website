import OurFeatures from '../components/OurFeatures';
import TopPage from '../components/TopPage'

import './About.css'

const About = () => {
    return (
        <div className='wrapper'>
            <div className='left'>
                <TopPage
                    topPageClass='top-page-about'
                    title='About WATCHED.IPTV'
                    paragraph='WATCHED.IPTV is a leading provider of IPTV services and solutions. 
                    We are committed to providing our customers with the best quality IPTV services and solutions available on the market. 
                    Our team of experienced professionals has been working in the IPTV industry for more than 10 years.'
                    isTrue={true}
                    backgoundClass='background-img--black'
                    contentClass='top-page-content' 
                    aboutPage={true}
                    contactPage={false}
                    primary='Contact us'
                    secondary='Browse product'
                    />
                <OurFeatures 
                    isTrue={false}
                    featuresClass='features'
                />
            </div>
        </div>

    );
}
 
export default About;