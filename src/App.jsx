import { useState } from "react";
import Login from "./pages/Login.jsx";
import LoginError from "./pages/LoginError.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Promo from "./pages/Promo.jsx";
import MainPage from "./pages/MainPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/authError" element={<LoginError />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/promo" element={<Promo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
