import React from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='wrapper'>
      <div className='not-found-page'>
        <h1>404</h1>
        <p>We are sorry, but the page you requested was not found</p>
        <div className='buttons redirect-buttons'>
          <a href='/' className='cta primary'>
            Go Home
          </a>
          <a href='/contacts' className='cta secondary contact-btn'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
