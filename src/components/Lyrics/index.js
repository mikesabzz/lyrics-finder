import React from "react";
import './Lyrics.css'

const Lyrics = (props) => {
    return (
        <div  className="lyric-body">
            <div>
                {props.loading ? <h1>loading...</h1> : props.artistLyrics.lyrics}
                {props.error? props.error : null} 
            </div>
        </div>
    )
}
export default Lyrics