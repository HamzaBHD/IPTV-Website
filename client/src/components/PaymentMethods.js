const PaymentMethods = ({ isOpen, toggle, product, productId }) => {

    const newClass = isOpen ? 'payment-opened' : undefined
    const hiddenProduct = product.hasOwnProperty('message') ? 'hidden-product' : 'undefined'
    return ( 
        <div className={`payment-container ${newClass}`}>
            <i 
                className="ri-close-fill close-payment"
                onClick={() => toggle()}
            >
            </i>
            <div className={`gumroad-product ${hiddenProduct}`}>
                {/* <div className="payhip-embed-page" data-key="mSNuz"><a href='https://payhip.com/b/mSNuz'>Loading...</a></div> */}
                {/* <div className='gumroad-product-embed'><a href={`https://watched1.gumroad.com/l/${productId || '1-Year'}`}>Loading...</a></div> */}
            </div>
        </div>
    );
}
 
export default PaymentMethods;