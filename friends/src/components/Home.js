import React from 'react';

export default function(props) {
    const randomFriend = () => {
        const randomId = Math.floor(Math.random() * props.friends.length)
        props.history.push(`/friend/${randomId}`)
    }

    return (
        <div>
            <button onClick={randomFriend}>Random Friend</button>
        </div>
    )
}