import React from 'react'
import { Banner } from "../components/Banner"
import { AboutPage } from "../pages/AboutPage"
import { CoursePage } from "../pages/CoursePage"
import { ContactPage } from "../pages/ContactPage"
import "../styles/Total.css"

export const HomePage = () => {
  return (
    <div className='d-flex home'>
      <Banner />
      <AboutPage />
      <CoursePage />
      <ContactPage />
    </div>
  )
}
