import React from 'react'
import '../styles/Contact.css'

export const ContactPage = () => {
  return (
    <div className='contact'>
      <div className="container contact-main d-flex">
        <h2>Biz bilan bog'laning</h2>
        <form>
          <label htmlFor="fullName">F.I.O</label>
          <input type="text" name='tel' id='fullName' placeholder='Asrorov Sardor Asrorovich'/>
          <label htmlFor="tel">Telifon raqami:</label>
          <input type="text" name="tel" id="tel" placeholder='91 461-81-90'/>
          <label htmlFor="email">Pochta manzili:</label>
          <input type="email" name='email' id='email'placeholder='exam@gmail.com'/>
          <label htmlFor="text">Fikirlaringizni qoldiring:</label>
          <textarea name="text" id="text" cols="30" rows="10"></textarea>
          <button className='form-send'>Yuborish</button>
        </form>
      </div>
    </div>
  )
}
