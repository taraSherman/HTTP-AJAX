import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import Friend from './components/Friend';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendList: []
    }
  }

  addToFriendList = friend => {
    const friendList = this.state.friendList;
    friendList.push(friend);
    this.setState({ friendList });
  };
  
  render() {
      return (
          <div>
            <FriendList list={this.state.friendList} />
            <div>
              <Route exact path="/" component={FriendList} />
              <Route path="/friends/:id" component={Friend} />
            </div>
          </div>
      )
  }
};
