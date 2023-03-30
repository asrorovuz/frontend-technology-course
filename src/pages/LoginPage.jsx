import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../styles/LoginPage.css"

export const LoginPage = () => {

    let navigate = useNavigate()

    return (
        <div className='form-block d-flex'>
            <div className="form d-flex">
                <Link className="navigate-home">
                    Bosh sahifaga qaytish
                    {navigate('/')}
                </Link>
                <form className='d-flex'>
                    <h2>Admin panel</h2>
                    <div className="email-block">
                        <label htmlFor="email">Pochta manzilingizni kiriting:</label>
                        <input type="email" id="email" required placeholder='examle@gmail.com'/>
                    </div>
                    <div className="password-block">
                        <label htmlFor="password">Parolingizni kiriting: </label>
                        <input type="password" id="password" required placeholder='********'/>
                    </div>
                    <div className="send-form">
                        <Link to="/admin">
                            Kirish
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      )
}