import React, { Component } from 'react';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
    state = {
        friends: []
    }

    render() {
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        );
    }
}