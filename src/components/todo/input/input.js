import React from "react";

let Input = (props) => {
  let onChangeHandler = (e) => {
    props.onchange(e.target.value);
  };

  return <input onChange={onChangeHandler} type="text" value={props.value} />;
};

export default Input;
