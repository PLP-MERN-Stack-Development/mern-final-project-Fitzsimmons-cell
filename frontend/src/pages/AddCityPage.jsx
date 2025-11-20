import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AddCityPage(){
  const [name,setName] = useState("");
  const [country,setCountry] = useState("");
  const [population,setPopulation] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/cities", { name, country, population: Number(population) });
    nav("/cities");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add City</h2>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-2 border" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full p-2 border" placeholder="Country" value={country} onChange={e=>setCountry(e.target.value)} />
        <input className="w-full p-2 border" placeholder="Population" value={population} onChange={e=>setPopulation(e.target.value)} />
        <button className="px-4 py-2 bg-green-600 text-white rounded">Create</button>
      </form>
    </div>
  );
}
