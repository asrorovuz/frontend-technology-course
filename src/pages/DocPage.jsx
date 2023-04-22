import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import "../styles/Doc.css";

export const DocPage = () => {
  const [data, setData] = useState(null);

  const getDoc = () => {
    fetch("https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/document")
      .then((res) => res.json())
      .then(setData);
  };

  useEffect(() => {
    getDoc();
  }, [data]);

  let arr = data?.map((item) => {
    let { title, content, url } = item;

    return (
      <div className="doc-card">
        <div className="doc-header">
          <h3>{title}</h3>
        </div>
        <div className="doc-main">
          <div className="card-content">{content}</div>
          <div className="doc-link">
            <Link to={url}>show more</Link>
          </div>
        </div>
      </div>
    );
  });

  return data ? <div className="container d-flex doc">{arr}</div> : <LoadingComponent/>;
};
