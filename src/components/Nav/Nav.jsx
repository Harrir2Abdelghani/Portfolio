import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {RiContactsBookFill} from 'react-icons/ri'
import {MdComputer} from 'react-icons/md'
import {useState} from 'react'



const Nav = () => {
  const  [activeNav, setActiveNav] = useState ('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} >< AiFillHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : '' }>< FaUserAlt/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : '' }>< BsBookmarkCheckFill/></a>
      <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : '' }>< RiServiceFill/></a>
      
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : '' }>< RiContactsBookFill/></a>
    </nav>
  )
}

export default Nav