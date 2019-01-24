import React, { Component } from 'react'
import FriendCard from './FriendCard'
import './Friends.css';

export default class FriendsDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="list-group">
            {this.props.data.map( friend => (
               <FriendCard friend={friend} newFriend={this.props.newFriend} deleteFriend={this.props.deleteFriend} />
            ))}
        </div>
        )
    }
}
