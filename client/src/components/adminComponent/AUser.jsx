import React, {useState} from 'react'

export const AUser = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const sendUser = (e) => {
    e.preventDefault()
    if(user.email !== "" && user.password.length >= 6){
      alert("Muvaffaqiyatli yakunlandi.")
    }else{
      alert("Tekshirib, qaytadan urinib ko'ring.")
    }
  }

  return (
    <div className='change-user'>
      <h3>Change User</h3>
      <form className="avideo-form" onSubmit={(e) => sendUser(e)}>
          <label htmlFor="aemail">Enter Ypur Email</label>
          <input type="email" placeholder='exam@gmail.com' name='email' value={user.email} onChange={onChangeForm}/>
          <label htmlFor="apassword">Enter Your Password</label>
          <input type="password" placeholder='********' name='password' value={user.password} onChange={onChangeForm}/>
          <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  )
}
