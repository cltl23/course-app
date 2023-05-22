import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course1 from "./pages/Course1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Course1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
