const PaymentMethods = ({ isOpen, toggle, product }) => {

    function getProductSelected(item) {
        let updatedProduct = item.split(' ')
        return updatedProduct[0] + '-' + updatedProduct[1]
    }

    const newClass = isOpen ? 'payment-opened' : undefined
    return ( 
        <div className={`payment-container ${newClass}`}>
            <i 
                className="ri-close-fill close-payment"
                onClick={() => toggle()}
            >
            </i>

            {   
                product &&
                <div className='gumroad-product-embed'><a href={`https://watched1.gumroad.com/l/${getProductSelected(product)}`}>Loading...</a></div>
            }
        </div>
    );
}
 
export default PaymentMethods;