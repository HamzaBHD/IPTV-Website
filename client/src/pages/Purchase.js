import { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import './Purchase.css'
import { AppContext } from "../Context"
import PaymentMethods from "../components/PaymentMethods"

const Purchase = () => {
    const { productFound, clearCard } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)
    const [productCount, setProductCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const pageClass = isLoading ? 'purchase-page-loading' : undefined

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
    
    const productPrice = productFound.hasOwnProperty('message') === false ?
     (productFound.price * productCount).toFixed(2) : '0'

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
                    <img 
                        src={productFound.imageURL} 
                        alt={productFound.name} 
                        className='orderd-product'
                        >
                    </img>
                    <ul>
                        <li>
                            <h3>IPTV</h3>
                            <p>{productFound.name}</p>
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
                            <span>{productPrice}$</span>
                        </li>
                        <li>
                            <i 
                                className="ri-delete-bin-line" 
                                onClick={() => clearCard()}
                            >
                            </i>
                        </li>
                    </ul>
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
                        <span>{productPrice}$</span>
                    </li>
                    <li>
                        <h4>Shipping</h4>
                        <span>0$</span>
                    </li>
                    <li>
                        <h4>Total payment</h4>
                        <span>{productPrice}$</span>
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
            total={productPrice}
            />
        </>}
        </div>
    )
}
 
export default Purchase;