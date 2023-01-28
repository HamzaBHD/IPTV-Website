import { useRef, useLayoutEffect } from 'react'

import { gsap } from 'gsap'


import tvPicture from '../images/iptv-tv.png'
import { FaAt, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const TopPage = ({ topPageClass, title, paragraph, isTrue, backgoundClass, contentClass, aboutPage, contactPage, primary, secondary, mainCta }) => {

    const topPageContent = useRef(null)
    const pageTitle = useRef(null)
    const aboutTitle = useRef(null)
    const tv = useRef(null)

    const didAnimate = useRef(false)

    useLayoutEffect(() => {

        if(didAnimate.current === true) {return}

        didAnimate.current = true
        let tl = gsap.timeline({defaults:{duration: 1}})

        tl.from(topPageContent.current, {y: 50, opacity: 0})
        .from(tv.current, {y: 50, opacity: 0}, '-=1')
        .to(pageTitle.current, {clipPath: 'polygon(0% 100%, 100% 100%, 150% 0%, 0% -50%)'}, '-=.7')
        .to(aboutTitle.current, {clipPath: 'polygon(0% 100%, 100% 100%, 150% 0%, 0% -50%)'}, '-=.7')
            
    
    }, [didAnimate])


    return (
        <div className={topPageClass}>
            <div className={backgoundClass}></div>
            <div ref={topPageContent} className={contentClass}>
                {
                aboutPage ?
                <div ref={aboutTitle} className='about-title'>
                    <span className='small-title'>Who we are?</span>
                    <h2 className='main-title'>{title}</h2>
                </div>
                :
                <h1 ref={pageTitle}>{title}</h1>
                }
                <p>{paragraph}</p>
                {isTrue &&
               <div className='buttons'>
                    <a href={mainCta} className="cta primary">{primary}</a>
                    <a href='/products' className="cta secondary">
                        <span>{secondary}</span>
                        <i className="ri-arrow-right-s-line arrow-right"></i>
                    </a>
                </div>}
                { contactPage 
                &&
                <div className='contact-icons'>
                    <a href='/'>
                        <FaWhatsapp />
                    </a>
                    <a href='/'>
                        <FaTelegram />
                    </a>
                    <a href='/'>
                        <FaAt />
                    </a>
                </div> }
            </div>
            { !isTrue && !contactPage && <img ref={tv} className='tv-picture' src={tvPicture} alt='tv displaying iptv products'></img>}
        </div>
    );
}
 
export default TopPage;