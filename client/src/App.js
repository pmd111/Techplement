import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});
  const [author, setAuthor] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchRandomQuote = async () => {
    const response = await axios.get("http://localhost:5000/random-quote");
    setQuote(response.data);
  };

  const searchQuotes = async () => {
    const response = await axios.get(`http://localhost:5000/quotes?author=${author}`);
    setSearchResults(response.data);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Quote of the Day</h1>
      <div style={{ background: "#eee", padding: "20px", borderRadius: "5px" }}>
        <p>"{quote.quote}"</p>
        <p>- {quote.author}</p>
      </div>
      <button onClick={fetchRandomQuote}>Get Another Quote</button>
      <div>
        <input 
          type="text" 
          placeholder="Search by author..." 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <button onClick={searchQuotes}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          {searchResults.map((q, index) => (
            <p key={index}>"{q.quote}" - {q.author}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
