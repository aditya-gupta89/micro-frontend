import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
