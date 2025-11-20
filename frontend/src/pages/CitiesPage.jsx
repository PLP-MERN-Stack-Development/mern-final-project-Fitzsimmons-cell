import React, { useEffect, useState } from "react";
import api from "../api";

export default function CitiesPage(){
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try{
      const res = await api.get("/cities");
      setCities(res.data);
    }catch(err){
      alert("Failed to load cities");
    } finally { setLoading(false); }
  };

  useEffect(()=> { load(); }, []);

  const handleDelete = async (id) => {
    if(!confirm("Delete city?")) return;
    await api.delete(`/cities/${id}`);
    setCities(prev => prev.filter(c => c._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cities</h2>
      {loading ? <p>Loading...</p> : (
        <div className="grid gap-4">
          {cities.map(c => (
            <div key={c._id} className="p-4 bg-white shadow rounded">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{c.name} — {c.country}</h3>
                  <p>Population: {c.population}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=> handleDelete(c._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
