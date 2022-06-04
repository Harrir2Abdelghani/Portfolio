import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import  { useRef } from 'react';

import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrkqzg8', 'template_qumopyj', form.current, 'user_dfjX0hZjdBMUllwqksbvA')
      .then((result) => {
          alert("Sent Successfully");
      }, (error) => {
          alert("Error Sending !");
      });

      e.target.reset()
  };

  
    
  
  return (
    <section id='Contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+231699935835</h5>
              <a href='https://api.whatsapp.com/send?phone+213699935835' target='_blank' >Send Message</a>
            </article>

            <article className='contact__option'>
              <FaFacebookMessenger className='contact__option-icon'/>
              <h4>Messanger</h4>
              <h5>Abdelghani Abdou</h5>
              <a href='https://m.me/100009454786442' target='_blank'>Send Message</a>
            </article>

            

            
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required></input>
          <input type='email' name='email' placeholder='your email' required></input>
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact