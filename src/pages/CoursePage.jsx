import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Course.css"

export const CoursePage = () => {
  return (
    <div className='container d-flex course'>
      <h2>Kurslar</h2>
      <div className="cards d-flex">
      <div className="card">
          <div className="card-img">
            <img src="" alt="course img" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>HTML</h3>
            </div>
            <div className="card-info">
              <p>Soni: <span>12 ta</span></p>
              <p>Narxi: <span>Bepul</span></p>
            </div>
          </div>  
          <Link to="/course/id" className="card-btn d-flex">
            <span>show</span>
            <div className="card-icon d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
