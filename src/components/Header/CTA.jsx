import React from 'react'
import CV from '../../assetes/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' type="do" >Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Contact me</a>

    </div>
  )
}

export default CTA