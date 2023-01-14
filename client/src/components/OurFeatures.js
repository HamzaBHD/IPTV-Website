import { FaCheck, FaBolt, FaHandshake } from 'react-icons/fa'

const OurFeatures = ({ isTrue, featuresClass }) => {
    return ( 
        <div className={featuresClass}>
            {isTrue && <h2>Our Features</h2>}
            <ul>
                <li className="feature-container">
                    <FaCheck />
                    <h3>Quality</h3>
                    <p>At our company, we pride ourselves on the quality of our products.
                    We strive to provide the best possible features that will make your experience 
                    with us as smooth and enjoyable as possible.</p>
                </li>
                <li className="feature-container">
                    <FaBolt />
                    <h3>Rapidity</h3>
                    <p>Our rapidity is one of the most important features that sets us apart from our competitors.
                    We understand that time is of the essence and strive to deliver results quickly and efficiently.</p>
                </li>
                <li className="feature-container">
                    <FaHandshake />
                    <h3>Trust</h3>
                    <p>At our company, we understand that trust is an essential part of any successful relationship.
                    That's why we strive to provide features that are designed to foster trust and build relationships with our customers.</p>
                </li>
            </ul>

        </div>
     );
}
 
export default OurFeatures;