import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';


import './App.css';
import FriendsDisplay from './components/FriendsDisplay';
import Header from './components/Header';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    
    axios.get("http://localhost:5000/friends")
    .then( res => this.setState({data: res.data}))
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" render={ props => <FriendsDisplay {...props}  data={this.state.data}/>}/>
        <FriendForm />
      </div>
    );
  }
}

export default App;
