import React, { Component } from 'react';
import FriendCard from './FriendCard';
import axios from 'axios';

export default class FriendList extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        // get friends list from server
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({
                    friends: response.data
                }));
            })
            .catch(err => {
                console.log('Server Error', err);
            });
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