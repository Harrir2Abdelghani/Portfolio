import React from "react"
import "./Portfolio.css"
import panel from '../../images/panel.PNG'
import login from '../../images/login.jpg'
import route from '../../images/route.PNG'



const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div >
          <div className='heading text-center '>
            
            <h1 className="titre">My Recent Work</h1>

            <div className='content__grid'>
            <div className='box btn_shadow '>
              <p className="titre2">Landing Page For a Mobile App. </p>
              <div className='img'>
                  <img src={route} alt='' />
              </div>

              <div className="disc">
              <button className="btn btn-primary">Technologies: ReactJs/NextJs/Bootstrap</button>
              <form action="https://github.com/Harrir2Abdelghani/Landing-Page-" target="_blank">
              <button className="btn btn-primary">GitHub</button>
              </form>
              </div>
              
            </div>
          </div>


          </div>

          <div className='content grid'>
            <div className='box btn_shadow '>
              <p className="titre2">Admin Panel For an E-commerce WebSite.</p>
              <div className='img'>
                  <img src={panel} alt='' />
              </div>

              <div className="disc">
              <button className="btn btn-primary">Technologies: ReactJs/TailWindCSS/Sass</button>
              <form action="https://github.com/Harrir2Abdelghani/admin-panel" target="_blank">
              <button className="btn btn-primary" >GitHub</button>
              </form>
              </div>
            </div>
          </div>



          <div className='content grid'>
            <div className='box btn_shadow '>
              <p className="titre2">Sign In and Sign Up form.</p>
              <div className='img'>
                  <img src={login} alt='' />
              </div>

              <div className="disc">
              <button className="btn btn-primary">Technologies: ReactJs/Bootstrap/Firebase</button>
              <form action="https://github.com/Harrir2Abdelghani/sign-In-sign-Out-Form" target="_blank">
              <button className="btn btn-primary">GitHub</button>
              </form>
              </div>
            </div>
          </div>


         


         


        </div>
      </section>
    </>
  )
}

export default Portfolio
