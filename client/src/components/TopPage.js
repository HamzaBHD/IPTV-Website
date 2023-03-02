import { useRef, useLayoutEffect } from 'react'

import { gsap } from 'gsap'

import tvPicture from '../images/iptv-tv.webp'
import { FaAt, FaWhatsapp, FaPhone } from 'react-icons/fa'

const TopPage = ({
  topPageClass,
  title,
  paragraph,
  isTrue,
  backgroundClass,
  contentClass,
  aboutPage,
  contactPage,
  primary,
  secondary,
}) => {
  const topPageContent = useRef(null)
  const pageTitle = useRef(null)
  const aboutTitle = useRef(null)
  const tv = useRef(null)

  const didAnimate = useRef(false)

  useLayoutEffect(() => {
    if (didAnimate.current === true) {
      return
    }

    didAnimate.current = true
    let tl = gsap.timeline({ defaults: { duration: 1 } })

    if (topPageContent.current) {
      tl.from(topPageContent.current, { y: 50, opacity: 0 })
    }
    if (tv.current) {
      tl.from(tv.current, { y: 50, opacity: 0 }, '-=1')
    }

    if (pageTitle.current) {
      tl.to(
        pageTitle.current,
        { clipPath: 'polygon(0% 100%, 100% 100%, 200% 0%, 0% -50%)' },
        '-=.7'
      )
    }
    if (aboutTitle.current) {
      tl.to(
        aboutTitle.current,
        { clipPath: 'polygon(0% 100%, 100% 100%, 200% 0%, 0% -50%)' },
        '-=.7'
      )
    }
  }, [didAnimate])

  return (
    <div className={topPageClass}>
      <div className={backgroundClass}></div>
      <div ref={topPageContent} className={contentClass}>
        {aboutPage ? (
          <div ref={aboutTitle} className='about-title'>
            <span className='small-title'>Who we are?</span>
            <h2 className='main-title'>{title}</h2>
          </div>
        ) : (
          <h1 ref={pageTitle}>{title}</h1>
        )}
        <p>{paragraph}</p>
        {isTrue && (
          <div className='buttons'>
            <a href='/products' className='cta primary'>
              {primary}
            </a>
            <a href='/contacts' className='cta secondary'>
              <span>{secondary}</span>
              <i className='ri-arrow-right-s-line arrow-right'></i>
            </a>
          </div>
        )}
        {contactPage && (
          <div className='contact-icons'>
            <a
              href='https://wa.me/15513070526'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaWhatsapp />
            </a>
            <a
              href='tel:+15513070526'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaPhone />
            </a>
            <a href='mailto:customer.service@watchediptv.com'>
              <FaAt />
            </a>
          </div>
        )}
      </div>
      {!isTrue && !contactPage && (
        <img
          ref={tv}
          className='tv-picture'
          src={tvPicture}
          alt='tv displaying iptv products'
        ></img>
      )}
    </div>
  )
}

export default TopPage
