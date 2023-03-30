import React from 'react'
import banner from '../images/banner.png'
import "../styles/Total.css"

export const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner} alt="banner img" />
    </div>
  )
}


export default Banner