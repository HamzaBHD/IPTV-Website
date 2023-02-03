const PaymentMethods = ({ isOpen, toggle, product, itemPrice }) => {

    const newClass = isOpen ? 'payment-opened' : undefined
    const hiddenProduct = product === undefined ? 'hidden-product' : 'undefined'
    return ( 
        <div className={`payment-container ${newClass}`}>
            <i 
                className="ri-close-fill close-payment"
                onClick={() => toggle()}
            >
            </i>
            <div className={`gumroad-product ${hiddenProduct}`}>
                <div className='gumroad-product-embed'><a href={`https://watched1.gumroad.com/l/${product || '1-Year'}`}>Loading...</a></div>
            </div>
        </div>
    );
}
 
export default PaymentMethods;