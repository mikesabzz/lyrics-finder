import React from 'react';

const SongTitle = (props) => {
    return (
        <div>
            <input type="text" placeholder="Song Title" value={props.value} onChange={props.onChange} />
        </div>
    )
}
export default SongTitle