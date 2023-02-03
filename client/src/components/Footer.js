import { FaAt, FaPhone, FaWhatsapp } from 'react-icons/fa'

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
                            <a href='https://wa.me/15513070526'
                                target='_blank'
                                rel='noreferrer noopener'>
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a 
                                href='tel:+15513070526'
                                target='_blank'
                                rel="noreferrer noopener"
                            >
                                <FaPhone />
                            </a>
                        </li>
                        <li>
                            <a href='mailto:customer.service@watchediptv.com'>
                                <FaAt />
                            </a>
                        </li>
                    </ul>
                    <p><span>Support: </span>customer.service@watchediptv.com</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;