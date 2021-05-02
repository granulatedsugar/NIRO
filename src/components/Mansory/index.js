import React, { useState } from "react";
import { photos } from "./photos";
import { FaTimes } from 'react-icons/fa';
import "./Mansory.css";

const Mansory = () => {
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");

  const getImg = (src) => {
    setTempSrc(src);
    setModel(true);
  };
  return (
    <div>
      <div className={model ? "model open" : "model"}>
        <img src={tempSrc} />
        <FaTimes onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {photos.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.src)}>
              <img src={item.src} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mansory;
