import { useRef, useContext, useState, useEffect, createRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { AppContext } from '../Context'
import ProductDetail from './subComponent/ProductDetail'


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
    
    const products = useRef()
    const productRefs = useRef([createRef(), createRef(), createRef()])
    const didAnimate = useRef(false)
    
    gsap.registerPlugin(ScrollTrigger)
    
    useEffect(() => {
        
        if(didAnimate.current === true ||
            productRefs.current[0].current === null) {return}
        
        didAnimate.current = true
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: products.current,
                start: 'top bottom',
                end: 'center center',
                endTrigger: productRefs.current[2].current,
                scrub: 1,
            },
            defaults:{
                duration: 1
            }
        })
        
        tl.from(productRefs.current[0].current, {x: -50, opacity: 0, stagger: .3})
        tl.from(productRefs.current[1].current, {x: -50, opacity: 0, stagger: .3})
        tl.fromTo(productRefs.current[2].current, {x: -50, opacity: 0, stagger: .3} , {opacity: 1.5, x: 0})
        
    }, [message])

    const producContent = message.map((item, i) => {

        return (
            <li 
                key={item._id} 
                className="product-container"
                ref={productRefs.current[i]}
            >
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
        <div className={productsClass}>
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