import Image from "next/image";
import React from "react";
import home_style from "../../styles/Home.module.css";
import dynamic from 'next/dynamic';
// import 'fullpage.js/vendors/scrolloverflow'; 
import 'fullpage.js/dist/fullpage.css';
import { useEffect } from 'react';
import HomeSec from "./innersections/HomeSec";




// const FullPage = dynamic(() => import('fullpage.js'), { ssr: false });

const ScrollSection = () => {

  // useEffect(() => {
  //   new FullPage('#fullpage', {
  //     scrollingSpeed: 700,
  //   autoScrolling: true,
  //   fitToSection: true,
  //   });
  // }, []);


  return (
    <div className="container-fluid m-0 p-0 scroll_container">
      <div className="d-flex flex-column ">
        <div className="scroll d-flex flex-column" id="fullpage">
          <HomeSec />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
