import React from 'react';

export default function(props) {
    const randomFriend = () => {
        const randomId = Math.floor(Math.random() * props.friends.length)
        props.history.push(`/friend/${randomId}`)
    }

    return (
        <div>
            <h3>Lambda School Friendss List</h3>
            <button onClick={randomFriend}>Random Friend</button>
        </div>
    )
}