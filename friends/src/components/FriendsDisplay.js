import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
                    <p className="friend-id">{friend.id}</p>
                    <div class="btn-group-vertical">
                        <Link to={`/update/${friend.id}`} className="btn btn-info">Update Friend</Link>
                        <button className="btn btn-danger">Delete Friend</button>
                    </div>
                </form>
            ))}
        </div>
        )
    }
}
