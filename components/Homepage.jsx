import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavSideBar from "./navbarComponents/NavSideBar";
import ScrollSection from "./homeComponents/ScrollSection";

const Homepage = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex flex-row">
        <div className="col-3 h-100">
          <NavSideBar />
        </div>
        <div className="col-9 h-100">
          <ScrollSection />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
