import firstpack from '../images/iptv-1-Month-Pack.png'
import secondPack from '../images/Iptv-3-Months-Pack.png'
import thirdPack from '../images/Iptv-6-Months-Pack.png'
import lastPack from '../images/iptv-1-Year-Pack.png'


export default function getProductPic(product) {
    if(product.name === '1 Month Subscription') {
        return firstpack
    } else if(product.name === '3 Months Subscription') {
        return secondPack
    } else if(product.name === '6 Months Subscription') {
        return thirdPack
    } else if (product.name === '1 Year Subscription') {
        return lastPack
    }
}