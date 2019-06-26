import React, { Component } from 'react';

export default class FriendUpdateForm extends Component {
    render() {
        const friendId = this.props.match.params.friendId;
        const friend = this.props.data.find( friend => `${friendId}` === `${friend.id}`);
        console.log(this.props.newFriend)
        return (
        <div className="form-wrapper">
            <form onSubmit={e => this.props.updateFriend(e, friend.id)} className="form-wrapper">
                <div>
                    <input onChange={this.props.handleChanges} name="name" className="form-control form-control-lg" type="text" placeholder={friend.name} value={this.props.newFriend.name}/>
                    <input onChange={this.props.handleChanges} name="age" className="form-control form-control-lg" type="text" placeholder={friend.age} value={this.props.newFriend.age}/>
                    <input onChange={this.props.handleChanges} name="email" className="form-control form-control-lg" type="email" placeholder={friend.email} value={this.props.newFriend.email}/>
                </div>
                <div>
                <button className="btn btn-primary">Update Friend</button>
                </div>
            </form>
        </div>
        )
    }
}
