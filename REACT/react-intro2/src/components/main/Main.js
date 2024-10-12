import React from "react";

const Main = (props) => {
  return (
    <div className="Main">
      <p>{props.mainProp.mainTitle}</p>
      <p>{props.mainProp.mainText}</p>
      <p>{props.mainProp.mainDeneme}</p>
    </div>
  );
};

export default Main;
