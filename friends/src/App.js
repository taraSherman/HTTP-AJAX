import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import FriendList from './components/FriendList';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';
import EditFriend from './components/EditFriend';
import './App.css';

export default class App extends Component {
  state = {
    friendlist: []
  }

  componentDidMount() {
		axios.get('http://localhost:5000/items')
			.then(response => {
				this.setState({
					friendList: response.data
				})
			})
			.catch(err => {
				console.log('Error:', err)
      })
  }

  updateFriends = (friendList) => {
    this.setState({ friendList})
  }
  
  render() {
    const { friendList } = this.state
      return (
        <div className = "App">
          <nav>
            <h1 className = "header">Lambda Friends</h1>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/EditFriend">Edit Lambda Friends List</NavLink>
              <NavLink to="/AddFriend">Add a new Lambda Friend</NavLink>
            </div>
          </nav>
              

          </div>
      )
  }
};