import React, { Component } from 'react';
import axios from 'axios';

export default class NewFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        errorMessage: null
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(`http://localhost:5000/friends/${id}`)
        .then(response => {
            const { name, age, email } = response.data
            this.setState({ name, age, email })
        })
        .catch(err => {
            this.setState({
                errorMessage: err.response.data.error
            })
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateFriend = (evt) => {
        evt.preventDefault()

        const { name, age, email } = this.state
        const friendAttr = {name, age, email}

        axios.put("http://localhost:5000/friends", friendAttr)
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

    deleteFriend = (evt) => {
        evt.preventDefault()

        const id = this.props.match.params.id

        axios.delete(`http://localhost:5000/friends/${id}`)
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
        const { name, age, email, errorMessage } = this.state

        return (
            <form onSubmit={this.updateFriend}>
                <h1>Edit Lambda Friend</h1>
                <p>{errorMessage}</p>

                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />

                <button type="button">Save</button>
                <button onClick={this.deleteFriend}>Delete</button>
            </form>    
        )
    }
}