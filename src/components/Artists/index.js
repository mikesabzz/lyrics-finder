import React from 'react';

const Artists = (props) => {
    return (
        <div>
            <input type="text" placeholder="Artist" value={props.value} onChange={props.onChange} />
        </div>
    )
}
export default Artists