import React from "react";
import './ITunes.css'

const ITunes = (props) => {
    const array = props.itunes.map((itune, index) => {
        if (props.artist !== itune.artistName.toLowerCase()) {
            return null;
        } else {
        return (
            <div className="Itunes-url" key={index}>
                <img src={itune.artworkUrl100} alt="Album Art" />
                <br />
                <audio controls>
                    <source src={itune.previewUrl} />
                </audio>
            </div>
        )}})
    const ituneAudio = props.loading ? <div>Loading Preview...</div> : array

    return (
        <div className="lyric-body">
            <div>{ituneAudio}</div>
        </div>
    )

}     

export default ITunes