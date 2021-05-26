import React from "react";
import './FormInput.css'

const FormInput = (props) => {        
        return (
            <div>
                {props.hidden? "" :
                <div className="input-field">
                    <form onSubmit={props.handleSubmit}>
                        <label>
                            <input
                                className="form-control input-lg ml-3"
                                type="text"
                                value={props.artist}
                                name="artist"
                                placeholder="Artist Name"
                                onChange={props.handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                className="form-control input-lg ml-3"
                                type="text"
                                value={props.title}
                                name="title"
                                placeholder="Song Title"
                                onChange={props.handleSecondChange}
                                required
                            />
                        </label>
                        <br />
                        <button className="search-button btn btn-danger ml-3">
                            <span className="glyphicon glyphicon-search"></span> Search</button>
                    </form>
                </div> }
                {props.hidden == false ? "" :
                <form>
                    <button onClick={props.clear} className="btn btn-secondary m-3">
                        Search For a New Song
                    </button>
                </form>
                }
            </div>
        )
    }

export default FormInput