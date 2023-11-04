import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
const Header = () => {
  return (
    <div>
        <nav>
            <h1>Tech Star</h1>
            <main>

        <HashLink to={'/#home'}>Home</HashLink>    
        <HashLink to={'/#contact'}>About</HashLink>    
        <HashLink to={'/#about'}>Contact</HashLink>    
        <HashLink to={'/#brands'}>Brands</HashLink>    
        {/* <Link to={'/#services'}>Services</Link>     */}
        <Link to={'/login'}>Login</Link>    
            </main>
        </nav>
    </div>
  )
}

export default Header
