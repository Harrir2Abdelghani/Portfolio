import React from 'react'
import './Services.css'
import {BsCheck2Square} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offre</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
              <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Dedicated Agile/Scrum development team</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Deliver top quality with less work</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Latest Technologies</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Quality Experience &#38; Individual Approach</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Re-engineering 	&#38; Maintenance.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Strong attention to detail.</p>
            </li>

          </ul>
          
        </article>

        

        <article className='service'>
          <div className='service__head'>
              <h3>Other Services </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Dedicated Agile/Scrum development team</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Flutter development</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Java development</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>Web Design.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>UI/UX Design</p>
            </li>
            <li>
              <BsCheck2Square className="service__list_icon" />
              <p>flexible approach</p>
            </li>
            

          </ul>
          
        </article>
      </div>
    </section>
  )
}

export default Services