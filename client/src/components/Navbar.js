import { useState } from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const activeStyle = {
        fontWeight: 'bold'
    }

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState)
    } 

    const navClass = isOpen ? 'open-nav' : undefined

    return ( 
        <header>
            <nav>
                <h1>WATCHED.</h1>
                <i className="ri-menu-line menu" onClick={toggleMenu}></i>
                <ul className={navClass}>
                    <li>
                        <i className="ri-close-fill close" onClick={toggleMenu}></i>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='products'
                            style={({ isActive }) => 
                                isActive ? activeStyle : undefined
                            }    
                            >
                            Products
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='about'
                            style={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                        >
                            About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='contacts'
                            className='contacts-link'
                            style={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                        >
                            Contacts
                    </NavLink>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Navbar;