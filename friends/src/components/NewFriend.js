import React, { Component } from 'react';
import axios from 'axios';

export default class NewFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        errorMessage: null
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    addNewFriend = (evt) => {
        evt.preventDefault()

        const { name, age, email } = this.state
        const friendAttr = {name, age, email}

        axios.post("http://localhost:5000/friends", friendAttr)
            .then((response) => {
                this.setState({
                    errorMessage: null
                })

                this.props.updateFriends(response.data)
                this.props.history.push("/friends")
            })

            .catch((err) => {
                this.setState({
                    errorMessage: err.response.data.error
                })
            })
    }

    render() {
        const { name, age, email } = this.state

        return (
            <form onSubmit={this.addNewFriend}>
                <h1>Add New Lambda Friend</h1>
                {/* <p>{errorMessage}</p> */}

                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
            </form>    
        )
    }
}