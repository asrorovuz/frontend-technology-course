import React from "react";
// import { useParams } from "react-router-dom";
import { ReactComponent as Movie } from "../images/film.svg";
import "../styles/CourseItem.css"

export const CourseItemsPage = () => {
  // let { id } = useParams();

  return (
    <div className="container d-flex course-item">
      <div className="main-video d-flex">
        <div className="video-play">
          <video>
            <source />
          </video>
        </div>
        <div className="main-video-content">
          <h3>HTML</h3>
          <p>HTML ga kirish</p>
        </div>
      </div>
      <div className="video-list d-flex">
        <div className="video-header">
          <h3>HTML</h3>
          <p>
            Videolar soni: <span>17</span>
          </p>
        </div>
        <div className="lists d-flex">
          <div className="items d-flex">
            <span>{1}</span>
            <div className="video-icon d-flex">
              <Movie />
            </div>
            <div className="items-content">
              <h4>HTML</h4>
              <p>frontend technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
