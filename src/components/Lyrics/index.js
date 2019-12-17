import React from "react";

const Lyrics = (props) => {
    return (
        <div>
            <div>
                {props.loading ? <h1>loading...</h1> : props.artistLyrics.lyrics}
                {/* props.error? props.error : null}  */}
            </div>
        </div>
    )
}
export default Lyrics