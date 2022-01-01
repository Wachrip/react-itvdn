import React, { Component } from "react";

import Name from "./name";

let NamesList = () => {
  let names = ["First", "Second", "Third"];
  return <ul>
    {names.map(it => <Name key={it.toString()} name={it}>{it}</Name>)}
  </ul>
};

export default NamesList;
