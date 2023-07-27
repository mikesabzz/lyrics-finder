import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    // console.log(props);
    const theLyrics = props.loading ? <div>Loading Lyrics...</div> : props.artistLyrics;
    return (
        <div className="lyric-body">
            {props.hidden && props.artistLyrics === undefined ?
                <div>Lyrics Not Found!</div>
                :
                <div>{theLyrics}</div>
            }
        </div>
    )
}
export default Lyrics