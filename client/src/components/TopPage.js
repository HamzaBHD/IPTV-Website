import tvPicture from '../images/iptv-tv.png'
import { FaAt, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const TopPage = ({ topPageClass, title, paragraph, isTrue, backgoundClass, contentClass, aboutPage, contactPage, primary, secondary }) => {
    return (
        <div className={topPageClass}>
            <div className={backgoundClass}></div>
            <div className={contentClass}>
                {
                aboutPage ?
                <div className='about-title'>
                    <span className='small-title'>Who we are?</span>
                    <h1 className='main-title'>{title}</h1>
                </div>
                :
                <h1>{title}</h1>
                }
                <p>{paragraph}</p>
                {isTrue &&
               <div className='buttons'>
                    <a href='/' className="cta primary">{primary}</a>
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
            { !isTrue && !contactPage && <img className='tv-picture' src={tvPicture} alt='tv displaying iptv products'></img>}
        </div>
    );
}
 
export default TopPage;