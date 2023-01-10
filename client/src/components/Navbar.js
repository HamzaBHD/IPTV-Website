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
        <header className='header-black'>
            <nav>
                <a href='/'>
                    <h1>WATCHED.</h1>
                </a>
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}    
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}  
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