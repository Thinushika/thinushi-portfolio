import Image from "next/image";
import React from "react";
import home_style from "../../styles/Home.module.css";
import dynamic from 'next/dynamic';
// import 'fullpage.js/vendors/scrolloverflow'; 
import 'fullpage.js/dist/fullpage.css';
import { useEffect } from 'react';




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
          {/* grid */}
          <div className="d-flex flex-row section">
            <div className="col-6 column-box d-flex justify-content-center align-items-center position-relative">
              <Image
                src={"/imgs/flowers.jpg"}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="col-6 column-box d-flex justify-content-center align-items-center">
              <h1>right</h1>
            </div>
          </div>
          {/* 2 */}
          <div className="d-flex flex-row section">
            <div className="col-6 column-box d-flex justify-content-center align-items-center">
              <h1>left</h1>
            </div>
            <div className="col-6 column-box d-flex justify-content-center align-items-center position-relative">
              <Image
                src={"/imgs/flowers.jpg"}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
