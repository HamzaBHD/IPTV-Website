import { useContext } from "react"
import { Link } from "react-router-dom" 

import { AppContext } from "../../Context"

const ProductDetail = ({ toggle, isOpen }) => {
    const { productFound } = useContext(AppContext)


    const newClass = isOpen ? 'detail-opened' : undefined

    const productContainer = productFound.map(item => {
        return (
            <div className={`product-detail ${newClass}`} key={item._id} >
                <i className="ri-close-fill close-detail" onClick={() => toggle()}></i>
                <img className="product-img" src={item.imageURL} alt={item.name}></img>
                <div className="product-detail-content">
                    <div className="product-title">
                        <h3>{item.name}</h3>
                        <span>{item.price}$</span>
                    </div>
                <p>
                    - Enjoy your favorite TV channels with this IPTV subscription.<br />
                    - Get access to over 12000 channels from around the world.<br />
                    - Watch live TV or catch up on your favorite shows with recordings.<br />
                    - Enjoy a {item.name} with this purchase.<br />
                </p>
                <Link to="/purchase" className='cta primary' onClick={() => console.log(item._id)}>PURCHASE</Link>
                </div>
            </div>
        )
    })

    return (
        <>
            {productContainer}
        </>
    );
}
 
export default ProductDetail;