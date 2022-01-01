import React from "react";

import kobe from "../images/56366320_101.jpg";

let Kobe = (props) => {
  return (
    <div>
      {props.text}
      <div>
        {" "}
        <img src={kobe} alt="kobe" />
      </div>
    </div>
  );
};

export default Kobe;
