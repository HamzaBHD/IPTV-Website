import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import useProduct from '../Hooks/useProduct'
import getImage from '../assets/getImage'
import './Purchase.css'
// import PaymentMethods from "../components/PaymentMethods"

const Purchase = () => {
  // const [isOpen, setIsOpen] = useState(false)
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
  const hiddenSection = productPurchased.hasOwnProperty('message')
    ? 'hidden-section'
    : undefined

  // function toggle () {
  //     setIsOpen(false)
  // }

  function goBack() {
    navigate(-1)
  }

  function refactoredId() {
    if (productId === '1-Month') {
      return 'UhkMQ'
    } else if (productId === '3-Months') {
      return 'sfDrW'
    } else if (productId === '6-Months') {
      return '1XyR0'
    } else if (productId === '1-Year') {
      return 'mSNuz'
    }
  }

  return (
    <div className={`purchase-page  ${pageClass}`}>
      {isLoading ? (
        <div className='lds-dual-ring'></div>
      ) : (
        <>
          <div className='product-ordered'>
            <i className='ri-arrow-left-s-line back-arrow' onClick={goBack}></i>
            <div className='product-card'>
              {productPurchased.hasOwnProperty('message') && (
                <>
                  <p className='puchase-message'>
                    It looks like you didn't pick your product yet.
                    <br />
                    Please Check our
                    <Link to='/products' className='products-link'>
                      Products
                    </Link>
                    and choose a plan.
                  </p>
                </>
              )}
              {!productPurchased.hasOwnProperty('message') &&
                productId !== undefined && (
                  <>
                    <ul>
                      <li>
                        <h3>IPTV</h3>
                        <p>{productPurchased.productName}</p>
                        <p>Quantity: 1</p>
                      </li>
                    </ul>
                    <img
                      src={getImage(productPurchased.productName)}
                      alt={'productPurchased.productName'}
                      className='orderd-product'
                    ></img>
                  </>
                )}
            </div>

            <ul className='order-total'>
              <li>
                <h4>Product</h4>
                <span className='item-price'>
                  {productPurchased.productPrice || 0}
                  <span>€</span>
                </span>
              </li>
              <li>
                <h4>Shipping</h4>
                <span className='item-price'>
                  0<span>€</span>
                </span>
              </li>
              <li>
                <h4>Total payment</h4>
                <span className='item-price'>
                  {productPurchased.productPrice || 0}
                  <span>€</span>
                </span>
              </li>
            </ul>
            <ul className={`cta-section ${hiddenSection}`}>
              <li>
                <p>Clicking this button will confirm your purchase.</p>
              </li>
              <li>
                <a
                  href={`https://payhip.com/b/${refactoredId()}`}
                  className='cta'
                >
                  <span>
                    <i className='ri-shopping-bag-line'></i>
                    Confirm
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/* <PaymentMethods 
            isOpen={isOpen}
            toggle={toggle}
            product={productPurchased}
            productId={productId}
            /> */}
        </>
      )}
    </div>
  )
}

export default Purchase
