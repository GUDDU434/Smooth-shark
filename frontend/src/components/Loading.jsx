import React from "react";
import "./Loading.scss";
const Loading = () => {
  return (
    <div>
      <div className="box">
        <div className="sk-circle"></div>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
