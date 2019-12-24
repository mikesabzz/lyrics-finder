import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    const theLyrics = props.loading ? <h1>Loading Lyrics...</h1> : props.artistLyrics.lyrics
    return (
        <div className="lyric-body">
            {props.error ?
                <div>Song Not Found!</div>
                :
                <div>{theLyrics}</div>
            }
        </div>
    )
}
export default Lyrics