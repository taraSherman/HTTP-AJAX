import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import FriendList from './components/FriendList';
import './App.css';

export default class App extends Component {
  state = {
    // initial state
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

  updateFriends = (friends) => {
    // function to be called later
    this.setState({ friends})
  }
  
  render() {
      return (
        <div className = "App">
          <h1 className = "header">Lambda School Friends List</h1>
          
          {/* set route to FriendList */}
          <Route path="/" exact render={(props) => <FriendList {...props} friends={this.props.friends} updateFriends = {this.updateFriends} />} />
          </div>
      )
  }
};