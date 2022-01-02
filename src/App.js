import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Kobe from "./components/kobe";
import Main from "./components/todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kobe" element={<Kobe />} />
      </Routes>
    </div>
  );
}

export default App;
