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
                <h3>{total}$</h3>
            </div>
            
            <form>

                <label htmlFor='card'>CARD NUMBER</label>
                <input type='text' id='card' name='card'/>

                <label htmlFor='date'>MM / YY</label>
                <input type='text' id='date' name='date'/>

                <label htmlFor='code'>CVS CODE</label>
                <input type='text' id='code' name='code'/>

                <label htmlFor='name'>NAME</label>
                <input type='text' id='name' name='name'/>

                <a href='#'>
                <i class="ri-bank-card-line"></i>
                    <span>Pay Now</span>
                </a>

            </form>
        </div>
    );
}
 
export default PaymentMethods;