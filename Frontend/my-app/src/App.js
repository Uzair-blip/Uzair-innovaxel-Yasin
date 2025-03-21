import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_BASE_URL = "http://localhost:5000";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [stats, setStats] = useState(null);
  const [updatedUrl, setUpdatedUrl] = useState("");

  // Function to create a short URL
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

  // Function to get the original URL
  const handleRetrieveUrl = async () => {
    if (!shortCode) {
      toast.error("Please enter a short code.");
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/shorten/${shortCode}`);
      setOriginalUrl(response.data.url);
      toast.success("Original URL fetched successfully!");
    } catch (error) {
      toast.error("Short URL not found!");
    }
  };

  // Function to get URL statistics
  const handleGetStats = async () => {
    if (!shortCode) {
      toast.error("Please enter a short code.");
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/shorten/${shortCode}/stats`);
      setStats(response.data);
    } catch (error) {
      toast.error("Error fetching statistics!");
    }
  };

  // Function to update a short URL
  const handleUpdateUrl = async () => {
    if (!shortCode || !updatedUrl) {
      toast.error("Please enter a short code and the new URL.");
      return;
    }

    try {
      await axios.put(`${API_BASE_URL}/shorten/${shortCode}`, { url: updatedUrl });
      toast.success("Short URL updated successfully!");
      setUpdatedUrl("");
    } catch (error) {
      toast.error("Error updating short URL!");
    }
  };

  // Function to delete a short URL
  const handleDeleteUrl = async () => {
    if (!shortCode) {
      toast.error("Please enter a short code.");
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/shorten/${shortCode}`);
      toast.success("Short URL deleted successfully!");
      setShortCode("");
      setOriginalUrl("");
      setStats(null);
    } catch (error) {
      toast.error("Error deleting short URL!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🚀 URL Shortener</h2>
      {/* Shorten URL Section */}
      <div className="card p-3 mb-3">
        <h5>Shorten a URL</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL to shorten"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleShortenUrl}>
            Shorten
          </button>
        </div>
        {shortUrl && (
          <p className="mt-2">
            <strong>Short Code:</strong> {shortUrl}
          </p>
        )}
      </div>
      {/* Retrieve Original URL Section */}
      <div className="card p-3 mb-3">
        <h5>Retrieve Original URL</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter short code"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
          />
          <button className="btn btn-info" onClick={handleRetrieveUrl}>
            Get URL
          </button>
        </div>
        {originalUrl && (
          <p className="mt-2">
            <strong>Original URL:</strong>{" "}
            <a href={originalUrl} target="_blank" rel="noopener noreferrer">
              {originalUrl}
            </a>
          </p>
        )}
      </div>

      {/* Get Stats Section */}
      <div className="card p-3 mb-3">
        <h5>Get URL Stats</h5>
        <button className="btn btn-warning" onClick={handleGetStats}>
          Get Stats
        </button>
        {stats && (
          <div className="mt-3">
            <p><strong>ID:</strong> {stats.id}</p>
            <p><strong>Original URL:</strong> {stats.url}</p>
            <p><strong>Short Code:</strong> {stats.shortCode}</p>
            <p><strong>Created At:</strong> {new Date(stats.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(stats.updatedAt).toLocaleString()}</p>
            <p><strong>Access Count:</strong> {stats.accessCount}</p>
          </div>
        )}
      </div>
      {/* Update Short URL Section */}
      <div className="card p-3 mb-3">
        <h5>Update Short URL</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new URL"
            value={updatedUrl}
            onChange={(e) => setUpdatedUrl(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleUpdateUrl}>
            Update
          </button>
        </div>
      </div>

      {/* Delete Short URL Section */}
      <div className="card p-3">
        <h5>Delete Short URL</h5>
        <button className="btn btn-danger" onClick={handleDeleteUrl}>
          Delete
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
