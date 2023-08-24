import React, { useState, useEffect } from "react";
import axios from 'axios'
import Lyrics from '../Lyrics'
import FormInput from '../FormInput'
import ITunes from '../ITunes'

function LyricFinder() {
    const [loading, setLoading] = useState(false);
    const [artistLyrics, setArtistLyrics] = useState({});
    const [error, setError] = useState(false);
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [itunes, setItunes] = useState([]);
    const [hidden, setHidden] = useState(false);

    const fetchData = async () => {
        const apiUrl = "https://lyrics-itunes-app.onrender.com/lyrics";
        try {
            const response = await fetch(`${apiUrl}?track=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`);
            const data = await response.json();
            if (response.ok) {
                setArtistLyrics(data.message.body.lyrics.lyrics_body);
                setError(false);
            } else {
                throw new Error("Failed to fetch lyrics");
            }
        } catch (error) {
            console.error("Error fetching lyrics:", error);
            setArtistLyrics("Lyrics Not Found!");
            setError(true);
        }
        setLoading(false);
    };

    const fetchItunesData = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await axios.get(`https://itunes.apple.com/search?term=${artist}+${title}&media=music&limit=1`);
            setItunes(response.data.results);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    };

    useEffect = () => {
        fetchItunesData();
        fetchData();
    }

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === "artist") {
            setArtist(value);
        } else if (name === "title") {
            setTitle(value);
        }
    }

    const handleSecondChange = event => {
        const { name, value } = event.target;
        if (name === "artist") {
            setArtist(value);
        } else if (name === "title") {
            setTitle(value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchData();
        fetchItunesData();
        handleChange(event);
        handleSecondChange(event);
        setHidden(true);
    }

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
    )
}

export default LyricFinder;
