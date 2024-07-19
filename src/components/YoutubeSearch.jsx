import React, { useState } from "react";

const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchYouTube = async () => {
    if (!query) return;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`
    );
    const data = await response.json();
    setResults(data.items);
  };

  return (
    <div>
      <h1>YouTube Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for videos"
      />
      <button onClick={searchYouTube}>Search</button>
      <div id="results">
        {results.map((item) => (
          <div key={item.id.videoId}>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
            />
            <p>{item.snippet.title}</p>
            <a
              href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
