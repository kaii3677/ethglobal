import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure Toastify styling is imported
import Login from "./front-end/Login/Login";
import Mainpage from "./front-end/Mainpage/Mainpage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer /> 
        <Routes>
          {/* Default Login Route */}
          <Route path="/" element={<Login />} />

          {/* Main Page Route */}
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
