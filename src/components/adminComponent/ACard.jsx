import React from "react";

export const ACard = () => {
  return (
    <div className="acard">
      <h3>Add Course Card</h3>
      <h4>Add card</h4>
      <div className="card-form">
        <label htmlFor="acard-title">Title </label>
        <input type="text" id="acard-title" placeholder="HTML" />
        <label>Download Image</label>
        <input type="file" />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </div>
      <h4>Delete card</h4>
      <div className="doc-form">
        <label htmlFor="delete-doc">Title </label>
        <input type="text" id="delete-doc" placeholder="HTML..." />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};
