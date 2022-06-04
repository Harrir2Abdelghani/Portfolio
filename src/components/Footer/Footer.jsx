import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      

     

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100009454786442' target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/g.h.a.n.o/" target="_blank"><AiFillInstagram /></a>
        <a href='https://www.linkedin.com/in/harrir-abdelghani-90741a230/' target="_blank"><AiFillLinkedin /></a>
        <a href='https://github.com/Harrir2Abdelghani' target="_blank"><AiFillGithub /></a>
      </div>

      <div className='footer__copyright'>
      
        <small> Made With &#x2764; In DZ</small>

      </div>
    </footer>
  )
}

export default Footer