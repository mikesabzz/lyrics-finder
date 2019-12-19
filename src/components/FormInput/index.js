import React from "react";
import './FormInput.css'

const FormInput = (props) => {
        return (
            <div>
                <div className="input-field">
                    <form onSubmit={props.handleSubmit}>
                        <label>
                            <input
                                className="form-control input-lg ml-2"
                                type="text"
                                value={props.artist}
                                name="artist"
                                placeholder="Artist Name"
                                onChange={props.handleChange}
                                required
                            />
                        </label>
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
                        <button className="btn btn-danger ml-4">
                            <span className="glyphicon glyphicon-search"></span> Search</button>
                    </form>
                </div>
                <form>
                    <button onClick={props.clear} className="btn btn-light ml-3">
                        <span className="glyphicon glyphicon-refresh"></span>
                    </button>
                </form>
            </div>
        )
    }

export default FormInput