import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import image1 from'../images/iptv-1-Year-Pack.png';
import image2 from'../images/Iptv-6-Months-Pack.png';
import image3 from'../images/Iptv-3-Months-Pack.png';


const OurProducts = ({ isTrue, productsClass }) => {

    const products = useRef()
    const firstProduct = useRef()
    const secondProduct = useRef()
    const thirdProduct = useRef()

    const didAnimate = useRef(false)

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        
        if(didAnimate.current === true) {return}
        didAnimate.current = true

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: products.current,
                start: 'top bottom',
                end: '+=700',
                scrub: .3,
            },
            defaults:{
                duration: 1
            }
        })
        
        tl.from(firstProduct.current, {x: -50, opacity: 0, stagger: .3})
        tl.from(secondProduct.current, {x: -50, opacity: 0, stagger: .3})
        tl.from(thirdProduct.current, {x: -50, opacity: 0, stagger: .3})
        
    }, [])

    return ( 
        <div ref={products} className={productsClass }>
            {isTrue && <h2>Our Products</h2>}
            <ul>
                <li ref={firstProduct} className="product-container">
                    <img src={image1} alt='iptv-1-year-subscription'></img>
                    <div className="product-title">
                        <h3>1 Year Subscription</h3>
                        <span>60$</span>
                    </div>
                    <p>All devices are supported<br />
                    Up TO 12000 Live Channels Full SD/HD/4K<br />
                    Money-Back guarantee<br />
                    24/7 Technical Support</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
                <li ref={secondProduct} className="product-container hey">
                    <img src={image2} alt='iptv-6-months-subscription'></img>
                    <div className="product-title">
                        <h3>6 Months Subscription</h3>
                        <span>40$</span>
                    </div>
                    <p>All devices are supported<br />
                    Up TO 12000 Live Channels Full SD/HD/4K<br />
                    Money-Back guarantee<br />
                    24/7 Technical Support</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
                <li ref={thirdProduct} className="product-container">
                    <img src={image3} alt='iptv-3-months-subscription'></img>
                    <div className="product-title">
                        <h3>3 Months Subscription</h3>
                        <span>25$</span>
                    </div>
                    <p>All devices are supported<br />
                    Up TO 12000 Live Channels Full SD/HD/4K<br />
                    Money-Back guarantee<br />
                    24/7 Technical Support</p>
                    <div className='cta-buttons'>
                        <a href="/" className='cta primary'>PURCHASE</a>
                        <a href="/" className='cta secondary'>
                            <span>Read more</span>
                            <i className="ri-arrow-right-s-line arrow"></i>    
                        </a>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default OurProducts;