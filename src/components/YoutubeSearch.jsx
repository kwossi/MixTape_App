import React, { useContext, useState } from "react";
import { TapeContext } from "../store/TapeContext";
import { MdAddBox } from "react-icons/md";

const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchYouTube = async () => {
    if (!query) return;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`
    );
    const data = await response.json();
    setResults(data.items);
  };

  const addSong = (song) => {
    mixtapeDispatch({ type: "ADD", payload: { song } });
  };

  return (
    <div className="search-container">
      <h2>Search YouTube for songs... </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs"
      />
      <button onClick={searchYouTube}>Search</button>
      <div id="results-container">
        {results.map((item) => (
          <div className="result" key={item.id.videoId}>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
            />
            <p>{item.snippet.title}</p>
            <button className="add-button" onClick={() => addSong(item)}>
              <MdAddBox />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
