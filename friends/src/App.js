import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';


import './App.css';
import FriendsDisplay from './components/FriendsDisplay';
import Header from './components/Header';
import FriendForm from './components/FriendForm';
import FriendUpdateForm from './components/FriendUpdateForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      age: "",
      email: "",
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
    .then( res => this.setState({data: res.data}))
    .catch( err => console.log(err))
  }

  addFriend = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: (e.target.children[0].children[0].value),
      age: (e.target.children[0].children[1].value),
      email: (e.target.children[0].children[2].value),})
    .then( res => {
      this.setState({
        data: res.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    e.target.children[0].children[0].value = '';
    e.target.children[0].children[1].value = '';
    e.target.children[0].children[2].value = '';

  }

  deleteFriend = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].innerText)
    console.log(e.target.children[1].innerText)
    console.log(e.target.children[2].innerText)

    axios.delete(`http://localhost:5000/friends/${e.target.children[3].innerText}`,)
    .then( res => {
      this.setState({
        data: res.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateFriend = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${e.target.children[2].innerText}`,)
    .then( res => {
      this.setState({
        data: res.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(e.target);
    axios.post('http://localhost:5000/friends', {
      id: (e.target.children[2].innerText),
      name: (e.target.children[0].children[0].value),
      age: (e.target.children[0].children[1].value),
      email: (e.target.children[0].children[2].value),})
    .then( res => {
      this.setState({
        data: res.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    e.target.children[0].children[0].value = '';
    e.target.children[0].children[1].value = '';
    e.target.children[0].children[2].value = '';
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <FriendForm addFriend={this.addFriend} handleChanges={this.handleChanges} /> */}
        <Route path="/home" render={ props => <FriendForm {...props} addFriend={this.addFriend} handleChanges={this.handleChanges} />}/>
        <Route path="/home/friends" render={ props => <FriendsDisplay {...props} deleteFriend={this.deleteFriend} data={this.state.data}/>}/>
        <Route exact path='/update/:friendId' render={props => <FriendUpdateForm {...props} updateFriend={this.updateFriend} data={this.state.data}/>} />
      </div>
    );
  }
}

export default App;
