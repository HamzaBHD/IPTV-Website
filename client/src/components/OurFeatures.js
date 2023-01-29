import { useRef, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { FaCheck, FaBolt, FaHandshake } from 'react-icons/fa'

const OurFeatures = ({ isTrue, featuresClass }) => {
    const currentLocation = useLocation()

    const features = useRef(null)
    const firstFeature = useRef(null)
    const secondFeature = useRef(null)
    const thirdFeature = useRef(null)

    const didAnimate = useRef(false)
    gsap.registerPlugin(ScrollTrigger)
    
    useLayoutEffect(() => {
        if(didAnimate.current === true) {return}
        
        didAnimate.current = true
        if(currentLocation.pathname === '/' || currentLocation.pathname === '/home') {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: features.current,
                    start: 'top bottom',
                    end: 'center center',
                    endTrigger: thirdFeature.current,
                    scrub: true,
                }
            }) 
            tl.from(firstFeature.current, {x: -50, opacity: 0})
            tl.from(secondFeature.current, {x: -50, opacity: 0})
            tl.from(thirdFeature.current, {x: -50, opacity: 0})

        } else if(currentLocation.pathname === '/about') {
            let tl = gsap.timeline({
                defaults:{
                    duration: 1
                }
            })
            tl.from(features.current, {
                x: -50,
                opacity: 0,
            })
        }
    })

    

    return ( 
        <div className={featuresClass}>
            {isTrue && <h2>Our Features</h2>}
            <ul ref={features} id='our-features'>
                <li ref={firstFeature} className="feature-container">
                    <FaCheck />
                    <h3>Quality</h3>
                    <p>At our company, we pride ourselves on the quality of our products.
                    We strive to provide the best possible features that will make your experience 
                    with us as smooth and enjoyable as possible.</p>
                </li>
                <li ref={secondFeature} className="feature-container">
                    <FaBolt />
                    <h3>Rapidity</h3>
                    <p>Our rapidity is one of the most important features that sets us apart from our competitors.
                    We understand that time is of the essence and strive to deliver results quickly and efficiently.</p>
                </li>
                <li ref={thirdFeature} className="feature-container">
                    <FaHandshake />
                    <h3>Trust</h3>
                    <p>At our company, we understand that trust is an essential part of any successful relationship.
                    That's why we strive to provide features that are designed to foster trust and build relationships with our customers.</p>
                </li>
            </ul>

        </div>
     );
}
 
export default OurFeatures;