import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure Toastify styling is imported
import Login from "./front-end/Login/Login";
import Mainpage from "./front-end/Mainpage/Mainpage";
import Donation from "./front-end/Donation/Donation";
import Vote from "./front-end/Vote/Vote";
import Financial from "./front-end/Financial/Financial";


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
          <Route path="/donation" element={<Donation />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
