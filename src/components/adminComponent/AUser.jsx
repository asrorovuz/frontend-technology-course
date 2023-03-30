import React from 'react'

export const AUser = () => {
  return (
    <div className='change-user'>
      <h3>Change User</h3>
      <form className="avideo-form">
          <label htmlFor="aemail">Enter Ypur Email</label>
          <input type="email" placeholder='exam@gmail.com'/>
          <label htmlFor="apassword">Enter Your Password</label>
          <input type="password" placeholder='********'/>
          <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  )
}
