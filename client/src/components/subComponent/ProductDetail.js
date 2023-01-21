import { useContext } from "react"
import { Link } from "react-router-dom" 

import { AppContext } from "../../Context"

const ProductDetail = ({ toggle, isOpen }) => {
    const { getProductId ,productFound } = useContext(AppContext)


    const newClass = isOpen ? 'detail-opened' : undefined

    return (
        <div className={`product-detail ${newClass}`} key={productFound._id} >
            <i className="ri-close-fill close-detail" onClick={() => toggle()}></i>
            <img className="product-img" src={productFound.imageURL} alt={productFound.name}></img>
            <div className="product-detail-content">
                <div className="product-title">
                    <h3>{productFound.name}</h3>
                    <span>{productFound.price}$</span>
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
    )
}
 
export default ProductDetail;