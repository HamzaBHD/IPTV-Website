import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AppContext } from "../Context"
import PaymentMethods from "./subComponent/PaymentMethods"

const Purchase = () => {
    const [isOpen, setIsOpen] = useState(false)
    const  { productFound } = useContext(AppContext)
    const navigate = useNavigate()

    function toggle () {
        setIsOpen(false)
    }

    function goBack() {
        navigate(-1)
    }

    const orderedProduct = productFound.map(item => (
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
                                <span>{item.price}$</span>
                            </li>
                            <li>
                                <i class="ri-delete-bin-line"></i>
                            </li>
                        </ul>
                    </div>

                    <ul className="order-total">
                        <li>
                            <h4>Product</h4>
                            <span>{item.price}$</span>
                        </li>
                        <li>
                            <h4>Shipping</h4>
                            <span>Free Shipping</span>
                        </li>
                        <li>
                            <h4>Total payment</h4>
                            <span>{item.price}$</span>
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
                                <i class="ri-shopping-bag-line"></i>
                                <span>Pay now</span>
                            </a>
                        </li>
                    </ul>
                    <PaymentMethods 
                        isOpen={isOpen}
                        toggle={toggle}
                        total={item.price}
                    />
                </div>
            </div>
        )
    )

    return (
        <>
            {orderedProduct}
        </>
    );
}
 
export default Purchase;