import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Movie } from "../assistant/film.svg";
import { ReactComponent as LeftLine } from "../assistant/arrow-left.svg";
import LoadingComponent from "../components/LoadingComponent";
import "../styles/CourseItem.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";

export const CourseItemsPage = () => {
  let { type } = useParams();
  const navigation = useNavigate();
  console.log(type);
  const [mainData, setMainData] = useState(null);

  const [data, setData] = useState(null);

  const getData = async () => {
    await fetch(
      "https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/Videos"
    )
      .then((res) => res.json())
      .then(setData)
      .catch(console.error("Xato"));
  };

  useEffect(() => {
    getData();
  }, []);

  let filterData = data?.filter(
    (item) => item?.type?.toLowerCase() === type.toLowerCase()
  );

  const filterMainData = (element) => {
    setMainData(element);
  };

  const backPage = () => {
    navigation(-1);
  };

  let arr = filterData?.map((elem, index) => {
    let { name } = elem;

    return (
      <div className="items d-flex">
        <div
          className="target-block"
          onClick={() => filterMainData(elem)}
        ></div>
        <span>{index + 1}</span>
        <div className="video-icon d-flex">
          <Movie />
        </div>
        <div className="items-content">
          <h4>{name}</h4>
          <p>frontend technology</p>
        </div>
      </div>
    );
  });

  return data ? (
    <>
      <div className="container back-btn">
        <div className="btn-container" onClick={backPage}>
          <LeftLine /> Orqaga
        </div>
      </div>
      <div className="container d-flex course-item">
        <div className="main-video d-flex">
          <div className="video-play">
            <ReactPlayer
              url={mainData ? mainData?.url : filterData[0]?.url}
              width="100%"
              height="100%"
              playing
              controls
            />
          </div>
          <div className="main-video-content">
            <h3>HTML</h3>
            <p>{mainData ? mainData?.name : filterData[0]?.name}</p>
          </div>
        </div>
        <div className="video-list d-flex">
          <div className="video-header">
            <h3>{type.toUpperCase()}</h3>
            <p>
              Videolar soni: <span>{filterData.length}</span>
            </p>
          </div>
          <div className="lists d-flex">{arr}</div>
        </div>
      </div>
    </>
  ) : (
    <LoadingComponent />
  );
};
