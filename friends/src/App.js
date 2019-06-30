import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    // initial state
    friends: []
  }
}

  updateFriends = (friends) => {
    // function to be called later when there is any change to the data
    this.setState({ friends})
  }
  
  render() {
      return (
        <div className = "App">
          <h1 className = "header">Lambda School Friends List</h1>
          
          {/* set routes to FriendList and individual friend by id */}
          <Route exact path="/" render={(props) => <FriendList {...props} friends={this.props.friends} updateFriends = {this.updateFriends} />} />
          <Route path="/friends/:id" component={Friend} />
          </div>
      )
  }
};