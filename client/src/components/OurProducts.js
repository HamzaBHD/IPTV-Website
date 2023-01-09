import image1 from'../images/iptv-1-Year-Pack.png';
import image2 from'../images/Iptv-6-Months-Pack.png';
import image3 from'../images/Iptv-3-Months-Pack.png';


const OurProducts = () => {
    return ( 
        <div className='our-products'>
            <h2>Our Products</h2>
            <ul>
                <li className="product-container">
                    <img src={image1} alt='iptv-1-year-subscription'></img>
                    <div className="product-title">
                        <h3>1 Year Subscription</h3>
                        <span>60$</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet,consectetur adipiscing eli sed do eiusmod tempor incididunt utlabore.</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
                <li className="product-container">
                    <img src={image2} alt='iptv-6-months-subscription'></img>
                    <div className="product-title">
                        <h3>6 Months Subscription</h3>
                        <span>40$</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet,consectetur adipiscing eli sed do eiusmod tempor incididunt utlabore.</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
                <li className="product-container">
                    <img src={image3} alt='iptv-3-months-subscription'></img>
                    <div className="product-title">
                        <h3>3 Months Subscription</h3>
                        <span>25$</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet,consectetur adipiscing eli sed do eiusmod tempor incididunt utlabore.</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default OurProducts;