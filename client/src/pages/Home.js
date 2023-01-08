import Navbar from '../components/Navbar'
import TopPage from '../components/TopPage';
import OurProducts from '../components/OurProducts';

const Home = () => {
    return ( 
        <div className='wrapper'>
            <div className='background-img'></div>
            <Navbar />
            <TopPage />
            <OurProducts />
        </div>
     );
}
 
export default Home;