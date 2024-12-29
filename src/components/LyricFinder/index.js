import React, { useState, useEffect } from "react";
import axios from "axios";
import Lyrics from "../Lyrics";
import FormInput from "../FormInput";
import ITunes from "../ITunes";

function LyricFinder() {
  const [loading, setLoading] = useState(false);
  const [artistLyrics, setArtistLyrics] = useState({});
  const [error, setError] = useState(false);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [itunes, setItunes] = useState([]);
  const [hidden, setHidden] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      //const apiUrl = "http://localhost:5000/lyrics";
      const apiUrl = "https://lyrics-itunes-app.onrender.com/lyrics";
      const response = await fetch(
        `${apiUrl}?artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setArtistLyrics(data.lyrics);
        setError(false);
      } else {
        throw new Error("Failed to fetch lyrics");
      }
    } catch (error) {
      console.error("Error fetching lyrics:", error);
      setArtistLyrics("Lyrics Not Found!");
      setError(true);
    } finally {
        setLoading(false);
    }
  };

  const fetchItunesData = async () => {
    setLoading(true);
    setError(false);
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get("https://lyrics-itunes-app.onrender.com/itunes", {
          params: {
            artist: artist,
            track: title,
          },
        });
      setItunes(response.data.results);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
        setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "artist") {
      setArtist(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleSecondChange = (event) => {
    const { name, value } = event.target;
    if (name === "artist") {
      setArtist(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData();
    fetchItunesData();
    handleChange(event);
    handleSecondChange(event);
    setHidden(true);
  };

  return (
    <div>
      <FormInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSecondChange={handleSecondChange}
        artist={artist}
        title={title}
        hidden={hidden}
      />
      <Lyrics
        error={error}
        artistLyrics={artistLyrics}
        loading={loading}
        hidden={hidden}
      />
      <ITunes
        error={error}
        itunes={itunes}
        loading={loading}
        artist={artist}
        title={title}
      />
    </div>
  );
}

export default LyricFinder;
