import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./router/Home.js";
import Detail from "./router/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  )
}

export default App;