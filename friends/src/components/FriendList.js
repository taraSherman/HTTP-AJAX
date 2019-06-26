import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.log('Server Error', error);
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