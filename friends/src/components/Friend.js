import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
    state = {
        friend: null
    }
        
    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchFriend(id);
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data}));
            })
            .catch(error => {
                console.error(error);
            });
    };

        render() {
            const { friend } = this.state;
            return (
                <div className="save-wrapper">
                    <FriendCard friend={friend} />
                </div>
            );
        }
}