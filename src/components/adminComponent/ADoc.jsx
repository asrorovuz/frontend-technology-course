import React, { useState } from "react";
import { useEffect } from "react";

export const ADoc = () => {
  const [doc, setDoc] = useState({
    title: "",
    content: "",
    url: "",
  });
  const [type, setType] = useState(null);
  const [data, setData] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDoc((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendDocForm = async (e) => {
    e.preventDefault();
    if (doc.title !== 0 && doc.url !== 0 && doc.content !== 0) {
      try {
        const response = await fetch(
          "https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/document",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(doc),
          }
        );

        const result = await response.json();
        alert("Ma'lumotlar muvaffaqiyatli yuborildi.", result);
      } catch (error) {
        alert("Ma'lumotlar yuborilmadi: " + error);
      }
    } else {
      alert("Form noto'g'ri to'dirilgan.");
    }

    setDoc({
      content: "",
      title: "",
      url: "",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/document/?type=${type}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const deleteForm = (e) => {
    e.preventDefault();

    let id = data?.filter((item) => item.type === type)[0]?.id;

    fetch(
      `https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/document/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        alert("Ma'lumot o'chirildi.");
      })
      .catch((err) => {
        alert(err);
      });

      setType(false)
  };

  return (
    <div className="manbalar">
      <h3>Documitation</h3>
      <h4>Add card</h4>
      <form className="doc-form" onSubmit={(e) => sendDocForm(e)}>
        <label htmlFor="doc_title">Name </label>
        <input
          type="text"
          id="doc_title"
          name="title"
          placeholder="HTML"
          value={doc["title"]}
          onChange={handleInput}
        />
        <label htmlFor="doc_url">URL</label>
        <input
          type="text"
          placeholder="https://www.w3schools.com/html/"
          name="url"
          id="doc_url"
          value={doc["url"]}
          onChange={handleInput}
        />
        <label htmlFor="doc_content">Content</label>
        <textarea
          name="content"
          id="doc_conten"
          placeholder="Enter your content"
          cols="30"
          rows="10"
          value={doc["content"]}
          onChange={handleInput}
        ></textarea>
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
      <h4>Delete card</h4>
      <form className="doc-form" onSubmit={(e) => deleteForm(e)}>
        <label htmlFor="delete-doc">Name </label>
        <input
          type="text"
          id="delete-doc"
          placeholder="Css..."
          onInput={(e) => setType(e.target.value)}
        />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
};
