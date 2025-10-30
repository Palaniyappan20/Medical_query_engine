import React, { useEffect, useState } from "react";

function App() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    fetch(`http://localhost:4000/search?q=${encodeURIComponent(q)}`)
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(() => alert("Search failed"));
  };

  useEffect(() => {
    fetch("http://localhost:4000/search?q=")
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(() => {});
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Medsetra Medical Query Engine</h1>
      <div>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Enter symptoms or query" />
        <button onClick={search} style={{ marginLeft: 8 }}>Search</button>
      </div>
      <ul>
        {results.map(r => (
          <li key={r._id}>{r.symptom} — {r.summary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
