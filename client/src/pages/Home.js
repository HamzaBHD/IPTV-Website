import './Home.css'
import TopPage from '../components/TopPage';
import OurProducts from '../components/OurProducts';
import OurFeatures from '../components/OurFeatures';
import OurReputation from '../components/OurRepetution';

const Home = () => {
    return ( 
        <div className='wrapper'>
            <TopPage
                title='Get your Satisfaction Now.'
                paragraph='Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                isTrue={true}
                backgoundClass='background-img'
                contentClass='top-page-content'
                aboutPage={false}
                primary='Order NOW'
                secondary='Browse product'
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
        </div>
     );
}
 
export default Home;