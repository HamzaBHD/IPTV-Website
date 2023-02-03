import { Link } from 'react-router-dom'

import getImage from '../../assets/getImage'

function Product({ productName, productPrice, productOffer, productTag, reference, productId, openDetail, getProduct }) {
    return (
        <li 
            className="product-container"
            ref={reference}
        >
            { productOffer &&
                <img className='pack-tag' src={productOffer} alt={productTag}></img>
            } 
            <img src={getImage(productName)} alt={productName}></img>
            <div className="product-title">
                <h3>{productName}</h3>
                <span className='item-price'>{productPrice}<span>€</span></span>
            </div>
            <p>All devices are supported<br />
            Up TO 12000 Live Channels Full SD/HD/4K<br />
            Money-Back guarantee<br />
            24/7 Technical Support</p>
            <div className='cta-buttons'>
                <Link to={`/purchase/${productId}`} className='cta primary'>PURCHASE</Link>
                <Link to='#' className='cta secondary' onClick={() => {openDetail(true); getProduct(productId)}}>
                    <span>Read more</span>
                    <i className="ri-arrow-right-s-line arrow"></i>    
                </Link>
            </div>
        </li>
    )
}


export default Product