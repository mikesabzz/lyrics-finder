import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    const theLyrics = props.loading ? <div>Loading Lyrics...</div> : props.artistLyrics.lyrics_body;
    // console.log(props.artistLyrics.lyrics_body);
    return (
        <div className="lyric-body">
            {props.hidden && props.artistLyrics.lyrics_body == undefined ?
                <div>Lyrics Not Found!</div>
                :
                <div>{theLyrics}</div>
            }
        </div>
    )
}
export default Lyrics