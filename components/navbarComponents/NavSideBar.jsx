import React from "react";
import navbar_style from "../../styles/Navbar.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

const NavSideBar = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="navbar_container text-white d-flex flex-column justify-content-start align-items center">
        <div className={navbar_style.name}>
          <h1>Thinushika</h1>
        </div>
        <div className="nav-list">
          <ul className={navbar_style.nav_list_style}>
            <li>
              <a href="#"><AiOutlineArrowRight/>Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
