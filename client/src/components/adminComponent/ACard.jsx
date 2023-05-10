import React, { useState } from "react";

export const ACard = () => {
  const [file, setFile] = useState("")
  const [type, setType] = useState(null);
  const [card, setCard] = useState({
    title: "",
    type: "",
    avatar: file,
  });

  const handleCard = (e) => {
    const { name, value } = e.target;
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const sendCardForm = async (e) => {
    e.preventDefault();
    console.log(card)
    if (card.title !== 0 && card.avatar !== 0 && card.type !== 0) {
      try {
        const response = await fetch(
          "https://front-teach-backend.vercel.app/course/post_course",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
          }
        )
          .then((response) => response.json())
          .then((result) => console.log(result));

        const result = await response.json();
        alert("Success", result);
      } catch (error) {
        alert("Ma'lumotlar yuborilmadi: " + error);
      }
    } else {
      alert("Form noto'g'ri to'dirilgan.");
    }

    setCard({
      title: "",
      type: "",
      avatar: "",
    });
  };

  const deleteCard = (e) => {
    e.preventDefault();

    fetch(
      `https://front-teach-backend.vercel.app/course/delete_course${type}`,
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
    <div className="acard">
      <h3>Add Course Card</h3>
      <h4>Add card</h4>
      <form
        className="card-form"
        onSubmit={(e) => sendCardForm(e)}
        enctype="multipart/form-data"
      >
        <label htmlFor="acard-title">Title </label>
        <input
          type="text"
          id="acard-title"
          name="title"
          placeholder="HTML"
          value={card["title"]}
          onChange={handleCard}
        />
        <label htmlFor="acard-type">Type</label>
        <input
          type="text"
          id="acard-type"
          name="type"
          placeholder="html"
          value={card["type"]}
          onChange={handleCard}
        />
        <label>Download Image</label>
        <input
          type="file"
          id="cardfile"
          onSubmit={(e) => setFile(e.target.value)}
        />
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
      <h4>Delete card</h4>
      <form className="doc-form" onSubmit={deleteCard}>
        <label htmlFor="delete-doc">Title </label>
        <input type="text" id="delete-doc" placeholder="HTML..." onInput={setType}/>
        <div className="admin-button d-flex">
          <button className="admin-btn" type="submit">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
};
