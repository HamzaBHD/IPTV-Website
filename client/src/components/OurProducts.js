import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import popularPack from '../images/Iptv-Popular-pack.webp'
import bestPack from '../images/Iptv-Best-Pack.webp'
import Product from './subComponent/Product'

const OurProducts = ({ isTrue, productsClass }) => {
  const firstProduct = useRef(null)
  const secondProduct = useRef(null)
  const thirdProduct = useRef(null)
  const lastProduct = useRef(null)
  const didAnimate = useRef(false)

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    if (didAnimate.current === true) {
      return
    }

    didAnimate.current = true
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstProduct.current,
        start: 'top bottom',
        end: 'center 85%',
        endTrigger: lastProduct.current,
        scrub: true,
      },
    })
    tl.from(firstProduct.current, { x: -10, y: -15, opacity: 0 })
      .from(secondProduct.current, { x: -10, y: -15, opacity: 0 })
      .from(thirdProduct.current, { x: -10, y: -15, opacity: 0 })
      .from(lastProduct.current, { x: -10, y: -15, opacity: 0 })
  })
  return (
    <div className={productsClass}>
      {isTrue && <h2>Our Products</h2>}
      <ul>
        <Product
          productNameAlt='Best iptv premium iptv 1 Month iptv Subscription'
          productName='1 Month Subscription'
          productPrice='10'
          oldPrice='15'
          reference={firstProduct}
          productId='1-Month'
        />

        <Product
          productNameAlt='Best iptv premium iptv 3 Months iptv Subscription'
          productName='3 Months Subscription'
          productPrice='25'
          oldPrice='30'
          productOffer={popularPack}
          productTag='Iptv Popular Pack'
          reference={secondProduct}
          productId='3-Months'
        />

        <Product
          productNameAlt='Best iptv adult iptv 6 Months iptv Subscription'
          productName='6 Months Subscription'
          productPrice='40'
          oldPrice='45'
          reference={thirdProduct}
          productId='6-Months'
        />

        <Product
          productNameAlt='Best iptv adult iptv 4K 8K UHD HD 1 Year iptv Subscription'
          productName='1 Year Subscription'
          productPrice='60'
          oldPrice='70'
          productOffer={bestPack}
          productTag='Iptv Best Pack'
          reference={lastProduct}
          productId='1-Year'
        />
      </ul>
    </div>
  )
}

export default OurProducts
