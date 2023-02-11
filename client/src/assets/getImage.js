import firstpack from '../images/iptv-1-Month-Pack.webp'
import secondPack from '../images/Iptv-3-Months-Pack.webp'
import thirdPack from '../images/Iptv-6-Months-Pack.webp'
import lastPack from '../images/iptv-1-Year-Pack.webp'
import trialPack from '../images/iptv-Test-Pack.webp'


export default function getProductPic(product) {
    if(product === '1 Month Subscription') {
        return firstpack
    } else if(product === '3 Months Subscription') {
        return secondPack
    } else if(product === '6 Months Subscription') {
        return thirdPack
    } else if (product === '1 Year Subscription') {
        return lastPack
    } else if (product === 'Test Before you buy') {
        return trialPack
    }
}