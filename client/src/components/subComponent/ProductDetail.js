import { useContext, useRef, useEffect } from "react"
import { Link } from "react-router-dom" 
import getImage from '../../assets/getImage'

import { AppContext } from "../../Context"
import popularPack from '../../images/Iptv-Popular-pack.png'
import bestPack from '../../images/Iptv-Best-Pack.png'

const ProductDetail = ({ toggle, isOpen, isLoading }) => {
    const { getProductId, productFound } = useContext(AppContext)

    const detailContainer = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (detailContainer.current && !detailContainer.current.contains(event.target)) {
                toggle(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [detailContainer, toggle]);

    const newClass = isOpen ? 'detail-opened' : undefined

    return (
        <div className={`detail-container ${newClass}`}>

                {isLoading ?
                    <div className="lds-dual-ring"></div>
                :
                <>
                <div className='product-detail'
                    ref={detailContainer}
                >
                    <i className="ri-close-fill close-detail" onClick={() => toggle(false)}></i>
                    {   productFound.name === '3 Months Subscription' && 
                    <img className='pack-tag' src={popularPack} alt='Iptv Popular pack'></img> 
                    }
                    {
                        productFound.name === '1 Year Subscription' && 
                        <img className='pack-tag' src={bestPack} alt='Iptv Best pack'></img>
                    }
                    <img className="product-img" src={getImage(productFound)} alt={productFound.name}></img>
                    <div className="product-detail-content">
                        <div className="product-title">
                            <h3>{productFound.name}</h3>
                            <span className='item-price'>{productFound.price}<span>€</span></span>
                        </div>
                        <p>
                            - Enjoy your favorite TV channels with this IPTV subscription.<br />
                            - Get access to over 12000 channels from around the world.<br />
                            - Watch live TV or catch up on your favorite shows with recordings.<br />
                            - Enjoy a {productFound.name} with this purchase.<br />
                        </p>
                        <Link 
                            to="/purchase" 
                            className='cta primary' 
                            onClick={() => getProductId(productFound._id)}
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