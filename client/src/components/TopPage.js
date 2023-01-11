import tvPicture from '../images/iptv-tv.png'

const TopPage = ({ title, paragraph, isTrue, backgoundClass, contentClass, aboutPage, primary, secondary }) => {
    return (
        <div className='top-page'>
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
            </div>
            { !isTrue && <img className='tv-picture' src={tvPicture} alt='tv displaying iptv products'></img>}
        </div>
    );
}
 
export default TopPage;