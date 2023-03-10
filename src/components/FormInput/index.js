import React from "react";
import './FormInput.css'

const FormInput = (props) => {        
        return (
            <div>
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
                </div> 
            </div>
        )
    }

export default FormInput