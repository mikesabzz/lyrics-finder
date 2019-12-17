import React from "react";

const Lyrics = (props) => {
    return (
        <div>
            <div>{props.loading ? <h1>loading...</h1> : props.artistLyrics.lyrics}</div>
            {/* <div>{props.artistLyrics.lyrics}</div> */}
            {/* <div>{props.error? props.error : props.artistLyrics.lyrics}</div> */}
        </div>
    )
}
export default Lyrics