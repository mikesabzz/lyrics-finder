import React from "react";

const FormInput = (props) => {
        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={props.artist}
                            name="artist"
                            placeholder="Artist"
                            onChange={props.handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            value={props.title}
                            name="title"
                            placeholder="Title"
                            onChange={props.handleSecondChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

export default FormInput