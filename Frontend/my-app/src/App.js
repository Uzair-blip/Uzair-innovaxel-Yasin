  import React, { useState } from "react";
  import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  const API_BASE_URL = "http://localhost:5000";

  const App = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [orignalUrl, setOrignalUrl] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [stats, setStats] = useState(null);

    // Function to create short URL
    const handleShortenUrl = async () => {
      if (!url) {
        toast.error("Please enter a URL.");
        return;
      }
    
      try {
        const response = await axios.post(`${API_BASE_URL}/shorten`, { url });
        setShortUrl(response.data.shortCode);
        toast.success("Short URL created successfully!");
      } catch (error) {
        toast.error("Error creating short URL!");
      }
    };
   
    
    return (
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
        <h2>URL Shortener</h2>

        {/* Shorten URL Section */}
        <div>
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "80%", padding: "8px" }}
          />
          <button onClick={handleShortenUrl} style={{ marginLeft: "10px", padding: "8px" }}>
            Shorten
          </button>
          {shortUrl && (
    <p>
      <strong>Short Code:</strong> {shortUrl}
    </p>
  )}

        </div>

        {/* Fetch & Redirect Section */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter short code"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            style={{ width: "80%", padding: "8px" }}
          />
          <button onClick={handleRedirect} style={{ marginLeft: "10px", padding: "8px" }}>
            Go
          </button>
        </div>
        {orignalUrl && (
    <p>
      <strong>Original Url:</strong> {orignalUrl}
    </p>
  )}
        {/* Get Stats Section */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleGetStats} style={{ padding: "8px" }}>
            Get Stats
          </button>
          {stats && (
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              <p><strong>ID:</strong> {stats.id}</p>
              <p><strong>URL:</strong> {stats.url}</p>
              <p><strong>Short Code:</strong> {stats.shortCode}</p>
              <p><strong>Created At:</strong> {new Date(stats.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(stats.updatedAt).toLocaleString()}</p>
              <p><strong>Access Count:</strong> {stats.accessCount}</p>
            </div>
          )}
        </div>

        <ToastContainer />
      </div>
    );
  };

  export default App;
