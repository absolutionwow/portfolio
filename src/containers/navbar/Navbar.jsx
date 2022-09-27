import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
    <div className='iconContainer'>
    <a className='navbarText' href='index.html'>
    <AiOutlineHome className='navbarIcon' />
    <p >Home</p></a>
    </div>
   <div className='iconContainer'>
   <a className='navbarText' href='email.com'>
    <AiOutlineMail className='navbarIcon'/>
    <p >Contact</p></a>
    </div>
    </div>
    
  )
}

export default Navbar