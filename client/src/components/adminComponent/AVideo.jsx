import React, { useState } from "react";

export const AVideo = () => {
  const [videos, setVideos] = useState({
    name: "",
    type: "",
    url: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setVideos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendVideoForm = async(e) => {
    e.preventDefault();
    if (videos.name !== 0 && videos.type !== 0 && videos.url !== 0) {
      try {
        const response = await fetch(
          "https://643a38e6bd3623f1b9af203f.mockapi.io/frontend-tech/Videos",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(videos),
          }
        );

        const result = await response.json();
        alert("Success", result);
      } catch (error) {
        alert("Ma'lumotlar yuborilmadi: " + error);
      }
    } else {
      alert("Form noto'g'ri to'dirilgan.");
    }

    setVideos({
      name: "",
      type: "",
      url: "",
    });
  }

  return (
    <div className="avideo">
      <h3>Add Video</h3>
      <h4>Add Video</h4>
      <form className="avideo-form" onSubmit={(e) => sendVideoForm(e)}>
        <label htmlFor="avideo-title">Name </label>
        <input
          type="text"
          id="avideo-title"
          placeholder="HTML ga kirish"
          value={videos["name"]}
          name="name"
          onChange={handleInput}
        />
        <label htmlFor="type">URL</label>
        <input
          type="text"
          id="type"
          placeholder='html'
          value={videos["type"]}
          name="type"
          onChange={handleInput}
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          placeholder='"https://www.youtube.com/watch?v=_R5a-Kc0pRc&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=1"'
          value={videos["url"]}
          name="url"
          onChange={handleInput}
        />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
      <h4>Delete card</h4>
      <form className="avideo-form">
        <label htmlFor="delete-video">Video Name </label>
        <input type="text" id="delete-video" placeholder="HTML ga kirish..." />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
};
