import tvPicture from '../images/iptv-tv.png'

const TopPage = ({ title, paragraph, isTrue, backgoundClass, contentClass }) => {
    return (
        <div className='top-page'>
            <div className={backgoundClass}></div>
            <div className={contentClass}>
                <h1>{title}</h1>
                <p>{paragraph}</p>
                { isTrue &&
               <div className='buttons'>
                    <a href='/' className="cta primary">Order NOW</a>
                    <a href='/products' className="cta secondary">
                        <span>Browse Product</span>
                        <i className="ri-arrow-right-s-line arrow-right"></i>
                    </a>
                </div>}
            </div>
            { !isTrue && <img className='tv-picture' src={tvPicture} alt='tv displaying iptv products'></img>}
        </div>
    );
}
 
export default TopPage;