import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    // const theLyrics = props.loading ? <div>Loading Lyrics...</div> : props.artistLyrics;

    const renderLyricsContent = () => {
       if (typeof props.artistLyrics === 'string') {
          return <div style={{ whiteSpace: 'pre-wrap' }}>{props.artistLyrics}</div>;
        } else {
          return <div>Search for a Song!</div>;
        }
      };

    return (
        <div className="lyric-body">
            {props.hidden && props.artistLyrics === undefined ?
                <div>Lyrics Not Found!</div>
                :
                props.loading ? <div>Loading Lyrics...</div> : renderLyricsContent()
            }
        </div>
    )
}
export default Lyrics