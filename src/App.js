import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./screens/authentication/authentication";
import Home from "./screens/Home/Home";
import MovieScreen from "./screens/Movie/movieScreen";
import Payload from "./screens/theater/payload/payload";
import TheaterScreen from "./screens/theater/theaterScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieScreen />} />
        <Route path="/theater/:id" element={<TheaterScreen />} />
        <Route path="/theater/:id/bill" element={<Payload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
