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

  setUpdate = (e, friendId) => {
    e.preventDefault();
    this.props.history.push(`/update/${friendId}`)
    this.setState({
      newFriend: this.state.data.find( friend => friendId === friend.id)
    })
  }

  addFriend = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {...this.state.newFriend,
      id: Date.now(),
  })
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

  updateFriend = (e, friendId) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${friendId}`, this.state.newFriend)
    .then(res => {
      this.setState({
        data: res.data,
        newFriend: {
          id: '',
          name: '',
          age: '',
          email: '',
        }
      });
      this.props.history.push("/home/friends"); 
     })
     .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <FriendForm addFriend={this.addFriend} handleChanges={this.handleChanges} /> */}
        <Route path="/home" render={ props => <FriendForm {...props} data={this.state.data} newFriend={this.state.newFriend} addFriend={this.addFriend} handleChanges={this.handleChanges} />}/>

        <Route path="/home/friends" render={ props => <FriendsDisplay {...props} setUpdate={this.setUpdate}  deleteFriend={this.deleteFriend} data={this.state.data} newFriend={this.state.newFriend}/>}/>

        <Route exact path='/update/:friendId' render={props => <FriendUpdateForm {...props} setUpdate={this.setUpdate} updateFriend={this.updateFriend} data={this.state.data} newFriend={this.state.newFriend} handleChanges={this.handleChanges}/>} />
      </div>
    );
  }
}

export default App;
