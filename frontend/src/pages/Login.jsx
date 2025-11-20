import React, { useState } from "react";

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    alert("Auth is simple demo-only. You can use backend seed admin credentials or extend later.");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login (demo)</h2>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-2 border" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}
