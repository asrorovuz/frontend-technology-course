import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADoc } from "../components/adminComponent/ADoc";
import { ACard } from "../components/adminComponent/ACard";
import { AVideo } from "../components/adminComponent/AVideo";
import { AUser } from "../components/adminComponent/AUser";
import { ReactComponent as LeftLine } from "../assistant/arrow-left.svg";

import "../styles/Admin.css";

export const AdminPage = () => {
  const [renderComp, setRenderComp] = useState(<ADoc />);

  const changeComp = (e) => {
    let value = e.target.innerText;
    if (value === "Manbalar") {
      setRenderComp(<ADoc />);
    } else if (value === "Kurslar") {
      setRenderComp(<ACard />);
    } else if (value === "Videolar") {
      setRenderComp(<AVideo />);
    } else if (value === "Admin") {
      setRenderComp(<AUser />);
    } else {
      console.log("err");
    }
  };

  return (
    <div className="admin-page d-flex">
      <div className="admin-navbar">
        <h2>
          <Link to="/">
            <LeftLine /> Qaytish
          </Link>
        </h2>
        <ul className="d-flex" onClick={(e) => changeComp(e)}>
          <li>Manbalar</li>
          <li>Kurslar</li>
          <li>Videolar</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="admin-main">{renderComp}</div>
    </div>
  );
};
