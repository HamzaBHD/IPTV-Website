import Navbar from '../components/Navbar'
import TopPage from '../components/TopPage';
import OurProducts from '../components/OurProducts';
import OurFeatures from '../components/OurFeatures';
import OurReputation from '../components/OurRepetution';

const Home = () => {
    return ( 
        <div className='wrapper'>
            <Navbar />
            <TopPage />
            <OurProducts />
            <OurFeatures />
            <OurReputation />
        </div>
     );
}
 
export default Home;