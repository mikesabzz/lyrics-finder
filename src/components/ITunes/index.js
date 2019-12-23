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
        )
    })
    const arrayFirst = props.loading? <h1>Loading...</h1> : array[0]
    return (
        <div>
            {arrayFirst}
            {props.error ? 
                <div className="lyric-body">
                    Preview Not Found!
                </div> 
            : null}
        </div>
    )
}
export default ITunes