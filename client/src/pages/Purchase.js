import { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import './Purchase.css'
import { AppContext } from "../Context"
import PaymentMethods from "../components/PaymentMethods"

const Purchase = () => {
    const { productFound} = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    const pageClass = isLoading ? 'purchase-page-loading' : undefined

    function toggle () {
        setIsOpen(false)
    }

    function goBack() {
        navigate(-1)
    }

    return (

        <div className={`purchase-page ${pageClass}`}>
        {isLoading ?
            <div className="lds-dual-ring"></div>
        :
        <>
            <div className="product-ordered">
                <i className="ri-arrow-left-s-line back-arrow" onClick={goBack}></i>
                <div className="product-card">
                {
                     productFound.hasOwnProperty('message') === false ? 
                    <>
                    <ul>
                        <li>
                            <h3>IPTV</h3>
                            <p>{productFound.name}</p>
                            <p>
                                Quantity: 1
                            </p>
                        </li>
                    </ul>
                    <img 
                        src={productFound.imageURL} 
                        alt={productFound.name} 
                        className='orderd-product'
                        >
                    </img>
                    </>
                :
                <p className='puchase-message'>
                    {productFound.message}.
                <br /> 
                Please Check our
                <Link 
                    to='/products'
                    className='products-link'
                >
                    Products
                </Link>
                and choose a plan
                </p>
            }
            </div>

                <ul className="order-total">
                    <li>
                        <h4>Product</h4>
                        <span>{productFound.price || 0}$</span>
                    </li>
                    <li>
                        <h4>Shipping</h4>
                        <span>0$</span>
                    </li>
                    <li>
                        <h4>Total payment</h4>
                        <span>{productFound.price || 0}$</span>
                    </li>
                </ul>
                <ul className="cta-section">
                    <li>
                        <p>Choose your payment method</p>
                    </li>
                    <li>
                        <Link 
                            href="#" 
                            className="cta" 
                            onClick={() => setIsOpen(true)}
                            > 
                            <span>
                                <i className="ri-shopping-bag-line"></i>
                                Choose Now
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <PaymentMethods 
            isOpen={isOpen}
            toggle={toggle}
            total={productFound.price}
            product={productFound.name}
            />
        </>}
        </div>
    )
}
 
export default Purchase;