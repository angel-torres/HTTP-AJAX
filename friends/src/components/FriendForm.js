import React, { Component } from 'react'
import './Friends.css';

export default class FriendForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form className="form-wrapper">
            <div>
            <input className="form-control form-control-lg" type="text" placeholder="name"/>
            <input className="form-control form-control-lg" type="text" placeholder="age"/>
            <input className="form-control form-control-lg" type="email" placeholder="email"/>
            </div>
            <div>
                <button className="btn btn-success">Add Friend</button>
                <button className="btn btn-info">Update Friend</button>
                <button className="btn btn-danger">Delete Friend</button>
            </div>
        </form>
      </div>
    )
  }
}
