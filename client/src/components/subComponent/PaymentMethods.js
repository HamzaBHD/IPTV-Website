import { Link } from 'react-router-dom'

const PaymentMethods = ({ isOpen, toggle, total }) => {

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
                <span>{total}$</span>
            </div>
            <hr />
            
            <form>

                <label htmlFor='card'>CARD NUMBER</label>
                <input type='text' id='card' name='card'/>

                <label htmlFor='date'>MM / YY</label>
                <input type='text' id='date' name='date'/>

                <label htmlFor='code'>CVS CODE</label>
                <input type='text' id='code' name='code'/>

                <label htmlFor='name'>NAME</label>
                <input type='text' id='name' name='name'/>

                <Link>
                    <span>
                        <i className="ri-bank-card-line"></i>
                        Pay Now
                    </span>
                </Link>

            </form>
        </div>
    );
}
 
export default PaymentMethods;