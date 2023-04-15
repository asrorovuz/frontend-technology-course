import React from 'react'
// import { useForm } from "react-hook-form"

export const AUser = () => {

  // const [user, setUser] = useState({
  //   email: "",
  //   password: ""
  // })

  // const onChangeEmail = (val) => {
  //   setUser({ ...user, email: val });
  // }

  // const onChangePassword = (val) => {
  //   setUser({ ...user, password: val });
  // }

  // const sendUser = (e) => {
  //   e.preventDefault()
  //   if(user.email !== "" && user.password.length >= 6){
  //     console.log("hello")
  //   }else{
  //     console.log("111111111")
  //   }
  // }

  return (
    <div className='change-user'>
      <h3>Change User</h3>
      <form className="avideo-form">
          <label htmlFor="aemail">Enter Ypur Email</label>
          <input type="email" placeholder='exam@gmail.com' />
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
