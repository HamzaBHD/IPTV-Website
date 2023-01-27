// import { Link } from 'react-router-dom'

const PaymentMethods = ({ isOpen, toggle, total, product }) => {

    console.log(product)

    const updatedProduct = product ? product.replace(/\s/g, '-') : '' 

    console.log(updatedProduct)

    const newClass = isOpen ? 'payment-opened' : undefined
    return ( 
        <div className={`payment-container ${newClass}`}>
            <i 
                className="ri-close-fill close-payment"
                onClick={() => toggle()}
            >
            </i>

            <div className="total-tbp">
                <h1>Your Total:</h1>
                <span className='item-price'>{total || 0}</span>
            </div>
            <hr />


            {   
                product &&
                <div class="gumroad-product-embed"><a href={`https://wathched1.gumroad.com/l/${updatedProduct}`}>loading...</a></div>
            }
        </div>
    );
}
 
export default PaymentMethods;