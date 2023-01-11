import OurFeatures from '../components/OurFeatures';
import TopPage from '../components/TopPage'

import './About.css'

const About = () => {
    return (
        <div className='wrapper'>
            <div className='left'>
                <TopPage
                    title='About WATCHED.'
                    paragraph='Lorem ipsum dolor sit amet, consectetur,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. '
                    isTrue={true}
                    backgoundClass='background-img--black'
                    contentClass='top-page-content' 
                    aboutPage={true}
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