import React from 'react'

export const AVideo = () => {
  return (
    <div className="avideo">
      <h3>Add Video</h3>
      <h4>Add Video</h4>
      <form className="avideo-form">
        <label htmlFor="avideo-title">Name </label>
        <input type="text" id="avideo-title" placeholder="HTML ga kirish" />
        <label htmlFor="url">URL</label>
        <input type="text" placeholder='"https://www.youtube.com/watch?v=_R5a-Kc0pRc&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=1"' />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>  
      </form>
      <h4>Delete card</h4>
      <form className="avideo-form">
        <label htmlFor="delete-video">Video Name </label>
        <input type="text" id="delete-video" placeholder="HTML ga kirish..." />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  )
}
