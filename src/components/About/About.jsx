import React from 'react'
import './About.css'
import Mee from '../../images/mee.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {RiFolderSettingsFill} from 'react-icons/ri'
import {GrWorkshop} from 'react-icons/gr'
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <section id='About'>
      <Helmet>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-d37e4332-973e-41d6-9326-2488547e1035"></div>
            </Helmet>
      <h5 className='get'>Get To Know</h5>
      
      <h2> About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src ={Mee} alt="me" />
            </div>
          </div>

          <div className='about__content'>
                <div className='about__cards'>
                  <article className="about__card">
                    <BsFillAwardFill className='about__icon'/>
                    <h5>Self-motivated</h5>
                    
                    </article>
                

          
                <article className='about__card'>
                    <FaUsers className='about__icon'/>
                    <h5>Team-Work skill</h5>
                    
                </article>

                <article className='about__card'>
                    <GrWorkshop className='about__icon'/>
                    <h5>A Can Do attitude</h5>
                    
                </article>

                <article className='about__card'>
                    <RiFolderSettingsFill className='about__icon'/>
                    <h5>Problem-solving</h5>
                    
                </article>

                </div>


          <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;I'm a software engineer and a Front End Developer with 3 years of experience working with JavaScript, HTML and CSS and
other open-source libraries , to deliver exceptional customer experiences. Adept at contributing to a highly
collaborative work environment, finding solutions, and determining customer satisfaction.</p>
              <a href="#Contact" className="btn btn-primary">Contact Me</a>   
        </div>
        </div>
    </section>
  )
}

export default About