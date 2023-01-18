import { useLayoutEffect, useRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { AppContext } from '../Context'
import ProductDetail from './subComponent/ProductDetail'


const OurProducts = ({ isTrue, productsClass }) => {
    const [isOpen ,setIsOpen] = useState(false)
    const { message, getProductId } = useContext(AppContext)

    console.log(isOpen)

    function closeDetail() {
        setIsOpen(false)
    }
    
    const products = useRef()
    const product = useRef()
    
    const didAnimate = useRef(false)
    
    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        
        if(didAnimate.current === true) {return}
            
            didAnimate.current = true
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: products.current,
                        start: 'top bottom',
                        end: 'center center',
                        // endTrigger: thirdProduct.current,
                        scrub: 1,
                    },
                    defaults:{
                        duration: 1
                    }
                })
                
                tl.from(product.current, {x: -50, opacity: 0, stagger: .3})
                // tl.from(secondProduct.current, {x: -50, opacity: 0, stagger: .3})
                // tl.fromTo(thirdProduct.current, {x: -50, opacity: 0, stagger: .3} , {opacity: 1.5, x: 0})
        
    }, [])

    const producContent = message.map(item => {

        return (
            <li key={item._id} className="product-container">
                <img src={item.imageURL} alt={item.name}></img>
                <div className="product-title">
                    <h3>{item.name}</h3>
                    <span>{item.price}$</span>
                </div>
                <p>All devices are supported<br />
                Up TO 12000 Live Channels Full SD/HD/4K<br />
                Money-Back guarantee<br />
                24/7 Technical Support</p>
                <div className='cta-buttons'>
                    <Link to="/" className='cta primary' onClick={() => console.log(item._id)}>PURCHASE</Link>
                    <Link href='#' className='cta secondary' onClick={() => {setIsOpen(true); getProductId(item._id)}}>
                        <span>Read more</span>
                        <i className="ri-arrow-right-s-line arrow"></i>    
                    </Link>
                </div>
            </li>
        )
    })



    return ( 
        <div className={productsClass}>
            {isTrue && <h2>Our Products</h2>}
            <ul ref={products}>
                {producContent}
            </ul>
            <ProductDetail 
                toggle={closeDetail} 
                isOpen={isOpen}
            />
        </div>
     );
}
 
export default OurProducts;