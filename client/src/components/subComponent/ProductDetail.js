import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import getImage from '../../assets/getImage'

import useProduct from '../../Hooks/useProduct'

const ProductDetail = ({ toggle, isOpen, isLoading, productDetails, popularPack, bestPack }) => {
    const productPurchased = useProduct(productDetails)

    const detailContainer = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (detailContainer.current && !detailContainer.current.contains(event.target)) {
                toggle(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [detailContainer, toggle]);

    const newClass = isOpen ? 'detail-opened' : undefined

    return (
        <div className={`detail-container ${newClass}`}>

                {isLoading ?
                    <div className='lds-dual-ring'></div>
                :
                <>
                <div className='product-detail'
                    ref={detailContainer}
                >
                    <i className='ri-close-fill close-detail' onClick={() => toggle(false)}></i>
                    {   productPurchased.productName === '3 Months Subscription' && 
                    <img className='pack-tag' src={popularPack} alt='Iptv Popular pack'></img> 
                    }
                    {
                        productPurchased.productName === '1 Year Subscription' && 
                        <img className='pack-tag' src={bestPack} alt='Iptv Best pack'></img>
                    }
                    <img className='product-img' src={getImage(productPurchased.productName)} alt={productPurchased.productName}></img>
                    <div className='product-detail-content'>
                        <div className='product-title'>
                            <h3>{productPurchased.productName}</h3>
                            <span className='item-price'>{productPurchased.productPrice}<span>€</span></span>
                        </div>
                        <p>
                            - Enjoy your favorite TV channels with this IPTV subscription.<br />
                            - Get access to over 12000 channels from around the world.<br />
                            - Watch live TV or catch up on your favorite shows with recordings.<br />
                            - Enjoy a {productPurchased.productName} with this purchase.<br />
                        </p>
                        <Link 
                            to={`/purchase/${productDetails}`}
                            className='cta primary' 
                            >
                            PURCHASE
                        </Link>
                    </div>
                </div>
                </>}
        </div>
    )
}
 
export default ProductDetail;