import './Products.css'
import TopPage from "../components/TopPage";
import OurProducts from '../components/OurProducts';

const Products = () => {
    return (
        <div className='wrapper'>
            <TopPage
                topPageClass='top-page'
                title='Choose your Plan.'
                paragraph='Lorem ipsum dolor sit amet, consectetur 
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur 
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.'
                isTrue={false}
                backgoundClass='background-img-black'
                contentClass='top-page-content-products'
                aboutPage={false}
                contactPage={false}

            />
            <OurProducts 
                isTrue={false}
                productsClass='products'
            />
        </div>
    );
}
 
export default Products;