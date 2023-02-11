import { Link } from 'react-router-dom'

import getImage from '../../assets/getImage'

function Product({ productName, productNameAlt, productPrice, productOffer, productTag, reference, productId, openDetail, getProduct, oldPrice }) {
    const messageToSent = productId === 'test' ?
                        `https://wa.me/15513070526?text=Hello,%20I'm%20interested%20to%20test%20before%20I%20buy.`
                        :
                        `https://wa.me/15513070526?text=Hello,%20I'm%20interested%20to%20buy%20${productName}.`


    return (
        <li 
            className="product-container"
            ref={reference}
        >
            { productOffer &&
                <img className='pack-tag' src={productOffer} alt={productTag}></img>
            } 
            <img src={getImage(productName)} alt={productNameAlt}></img>
            <div className="product-title">
                <h3>{productName}</h3>
                <div className='price-container'>
                    { oldPrice && 
                    <div className='old-price-conatiner'>
                        <span className='sign'>€</span>
                        <span className='old-price'>
                        {oldPrice}
                        </span>
                    </div>
                    }
                    <div className='actual-price-conatiner'>
                        {
                            productPrice !== 'Free' &&
                            <span className='euro-sign'>€</span>
                        }
                        <span className='item-price'>
                            {productPrice}
                        </span>
                    </div>
                </div>
            </div>
            <p>All devices are supported<br />
            Up TO 12000 Live Channels Full SD/HD/4K<br />
            Money-Back guarantee<br />
            24/7 Technical Support</p>
            <div className='cta-buttons'>
                <a 
                    href={messageToSent} 
                    target='_blank'
                    rel='noreferrer noopener'
                    className='cta primary'
                >
                    PURCHASE
                </a>
                <Link to='#' className='cta secondary' onClick={() => {openDetail(true); getProduct(productId)}}>
                    <span>Read more</span>
                    <i className="ri-arrow-right-s-line arrow"></i>    
                </Link>
            </div>
        </li>
    )
}


export default Product