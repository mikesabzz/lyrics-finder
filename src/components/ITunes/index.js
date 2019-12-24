import React from "react";
import './ITunes.css'

const ITunes = (props) => {
    const array = props.itunes.map(itune => {
        if (props.artist != itune.artistName.toLowerCase()) {return (<div>Preview Audio Not Available</div>) }
        else {
        return (
            <div className="Itunes-url">
                <img src={itune.artworkUrl100} />
                <br />
                <audio controls>
                    <source src={itune.previewUrl} />
                </audio>
            </div>
        )}})
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