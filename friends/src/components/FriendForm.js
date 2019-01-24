import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
        <div className="form-wrapper">
            <form onSubmit={this.props.addFriend} className="form-wrapper">
                <div>
                    <input onChange={this.props.handleChanges} value={this.props.newFriend.name} name="name" className="form-control form-control-lg" type="text" placeholder="name"/>
                    <input onChange={this.props.handleChanges} value={this.props.newFriend.age} name="age" className="form-control form-control-lg" type="text" placeholder="age"/>
                    <input onChange={this.props.handleChanges} value={this.props.newFriend.email} name="email" className="form-control form-control-lg" type="email" placeholder="email"/>
                </div>
                <div>
                    <button className="btn btn-primary">Add Friend</button>
                </div>
            </form>
            <Link to="/home/friends"> View Friends </Link>
            <Link to="/home"> Hide Friends </Link>
        </div>
        )
    }
}
