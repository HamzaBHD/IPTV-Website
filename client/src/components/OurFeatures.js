import { FaCheck, FaBolt, FaHandshake } from 'react-icons/fa'

const OurFeatures = ({ isTrue, featuresClass }) => {
    return ( 
        <div className={featuresClass}>
            {isTrue && <h2>Our Features</h2>}
            <ul>
                <li className="feature-container">
                    <FaCheck />
                    <h3>Quality</h3>
                    <p>Lorem ipsum dolor sit amet,consectetur 
                    adipiscing eli sed do eiusmod tempor
                    incididunt utlabore. </p>
                </li>
                <li className="feature-container">
                    <FaBolt />
                    <h3>Rapidity</h3>
                    <p>Lorem ipsum dolor sit amet,consectetur 
                    adipiscing eli sed do eiusmod tempor
                    incididunt utlabore. </p>
                </li>
                <li className="feature-container">
                    <FaHandshake />
                    <h3>Trust</h3>
                    <p>Lorem ipsum dolor sit amet,consectetur 
                    adipiscing eli sed do eiusmod tempor
                    incididunt utlabore. </p>
                </li>
            </ul>

        </div>
     );
}
 
export default OurFeatures;