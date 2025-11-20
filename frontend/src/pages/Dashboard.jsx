import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard(){
  const [metrics, setMetrics] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(()=>{
    const socket = io(import.meta.env.VITE_API_URL?.replace("/api","") || "http://localhost:5000");
    socket.on("connect", ()=> console.log("socket connected", socket.id));
    socket.on("cityMetrics", data => {
      setMetrics(data);
      const time = new Date().toLocaleTimeString();
      const point = data.reduce((acc,m) => ({ ...acc, time, [m.type]: m.value }), {});
      setHistory(prev => [...prev.slice(-11), point]);
    });
    return () => socket.disconnect();
  },[]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Live Metrics</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map(m => (
          <div key={m.id} className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">{m.type}</h4>
            <p className="text-2xl">{m.value} <small className="text-sm">{m.unit}</small></p>
          </div>
        ))}
      </div>

      <div className="card bg-white p-4 shadow rounded" style={{height:300}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line dataKey="air" dot={false} />
            <Line dataKey="traffic" dot={false} />
            <Line dataKey="waste" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
