import React from "react";

const ITunes = (props) => {
    const array = props.itunes.map(itune => {
        return (
            <div>
                <audio controls>
                    <source src={itune.previewUrl} />
                </audio>
                <img src={itune.artworkUrl100} />
            </div>
        )})
    return (
        <div className="lyric-body">
            {props.loading ? <h1>Loading Preview...</h1> : array}
            {props.error ? 
                <div>
                    Preview Not Found!
                </div> 
            : null}
        </div>
    )
}
export default ITunes