import getImage from '../../assets/getImage'

function Product({ productName, productNameAlt, productPrice, productOffer, productTag, reference, productId, openDetail, getProduct, oldPrice }) {
    const messageToSent = productId === 'test' ?
                        `https://wa.me/15513070526?text=Hello,%20I'm%20interested%20to%20test%20before%20I%20buy.`
                        :
                        `https://wa.me/15513070526?text=Hello,%20I'm%20interested%20to%20buy%20${productName}.`

    // const sendProductId = (id) => {
    //     if(id === '1 Month Subscription') {
    //         return '303afb30'
    //     } else if(id === '3 Months Subscription') {
    //         return '40762c72'
    //     } else if(id === '6 Months Subscription') {
    //         return '5be6d15a'
    //     } else if(id === '1 Year Subscription') {
    //         return '62825bb0'
    //     }
    // }


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
            <p>
            Up TO 12000 Live Channels Full SD/HD/4K<br />
            All devices are supported<br />
            Customize your pack<br />
            Movies/Series with your language<br />
            Adults/No Adults channels<br />
            Money-Back guarantee<br />
            24/7 Technical Support<br />
            </p>
            <div className='cta-buttons'>
                <a 
                    href={messageToSent} 
                    target='_blank'
                    rel='noreferrer noopener'
                    className='cta primary'
                >
                    PURCHASE
                </a>
                <a 
                    href={messageToSent} 
                    target='_blank'
                    rel='noreferrer noopener'
                    className='cta secondary'
                >
                    <span>Contact Seller</span>
                    <i className="ri-arrow-right-s-line arrow"></i>    
                </a>
            </div>
        </li>
    )
}


export default Product