import React from 'react'
import './Experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
          <div className='experience__frontend'>
                <h3>Front-End Development</h3>
                <div className='experience__content'>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <div>
                    <h4>HTML/CSS</h4>
                    <small >Experienced</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <div>
                    <h4>JavaScript/ES6</h4>
                    <small >Experienced</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <div>
                    <h4>ReactJs/NextJs</h4>
                    <small >Experienced</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Type Script</h4>
                    <small >Intermidiate</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Redux/Flux</h4>
                    <small >Experienced</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>TailWindCss</h4>
                    <small >Experienced</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Bootstrap</h4>
                    <small >Experienced</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Sass/Less</h4>
                    <small >Experienced</small>
                  </article>
                </div>
          </div>
          <div className='experience__backend'>
          <h3>Software Engineering</h3>
                <div className='experience__content'>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='.experience__details-icons'/>
                    <h4>Python</h4>
                    <small >Intermidiate</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Java Script</h4>
                    <small >Experienced</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Java</h4>
                    <small >Intermidiate</small>
                  </article>
                  
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>cloud computing</h4>
                    <small >Intermidiate</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>SGBD</h4>
                    <small >Intermidiate</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Git</h4>
                    <small >Intermidiate</small>
                  </article>
                  <article className='experience__details'>
                    <BsFillBookmarkCheckFill className='experience__details-icons'/>
                    <h4>Flutter</h4>
                    <small >Intermidiate</small>
                  </article>
                </div>
            
          </div>
          
          
          
          

      </div>
    </section>
  )
}

export default Experience