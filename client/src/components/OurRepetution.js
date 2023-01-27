import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger} from 'gsap/all';

const OurReputation = () => {

    const ourReputation = useRef()
    const paragraph = useRef()
    const firstTestimonial = useRef()
    const secondTestimonial = useRef()
    const thirdTestimonial = useRef()

    const didAnimate = useRef(false)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if(didAnimate.current === true) {return}
        didAnimate.current = true

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ourReputation.current,
                start: "top bottom",
                end: 'top center',
                scrub: 1
            },
            defaults: {
                duration: 1
            } 
        })

        let secondTl = gsap.timeline({
            scrollTrigger: {
                trigger: firstTestimonial.current,
                start: "top bottom",
                end: '-50% center',
                endTrigger: thirdTestimonial.current,
                scrub: 1
            },
            defaults: {
                duration: 1
            } 
        })

        tl.from(paragraph.current, {x: -50, opacity:0})

        secondTl
        .from(firstTestimonial.current, {y: -50, opacity: 0})
        .from(secondTestimonial.current, {y: -50, opacity: 0})
        .from(thirdTestimonial.current, {y: -50, opacity: 0})

    }, [ourReputation])

    return (
        <div ref={ourReputation} className="our-reputation">
            <h2>Our Reputation</h2>
            <div ref={paragraph} className="reputation-content">
                <p>WATCHED.IPTV is a company that has been in the business of providing streaming services for over 10 years. We have built a reputation as a reliable and trustworthy provider of streaming services, with thousands of satisfied customers around the world.
                Our reputation is based on delivering high quality services with excellent customer service and technical support. We use the latest technology to ensure our customers get the best experience possible, and our commitment to providing value for money has seen us become one of the most popular streaming providers in the industry.
                We take pride in our reputation as a reliable and trustworthy provider of streaming services, and we strive to maintain it by constantly improving our products and services. Our team is dedicated to ensuring that all our customers receive the best possible experience when using WATCHED.IPTV's streaming services, no matter where they are in the world.
                </p>
                <div className="testimonials">
                    <ul>
                        <li ref={firstTestimonial} className="testimonial-card">
                            <span className="avatar"></span>
                            <div className="quote">
                                <blockquote>"I recently tried WATCHED.IPTV and am so glad that I did. They have a really good selection of content and their prices are reasonable."</blockquote>
                                <span>--Sienna Stokes</span>
                            </div>
                        </li>
                        <li ref={secondTestimonial} className="testimonial-card">
                            <span className="avatar"></span>
                            <div className="quote">
                                <blockquote>"WATCHED.IPTV is a revolutionary way to watch television, movies, and other content without the need for a traditional cable or satellite subscription."</blockquote>
                                <span>--Ellis Preston</span>
                            </div>
                        </li>
                        <li ref={thirdTestimonial} className="testimonial-card">
                            <span className="avatar"></span>
                            <div className="quote">
                                <blockquote>"I have been using WATCHED.IPTV for over a year now and I am very satisfied with the quality of the service they provide."</blockquote>
                                <span>--Hannah Birch</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default OurReputation;