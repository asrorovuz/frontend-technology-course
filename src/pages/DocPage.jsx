import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Doc.css";

export const DocPage = () => {
  const [data, setData] = useState(null)

  const getDoc = () => {
    fetch("https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/doc")
    .then(res => res.json())
    .then(setData)
  }

  useEffect(() => {
    getDoc()
  }, [])

  let arr = data?.map(item => {
    let { doc_title, doc_content, doc_url } = item
    
    return(
      <div className="doc-card">
        <div className="doc-header">
          <h3>{doc_title}</h3>
        </div>
        <div className="doc-main">
          <div className="card-content">
            {doc_content}
          </div>
          <div className="doc-link">
            <Link to={doc_url}>show more</Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container d-flex doc">
      {arr}
    </div>
  );
};
