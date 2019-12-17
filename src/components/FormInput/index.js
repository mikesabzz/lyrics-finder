import React from "react";
import './FormInput.css'

const FormInput = (props) => {
        return (
            <div className="input-field">
                <form onSubmit={props.handleSubmit}>
                    <label>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            value={props.artist}
                            name="artist"
                            placeholder="Artist"
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            className="form-control form-control-lg ml-2"
                            type="text"
                            value={props.title}
                            name="title"
                            placeholder="Title"
                            onChange={props.handleSecondChange}
                            required
                        />
                    </label>
                    <button className="btn btn-danger ml-3">Submit</button>
                </form>
            </div>
        )
    }

export default FormInput