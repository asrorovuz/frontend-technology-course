import React from "react";
import { Link } from "react-router-dom";
import "../styles/Doc.css";

export const DocPage = () => {
  return (
    <div className="container d-flex doc">
      <div className="doc-card">
        <div className="doc-header">
          <h3>HTML</h3>
        </div>
        <div className="doc-main">
          <div className="card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae repellendus eum reprehenderit maxime amet, laborum quasi
            expedita, provident similique perspiciatis. Distinctio quaerat
            delectus dolore ducimus facilis?
          </div>
          <div className="doc-link">
            <Link to="">show more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
