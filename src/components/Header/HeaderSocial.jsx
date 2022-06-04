import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/harrir-abdelghani-90741a230/' target="_blank"><AiFillLinkedin /></a>
        <a href='https://github.com/Harrir2Abdelghani' target="_blank"><AiFillGithub /></a>
        <a href='https://www.facebook.com/profile.php?id=100009454786442' target="_blank"><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocial