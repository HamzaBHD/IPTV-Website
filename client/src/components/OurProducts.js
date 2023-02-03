import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import ProductDetail from './subComponent/ProductDetail'
import popularPack from '../images/Iptv-Popular-pack.png'
import bestPack from '../images/Iptv-Best-Pack.png'
import Product from './subComponent/Product'

const OurProducts = ({ isTrue, productsClass }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [productDetails, setProductDetails] = useState('')

    const products = useRef(null)
    const firstProduct = useRef(null)
    const secondProduct = useRef(null)
    const thirdProduct = useRef(null)
    const lastProduct = useRef(null)
    const didAnimate = useRef(false)
    
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if(isOpen === false) return;
         
        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
        setIsLoading(true)

    }, [isOpen])
    
    useLayoutEffect(() => {
        
        if(didAnimate.current === true) {return}
            
        
        didAnimate.current = true
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: products.current,
                start: 'top bottom',
                end: 'center center',
                endTrigger: lastProduct.current,
                scrub: true,
            }
        })
        tl.from(firstProduct.current, {x: -50, opacity: 0, stagger: .3})
        .from(secondProduct.current, {x: -50, opacity: 0, stagger: .3})
        .from(thirdProduct.current, {x: -50, opacity: 0, stagger: .3})
        .from(lastProduct.current, {x: -50, opacity: 0, stagger: .3})
    })
        
    function closeDetail(choice) {
        setIsOpen(choice)
    }

    function getProduct(item) {
        setProductDetails(item)
    }


    return ( 
        <div id='our-products' className={productsClass}>
            {isTrue && <h2>Our Products</h2>}
            <ul ref={products}>
                <Product
                    productName='1 Month Subscription'
                    productPrice='10'
                    reference={firstProduct}
                    productId='1-Month'
                    openDetail={closeDetail}
                    getProduct={getProduct}
                    />
                <Product
                    productName='3 Months Subscription'
                    productPrice='25'
                    productOffer={popularPack}
                    productTag='Iptv Popular Pack'
                    reference={secondProduct}
                    productId='3-Months'
                    openDetail={closeDetail}
                    getProduct={getProduct}
                    />
                <Product
                    productName='6 Months Subscription'
                    productPrice='40'
                    reference={thirdProduct}
                    productId='6-Months'
                    openDetail={closeDetail}
                    getProduct={getProduct}
                    />
                <Product
                    productName='1 Year Subscription'
                    productPrice='60'
                    productOffer={bestPack}
                    productTag='Iptv Best Pack'
                    reference={lastProduct}
                    productId='1-Year'
                    openDetail={closeDetail}
                    getProduct={getProduct}
                    />
            </ul>
            <ProductDetail 
                toggle={closeDetail}
                isOpen={isOpen}
                isLoading={isLoading}
                productDetails={productDetails}
            />
        </div>
     );
}
 
export default OurProducts;