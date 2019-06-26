import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                friend: null
            };
    }
        componentDidMount() {
            const { id } = this.props.match.params;
            this.fetchFriend(id);
        }

        fetchFriend = id => {
            axios
                .get(`http://localhost:5000/friends/${id}`)
                .then(response => {
                    this.setState(() => ({ friend: response.data}));
                })
                .catch(error => {
                    console.error(error);
                });
        };

        saveFriend = () => {
            const addToFriendList = this.props.addToFriendList;
            addToFriendList(this.state.friend);
        };

        render() {
            if (!this.state.friend) {
                return <div> Loading... Please wait...</div>
            }
            
            const { friend } = this.state;
            return (
                <div className="save-wrapper">
                    <FriendCard friend={friend} />
                    <div className="save-button" onClick={() => this.saveFriend()}>
                        Save
                    </div>
                </div>
            );
        }
}