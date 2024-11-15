import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure Toastify styling is imported
import Login from "./front-end/Login/Login";
import Mainpage from "./front-end/Mainpage/Mainpage";
import Donation from "./front-end/Donation/Donation";
import Vote from "./front-end/Vote/Vote";
import Financial from "./front-end/Financial/Financial";
import Navbar from "./front-end/Navbar/Navbar"; // Import Navbar
import FinancialDetails from "./front-end/FinancialDetails/FinancialDetails";

// Layout component to conditionally render the Navbar
const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <ToastContainer />
      {/* Only show Navbar if not on the Login page */}
      {location.pathname !== "/" && <Navbar />}
      {/* Render the child routes */}
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Login Route */}
        <Route path="/" element={<Login />} />

        {/* Wrap other routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/financialdetails" element={<FinancialDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
