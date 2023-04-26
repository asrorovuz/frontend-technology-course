import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import { ReactComponent as UpIcon } from "../assistant/top.svg";
import { ReactComponent as DownIcon } from "../assistant/bottom.svg";
import "../styles/Doc.css";

export const DocPage = () => {
  const [data, setData] = useState(null);
  const [accardion, setAccardion] = useState(null);

  const getDoc = () => {
    fetch("https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/document")
      .then((res) => res.json())
      .then(setData);
  };

  const onChangeActive = (id) => {
    setAccardion(id);
  };

  useEffect(() => {
    getDoc();
  }, [data]);

  let arr = data?.map((item, index) => {
    let { title, content, url } = item;

    let id = index + 1
    return (
      <div className="doc-card">
        <div className="doc-header d-flex">
          <h3>{title}</h3>
          <div className="icon-doc" onClick={() => onChangeActive(id)}>
            {id === accardion ? <UpIcon /> : <DownIcon />}
          </div>
        </div>
        <div className={id ===  accardion ? "doc-main show" : "doc-main"}>
          <div className="card-content">{content}</div>
          <div className="doc-link">
            <Link to={url}>
              show more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2b3844"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return data ? (
    <div className="container d-flex doc">{arr}</div>
  ) : (
    <LoadingComponent />
  );
};
