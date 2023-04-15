import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Movie } from "../images/film.svg";
import "../styles/CourseItem.css";

export const CourseItemsPage = ({ data }) => {
  let { type } = useParams();

  const [mainData, setMainData] = useState(null);

  let filterData = data?.filter((item) => item.type === type);

  const filterMainData = (element) => {
    setMainData(element);
  };

  let arr = filterData?.map((elem) => {
    let { title, videos } = elem;

    return (
      <>
        <div className="video-header">
          <h3>{title}</h3>
          <p>
            Videolar soni: <span>{videos.length}</span>
          </p>
        </div>
        <div className="lists d-flex">
          {videos.map((el) => {
            let { name, video_id } = el;

            return (
              <div className="items d-flex">
                <div
                  className="target-block"
                  onClick={() => filterMainData(el)}
                ></div>
                <span>{video_id}</span>
                <div className="video-icon d-flex">
                  <Movie />
                </div>
                <div className="items-content">
                  <h4>{name}</h4>
                  <p>frontend technology</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  });

  return (
    <div className="container d-flex course-item">
      <div className="main-video d-flex">
        <div className="video-play">
          {console.log(
            mainData ? mainData?.url : filterData[0]?.videos[0]?.url
          )}
          <video
            width="100%"
            height="100%"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            src={mainData ? mainData?.url : filterData[0]?.videos[0]?.url}
            type="video/mp4"
          ></video>
          {/* <video>
            <source
              src={mainData ? mainData?.url : filterData[0]?.videos[0]?.url}
            />
          </video> */}
        </div>
        <div className="main-video-content">
          <h3>HTML</h3>
          <p>{mainData ? mainData?.name : filterData[0]?.videos[0]?.name}</p>
        </div>
      </div>
      <div className="video-list d-flex">{arr}</div>
    </div>
  );
};
