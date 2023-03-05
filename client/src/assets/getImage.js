import firstPack from '../images/iptv-1-Month-Pack.webp'
import firstPackSmall from '../images/iptv-1-Month-Pack-280.webp'
import firstPackMedium from '../images/iptv-1-Month-Pack-300.webp'
import firstPackLarge from '../images/iptv-1-Month-Pack-350.webp'

import secondPack from '../images/Iptv-3-Months-Pack.webp'
import secondPackSmall from '../images/Iptv-3-Months-Pack-280.webp'
import secondPackMedium from '../images/Iptv-3-Months-Pack-300.webp'
import secondPackLarge from '../images/Iptv-3-Months-Pack-350.webp'

import thirdPack from '../images/Iptv-6-Months-Pack.webp'
import thirdPackSmall from '../images/Iptv-6-Months-Pack-280.webp'
import thirdPackMedium from '../images/Iptv-6-Months-Pack-300.webp'
import thirdPackLarge from '../images/Iptv-6-Months-Pack-350.webp'

import lastPack from '../images/iptv-1-Year-Pack.webp'
import lastPackSmall from '../images/iptv-1-Year-Pack-280.webp'
import lastPackMedium from '../images/iptv-1-Year-Pack-300.webp'
import lastPackLarge from '../images/iptv-1-Year-Pack-350.webp'

import trialPack from '../images/iptv-Test-Pack.webp'

export default function getProductPic(product) {
  if (product === '1 Month Subscription') {
    return {
      mainImage: firstPack,
      smallImage: firstPackSmall,
      mediumImage: firstPackMedium,
      largeImage: firstPackLarge,
    }
  } else if (product === '3 Months Subscription') {
    return {
      mainImage: secondPack,
      smallImage: secondPackSmall,
      mediumImage: secondPackMedium,
      largeImage: secondPackLarge,
    }
  } else if (product === '6 Months Subscription') {
    return {
      mainImage: thirdPack,
      smallImage: thirdPackSmall,
      mediumImage: thirdPackMedium,
      largeImage: thirdPackLarge,
    }
  } else if (product === '1 Year Subscription') {
    return {
      mainImage: lastPack,
      smallImage: lastPackSmall,
      mediumImage: lastPackMedium,
      largeImage: lastPackLarge,
    }
  } else if (product === 'Test Before you buy') {
    return trialPack
  }
}
