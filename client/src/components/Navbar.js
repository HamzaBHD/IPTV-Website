import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [headerClass, setHeaderClass] = useState(
    location.pathname === '/' || location.pathname === '/home'
      ? 'dark'
      : 'black'
  )

  useEffect(() => {
    window.onpopstate = () => {
      if (location.pathname === '/' && headerClass === 'black') {
        setHeaderClass('dark')
      } else if (
        (location.pathname === '/products' ||
          location.pathname === '/about' ||
          location.pathname === '/contacts') &&
        headerClass === 'dark'
      ) {
        setHeaderClass('black')
      }
    }
  }, [location, headerClass])

  const activeStyle = {
    fontWeight: 'bold',
  }

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  const navClass = isOpen ? 'open-nav' : undefined

  return (
    <header className={`header-${headerClass}`}>
      <nav>
        <a href='/'>
          <h1>WATCHED.IPTV</h1>
        </a>
        <i className='ri-menu-line menu' onClick={toggleMenu}></i>
        <ul className={navClass}>
          <li>
            <i className='ri-close-fill close' onClick={toggleMenu}></i>
          </li>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                setIsOpen(false)
                setHeaderClass('dark')
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='products'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                setIsOpen(false)
                setHeaderClass('black')
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='about'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                setIsOpen(false)
                setHeaderClass('black')
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='contacts'
              className='contacts-link'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                setIsOpen(false)
                setHeaderClass('black')
              }}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
