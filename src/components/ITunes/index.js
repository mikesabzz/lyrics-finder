import React from "react";
import './ITunes.css'

const ITunes = (props) => {
    const array = props.itunes.map(itune => {
        if (props.artist != itune.artistName.toLowerCase()) {
            return (<div>{props.ituneError}</div>) 
        } else {
        return (
            <div className="Itunes-url">
                <img src={itune.artworkUrl100} />
                <br />
                <audio controls>
                    <source src={itune.previewUrl} />
                </audio>
            </div>
        )}})
        const ituneAudio = props.loading ? <div>Loading Preview...</div> : array
    return (
        <div className="lyric-body">
            {props.ituneError ? 
                <div>Preview Not Found!</div> 
            : <div>{ituneAudio}</div>}
        </div>
    )

}     

export default ITunes