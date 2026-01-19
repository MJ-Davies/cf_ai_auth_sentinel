import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Waiting for server...");

  const checkHealth = async () => {
    try {
      // This hits http://localhost:5173/api/health -> Proxies to worker
      const res = await fetch('/api/health'); 
      const text = await res.text();
      setMessage(text);
    } catch (err) {
      setMessage("Error connecting to Rust backend");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Auth Sentinel Client</h1>
      <p>Backend Status: <strong>{message}</strong></p>
      <button onClick={checkHealth}>Ping Server</button>
    </div>
  );
}

export default App;
