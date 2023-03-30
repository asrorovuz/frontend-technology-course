import React from "react";

export const ADoc = () => {
  return (
    <div className="manbalar">
      <h3>Documitation</h3>
      <h4>Add card</h4>
      <div className="doc-form">
        <label htmlFor="doc-title">Name </label>
        <input type="text" id="doc-title" placeholder="HTML" />
        <label htmlFor="url">URL</label>
        <input type="text" placeholder='"https://www.w3schools.com/html/"' />
        <label htmlFor="doc-content">Content</label>
        <textarea
          name="doc-content"
          id="doc-conten"
          placeholder="Enter your content"
          cols="30"
          rows="10"
        ></textarea>
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>  
      </div>
      <h4>Delete card</h4>
      <div className="doc-form">
        <label htmlFor="delete-doc">ID </label>
        <input type="text" id="delete-doc" placeholder="1..." />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};
