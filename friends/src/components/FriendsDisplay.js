import React, { Component } from 'react'
import './Friends.css';

export default class FriendsDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="list-group">
            {this.props.data.map( friend => (
                <form onSubmit={this.props.deleteFriend} className="list-group-item">
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <div class="btn-group-vertical">
                        <button className="btn btn-secondary">Update Friend</button>
                        <button type="submit" className="btn btn-danger">Delete Friend</button>
                    </div>
                    
                </form>
            ))}
        </div>
        )
    }
}
