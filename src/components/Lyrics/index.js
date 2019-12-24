import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    const theLyrics = props.loading ? <div>Loading Lyrics...</div> : props.artistLyrics.lyrics
    return (
        <div className="lyric-body">
            {props.lyricError ?
                <div>Lyrics Not Found!</div>
                :
                <div>{theLyrics}</div>
            }
        </div>
    )
}
export default Lyrics