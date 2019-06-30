import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
// import FriendList from './components/FriendList';
// import FriendCard from './components/FriendCard';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';
import EditFriend from './components/EditFriend';
import './App.css';

export default class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
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

  updateFriends = (friends) => {
    this.setState({ friends})
  }
  
  render() {
    const { friends } = this.state
      return (
        <div className = "App">
          <h1 className = "header">Lambda School Friends List</h1>
          
          
          <Route path="/" exact render={(props) => <Home {...props} friends={friends} />} />
          <Route path="/Friend/:id" exact render={(props) => <Friend {...props} friends={friends} />} />
          <Route path="/EditFriend/:id" exact render={(props) => <EditFriend {...props} updateFriends={this.updateFriends} />} />
          <Route path="/NewFriend/:id" exact render={(props) => <NewFriend {...props} updateFriends={this.updateFriends} />} />
          </div>
      )
  }
};