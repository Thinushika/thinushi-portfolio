import Image from "next/image";
import React from "react";

const HomeSec = () => {
  return (
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
  );
};

export default HomeSec;
