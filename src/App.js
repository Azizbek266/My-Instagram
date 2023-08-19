import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}


function New() {
  return <h2>New Post</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}


export default App;