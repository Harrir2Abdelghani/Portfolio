import React from 'react'
import './Header.css'
import HeaderSocial from './HeaderSocial'
import CTA from './CTA'
import { Typewriter } from 'react-simple-typewriter'
import { ImLocation } from 'react-icons/im'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='name' style={{fontWeight:'bold'}}>HARRIR HABIB ABDELGHANI</h1>
        <h4> Based In Tiaret, Algeria <ImLocation /></h4>
        
        <CTA></CTA>
        
        <HeaderSocial></HeaderSocial>
        
        <div>
            <h1 style={{paddingTop: '12rem', margin:'auto 0',fontWeight:'bold'}}>
              I'm a 
              <span style={{color: 'black', fontWeight:'bold', marginLeft:'10px'}}>
                <Typewriter
                loop
                cursor
                
                typeSpeed={70}
                deletSpeed={50}
                delaySpeed={1500}
                
                words={[ 'Software Engineer' , 'Front-End Developer']}
                />
              </span>
            </h1>
        </div>

        
      </div>
    </header>
  )
}

export default Header