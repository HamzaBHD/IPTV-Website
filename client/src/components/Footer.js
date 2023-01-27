import { FaAt, FaTelegram, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <h2>WATCHED.IPTV</h2>
                <div className='pages'>
                    <ul className='pages-container'>
                        <li>
                            <a href='/products'>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href='/about'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='/contacts'>
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a href='/purchase'>
                                Purchase
                            </a>
                        </li>
                    </ul>
                    <p className='copyright'><span>© </span>2023 WATCHED.IPTV. All right reserved.</p>
                </div>

                <div className='socials-container'>
                    <ul className='socials'>
                        <li>
                            <a href='/'>
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <FaTelegram />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <FaAt />
                            </a>
                        </li>
                    </ul>
                    <p><span>Support: </span>customer.service@watched-iptv.com</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;