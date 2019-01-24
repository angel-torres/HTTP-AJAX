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
      newFriend: {
        id: '',
        name: '',
        age: null,
        email: '',
      },
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
    .then( res => this.setState({data: res.data}))
    .catch( err => console.log(err))
  }

  handleChanges = e => {
    e.persist();
    this.setState({
          newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value,
          }
      }
    )
  }

  addFriend = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {...this.state.newFriend})
    .then( res => {
      this.setState({
        data: res.data,
        newFriend: {
          id: '',
          name: '',
          age: '',
          email: '',
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friendId}`,)
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
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <FriendForm addFriend={this.addFriend} handleChanges={this.handleChanges} /> */}
        <Route path="/home" render={ props => <FriendForm {...props} data={this.state.data} newFriend={this.state.newFriend} addFriend={this.addFriend} handleChanges={this.handleChanges} />}/>

        <Route path="/home/friends" render={ props => <FriendsDisplay {...props} deleteFriend={this.deleteFriend} data={this.state.data} newFriend={this.state.newFriend}/>}/>

        <Route exact path='/update/:friendId' render={props => <FriendUpdateForm {...props} updateFriend={this.updateFriend} data={this.state.data}/>} />
      </div>
    );
  }
}

export default App;
