import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" exact Component={Home}></Route>
        <Route to="/:id" Component={Detail}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
