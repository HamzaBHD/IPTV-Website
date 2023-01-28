import { useRef, useContext, useState, useLayoutEffect, useEffect, createRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { AppContext } from '../Context'
import ProductDetail from './subComponent/ProductDetail'
import popularPack from '../images/Iptv-Popular-pack.png'
import bestPack from '../images/Iptv-Best-Pack.png'


const OurProducts = ({ isTrue, productsClass }) => {
    const { message, getProductId } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(isOpen === false) return;
         
        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
        setIsLoading(true)

    }, [isOpen])

    function closeDetail(choice) {
        setIsOpen(choice)
    }
    
    const products = useRef(null)
    const productRefs = useRef([createRef(null), createRef(null), createRef(null), createRef(null)])
    const didAnimate = useRef(false)
    
    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        if(didAnimate.current === true ||
            productRefs.current[0].current === null) {return}
        
        didAnimate.current = true
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: products.current,
                start: 'top bottom',
                end: 'center 75%',
                endTrigger: productRefs.current[3].current,
                scrub: 1,
            },
            defaults:{
                duration: 1
            }
        })
        
        tl.from(productRefs.current[0].current, {x: -50, opacity: 0})
        tl.from(productRefs.current[1].current, {x: -50, opacity: 0})
        tl.from(productRefs.current[2].current, {x: -50, opacity: 0})
        tl.from(productRefs.current[3].current, {x: -50, opacity: 0})
        
    }, [message])

    const producContent = message.map((item, i) => {

        return (
            <li 
                key={item._id} 
                className="product-container"
                ref={productRefs.current[i]}
            >
                {   item.name === '3 Months Subscription' && 
                    <img className='pack-tag' src={popularPack} alt='Iptv Popular pack'></img> 
                }

                {
                    item.name === '1 Year Subscription' && 
                    <img className='pack-tag' src={bestPack} alt='Iptv Best pack'></img>
                }
                <img src={item.imageURL} alt={item.name}></img>
                <div className="product-title">
                    <h3>{item.name}</h3>
                    <span className='item-price'>{item.price}</span>
                </div>
                <p>All devices are supported<br />
                Up TO 12000 Live Channels Full SD/HD/4K<br />
                Money-Back guarantee<br />
                24/7 Technical Support</p>
                <div className='cta-buttons'>
                    <Link to="/purchase" className='cta primary' onClick={() => getProductId(item._id)}>PURCHASE</Link>
                    <Link to='#' className='cta secondary' onClick={() => {setIsOpen(true); getProductId(item._id)}}>
                        <span>Read more</span>
                        <i className="ri-arrow-right-s-line arrow"></i>    
                    </Link>
                </div>
            </li>
        )
    })



    return ( 
        <div id='our-products' className={productsClass}>
            {isTrue && <h2>Our Products</h2>}
            <ul ref={products}>
                {producContent}
            </ul>
            <ProductDetail 
                toggle={closeDetail} 
                isOpen={isOpen}
                isLoading={isLoading}
            />
        </div>
     );
}
 
export default OurProducts;