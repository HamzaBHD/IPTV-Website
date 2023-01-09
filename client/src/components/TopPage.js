const TopPage = () => {
    return (
        <div className='top-page'>
            <div className="background-img"></div>
            <div className="top-page-content">
                <h1>Get your Satisfaction Now.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
                <div className='buttons'>
                    <a href='/' className="cta primary">Order NOW</a>
                    <a href='/' className="cta secondary">
                        <span>Browse Product</span>
                        <i className="ri-arrow-right-s-line arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default TopPage;