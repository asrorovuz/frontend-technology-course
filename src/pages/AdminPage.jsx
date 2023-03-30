import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ADoc } from "../components/adminComponent/ADoc"

import "../styles/Admin.css"

export const AdminPage = () => {

  const navigate = useNavigate()

  return (
    <div className='admin-page d-flex'>
      <div className="admin-navbar">
        <h2>
          <Link to="#m">
            Qaytish
            {navigate('/home')}
          </Link>
        </h2>
        <ul className='d-flex'>
          <li><Link to={"/"}>Manbalar</Link></li>
          <li><Link>Kurslar</Link></li>
          <li><Link>Videolar</Link></li>
          <li><Link>Admin</Link></li>
        </ul>
      </div>
      <div className="admin-main">
        <ADoc/>
      </div>
    </div>
  )
}
