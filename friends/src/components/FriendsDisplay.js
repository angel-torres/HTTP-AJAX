import React, { Component } from 'react'
import './Friends.css';

export default class FriendsDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
        <div className="list-group">
            {this.props.data.map( friend => (
                <div className="list-group-item">
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button className="btn btn-info">Update Friend</button>
                </div>
            ))}
        </div>
        )
    }
}
