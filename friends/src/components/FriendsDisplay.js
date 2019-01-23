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
                // <div className="card">
                //     <h5 className="card-header">{friend.name}</h5>
                //     <div className="card-body">
                //         <h5 className="card-title">Age: {friend.age}</h5>
                //         <p className="card-text">Email: {friend.email}</p>
                //         <a href="#" className="btn btn-primary">Go somewhere</a>
                //     </div>
                //  </div>
                 
                <div className="list-group-item">
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
        )
    }
}
