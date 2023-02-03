import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import useProduct from "../Hooks/useProduct"
import getImage from '../assets/getImage'
import './Purchase.css'
import PaymentMethods from "../components/PaymentMethods"

const Purchase = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { productId } = useParams()
    const productPurchased = useProduct(productId)
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
                    productId === undefined &&
                    <>
                        <p className='puchase-message'>
                            It looks like you didn't pick your product yet.
                        <br /> 
                        Please Check our
                        <Link 
                            to='/products'
                            className='products-link'
                            >
                            Products
                        </Link>
                        and choose a plan.
                        </p>
                    </>
                }
                {
                    productId !== undefined &&
                    <>
                        <ul>
                            <li>
                                <h3>IPTV</h3>
                                <p>{productPurchased.productName}</p>
                                <p>
                                    Quantity: 1
                                </p>
                            </li>
                        </ul>
                        <img 
                            src={getImage(productPurchased.productName)} 
                            alt={'productPurchased.productName'} 
                            className='orderd-product'
                            >
                        </img>
                    </>
                }
                </div>


                <ul className="order-total">
                    <li>
                        <h4>Product</h4>
                        <span className='item-price'>{productPurchased.productPrice || 0}<span>€</span></span>
                    </li>
                    <li>
                        <h4>Shipping</h4>
                        <span className='item-price'>0<span>€</span></span>
                    </li>
                    <li>
                        <h4>Total payment</h4>
                        <span className='item-price'>{productPurchased.productPrice || 0}<span>€</span></span>
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
            product={productId}
            itemPrice={productPurchased.productPrice}
            />
        </>}
        </div>
    )
}
 
export default Purchase;