import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import { ReactComponent as YouTube } from "../images/youtube.svg";
import { ReactComponent as GitHub } from "../images/github.svg";
import { ReactComponent as Telegram } from "../images/telegram.svg";
import "../styles/Layout.css";
import classNames from "classnames";
import { ReactComponent as Toggle } from "../images/align-justify.svg";

export const Layout = ({ navbar, showNavbar }) => {
  return (
    <>
      <header>
        <div className="d-flex header">
          <div className="logo">
            <h1>
              <Link to={"/"}>F.T </Link>
            </h1>
          </div>
          <div className={classNames(navbar ? "back-nav d-block" : "back-nav")}>
            <div className="navbar d-flex">
              <ul className="navbar-left d-flex">
                <li>
                  <CustomLink to={"/"}>Bosh sahifa</CustomLink>
                </li>
                <li>
                  <CustomLink to={"/doc"}>Manbalar</CustomLink>
                </li>
                <li>
                  <CustomLink to={"/course"}>Kurslar</CustomLink>
                </li>
                <li>
                  <CustomLink to={"/about"}>Biz haqimizda</CustomLink>
                </li>
                <li>
                  <CustomLink to={"/contact"}>Aloqa</CustomLink>
                </li>
              </ul>
              <div className="admin">
                <Link to={"/login"}>Admin</Link>
              </div>
            </div>
          </div>
          <div className="toggle" onClick={showNavbar}>
            <Toggle />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container d-flex footer">
          <div className="footer-content d-flex">
            <p>(+998) 91 461-81-90</p>
            <address>Uzbekistan, Qarshi</address>
          </div>

          <div className="social-media d-flex">
            <div className="youtube">
              <Link to={"https://www.youtube.com/@SamarBadriddinov"}>
                <YouTube className="soc-icon" />
              </Link>
            </div>
            <div className="github">
              <Link to={"https://github.com/asrorovuz?tab=repositories"}>
                <GitHub className="soc-icon" />
              </Link>
            </div>
            <div className="telegram">
              <Link to={"https://t.me/asrorov_official_uz"}>
                <Telegram className="soc-icon" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
