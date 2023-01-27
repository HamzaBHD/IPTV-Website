import './Home.css'
import TopPage from '../components/TopPage';
import OurProducts from '../components/OurProducts';
import OurFeatures from '../components/OurFeatures';
import OurReputation from '../components/OurRepetution';
import Footer from '../components/Footer';

const Home = () => {
    return ( 
        <div className='wrapper'>
            <TopPage
                topPageClass='top-page'
                title='Get your IPTV Now.'
                paragraph='Are you tired of paying too much for cable TV?
                            Get IPTV and access over 10,000+ channels with no contracts
                            or hidden fees. Our service is easy to set up and use'
                isTrue={true}
                backgoundClass='background-img'
                contentClass='top-page-content'
                aboutPage={false}
                contactPage={false}
                primary='Order NOW'
                secondary='Browse product'
                mainCta='#our-products'
            />
            <OurProducts 
                isTrue={true}
                productsClass='our-products'
            />
            <OurFeatures 
                isTrue={true}
                featuresClass='our-features'
            />
            <OurReputation />
            <Footer />
        </div>
     );
}
 
export default Home;