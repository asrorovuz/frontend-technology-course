import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as LeftLine } from "../assistant/arrow-left.svg"
import "../styles/LoginPage.css";

export const LoginPage = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (val) => {
    setUser({ ...user, email: val });
  };

  const onChangePassword = (val) => {
    setUser({ ...user, password: val });
  };

  const sendUser = (e) => {
    e.preventDefault();
    if (
      user.email === "asrorovsardor07@gmail.com" &&
      user.password === "asrorov22"
    ) {
      navigate("/admin");
    } else {
      navigate("");
      alert("Email yoki parol noto'g'ri kiritilgan!")
    }
  };

  return (
    <>
      <div className="form-block d-flex">
        <div className="form d-flex">
          <Link className="navigate-home" to={"/"}>
            <LeftLine/> Bosh sahifaga qaytish
          </Link>
          <form className="d-flex" onSubmit={(e) => sendUser(e)}>
            <h2>Admin panel</h2>
            <div className="email-block">
              <label htmlFor="email">Pochta manzilingizni kiriting:</label>
              <input
                type="email"
                id="email"
                required
                placeholder="examle@gmail.com"
                value={user.email}
                onInput={(e) => onChangeEmail(e.target.value)}
              />
            </div>
            <div className="password-block">
              <label htmlFor="password">Parolingizni kiriting: </label>
              <input
                type="password"
                id="password"
                required
                placeholder="********"
                value={user.password}
                onInput={(e) => onChangePassword(e.target.value)}
              />
            </div>
            <button type="submit" className="send-form">
              Kirish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
