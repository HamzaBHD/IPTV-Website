import { useRef, useContext, useState, useLayoutEffect, useEffect, createRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import getImage from '../assets/getImage'

import { AppContext } from '../Context'
import ProductDetail from './subComponent/ProductDetail'
import popularPack from '../images/Iptv-Popular-pack.png'
import bestPack from '../images/Iptv-Best-Pack.png'
// import firstpack from '../images/iptv-1-Month-Pack.png'
// import secondPack from '../images/Iptv-3-Months-Pack.png'
// import thirdPack from '../images/Iptv-6-Months-Pack.png'
// import lastPack from '../images/iptv-1-Year-Pack.png'

const OurProducts = ({ isTrue, productsClass }) => {
    const { message, getProductId } = useContext(AppContext)

    const currentLocation = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const products = useRef(null)
    const productRefs = useRef([createRef(null), createRef(null), createRef(null), createRef(null)])
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
        
        if(didAnimate.current === true ||
            productRefs.current[0].current === null) {return}
            
        
        didAnimate.current = true
        if(currentLocation.pathname === '/' || currentLocation.pathname === '/home') {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: products.current,
                    start: 'top bottom',
                    end: 'center 75%',
                    endTrigger: productRefs.current[3].current,
                    scrub: true,
                }
            })
            tl.from(productRefs.current[0].current, {x: -50, opacity: 0})
            .from(productRefs.current[1].current, {x: -50, opacity: 0})
            .from(productRefs.current[2].current, {x: -50, opacity: 0})
            .from(productRefs.current[3].current, {x: -50, opacity: 0})
        } else if ( currentLocation.pathname === '/products') {
            let tl = gsap.timeline({
                defaults:{
                    duration: 1
                }
            })
            tl.from(productRefs.current[0].current, {x: -50, opacity: 0, stagger: .3})
            .from(productRefs.current[1].current, {x: -50, opacity: 0, stagger: .3})
            .from(productRefs.current[2].current, {x: -50, opacity: 0, stagger: .3})
            .from(productRefs.current[3].current, {x: -50, opacity: 0, stagger: .3})
        }
    })
        
    function closeDetail(choice) {
        setIsOpen(choice)
    }

    // function getProductPic(product) {
    //     if(product.name === '1 Month Subscription') {
    //         return firstpack
    //     } else if(product.name === '3 Months Subscription') {
    //         return secondPack
    //     } else if(product.name === '6 Months Subscription') {
    //         return thirdPack
    //     } else if (product.name === '1 Year Subscription') {
    //         return lastPack
    //     }
    // }

    return ( 
        <div id='our-products' className={productsClass}>
            {isTrue && <h2>Our Products</h2>}
            <ul ref={products}>
                {message.map((item, i) => {
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
                    <img src={getImage(item)} alt={item.name}></img>
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
            })}
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