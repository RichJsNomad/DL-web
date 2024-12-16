import { useState } from "react";
import Login from "./pages/Login.jsx";
import LoginError from "./pages/LoginError.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tarif from "./pages/Tarif.jsx";
import MainPage from "./pages/MainPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/auth" element={<Login />}></Route>
        <Route path="/authError" element={<LoginError />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/tarif" element={<Tarif />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
