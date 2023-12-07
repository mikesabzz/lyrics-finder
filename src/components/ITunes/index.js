import React, { useRef } from "react";
import "./ITunes.css";

const ITunes = (props) => {
  const audioRef = useRef(null);

  const playPreview = (previewUrl) => {
    if (audioRef.current) {
      // Pause and reset the previous audio element
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create a new audio element
    const audio = new Audio(previewUrl);
    audio.play();

    // Save the new audio element to the ref for future use
    audioRef.current = audio;
  };
  const array = props.itunes.map((itune, index) => {
    if (props.artist !== itune.artistName.toLowerCase()) {
      return null;
    } else {
      return (
        <div className="Itunes-url" key={index}>
          <img src={itune.artworkUrl100} alt="Album Art" />
          <br />

          <button
            className="btn btn-light mt-2"
            onClick={() => playPreview(itune.previewUrl)}
          >
            Play Preview
          </button>
        </div>
      );
    }
  });
  const ituneAudio = props.loading ? <div>Loading Preview...</div> : array;

  return (
    <div className="lyric-body">
      <div>{ituneAudio}</div>
    </div>
  );
};

export default ITunes;
