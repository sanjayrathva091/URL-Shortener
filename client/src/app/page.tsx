"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    setError("");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/url/shorten`,
        { originalUrl }
      );
      setShortUrl(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/${res.data.shortUrl}`
      );
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <p>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
      {error && <p className="error">{error}</p>}
      <style jsx>{`
        .container {
          text-align: center;
          margin-top: 50px;
        }
        input {
          padding: 10px;
          margin: 10px;
          width: 300px;
        }
        button {
          padding: 10px 20px;
          cursor: pointer;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
}
