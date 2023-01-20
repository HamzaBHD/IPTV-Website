import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AppContext } from "../Context"
import PaymentMethods from "./subComponent/PaymentMethods"

const Purchase = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [productCount, setProductCount] = useState(1)
    const { productFound } = useContext(AppContext)
    const navigate = useNavigate()

    function addOneProduct () {
        if(productCount === 15) {
            return
        }
        setProductCount(prevState => prevState + 1)
    }

    function subtractOneProduct () {
        if(productCount === 1) {
            return
        }
        setProductCount(prevState => prevState - 1)
    }

    function toggle () {
        setIsOpen(false)
    }

    function goBack() {
        navigate(-1)
    }

    const orderedProduct = productFound.map(item => {

        return (
            <div key={item._id}>
                <div className="product-ordered">
                    <i className="ri-arrow-left-s-line back-arrow" onClick={goBack}></i>
                    <div className="product-card">
                        <img 
                            src={item.imageURL} 
                            alt={item.name} 
                            className='orderd-product'
                        >
                        </img>
                        <ul>
                            <li>
                                <h3>IPTV</h3>
                                <p>{item.name}</p>
                                <p>
                                    Quantity: 
                                    <i 
                                        className="ri-indeterminate-circle-line subtract"
                                        onClick={subtractOneProduct}
                                    >
                                    </i>
                                    {productCount}
                                    <i 
                                        className="ri-add-circle-line add"
                                        onClick={addOneProduct}
                                    >
                                    </i>
                                </p>
                                <span>{(item.price *  productCount).toFixed(2)}$</span>
                            </li>
                            <li>
                                <i 
                                    className="ri-delete-bin-line" 
                                >
                                </i>
                            </li>
                        </ul>
                    </div>

                    <ul className="order-total">
                        <li>
                            <h4>Product</h4>
                            <span>{(item.price *  productCount).toFixed(2)}$</span>
                        </li>
                        <li>
                            <h4>Shipping</h4>
                            <span>0$</span>
                        </li>
                        <li>
                            <h4>Total payment</h4>
                            <span>{(item.price *  productCount).toFixed(2)}$</span>
                        </li>
                    </ul>
                    <ul className="cta-section">
                        <li>
                            <p>Choose your payment method</p>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="cta" 
                                onClick={() => setIsOpen(true)}
                            > 
                                <span>
                                    <i className="ri-shopping-bag-line"></i>
                                    Pay now
                                </span>
                            </a>
                        </li>
                    </ul>
                    <PaymentMethods 
                        isOpen={isOpen}
                        toggle={toggle}
                        total={(item.price *  productCount).toFixed(2)}
                    />
                </div>
            </div>
        )}
    )

    return (
        <>
            {orderedProduct}
        </>
    );
}
 
export default Purchase;