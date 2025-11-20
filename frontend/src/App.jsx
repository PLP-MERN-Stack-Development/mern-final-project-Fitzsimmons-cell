import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CitiesPage from "./pages/CitiesPage";
import AddCityPage from "./pages/AddCityPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App(){
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4 flex justify-between">
          <h1 className="font-bold">CitySense</h1>
          <nav className="flex gap-4">
            <Link to="/">Dashboard</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/add-city">Add City</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/cities" element={<CitiesPage/>} />
          <Route path="/add-city" element={<AddCityPage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </div>
  );
}
