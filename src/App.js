import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      users:[],
      isLoaded:false,
      error:""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data => this.setState({
        users:data,
        isLoaded:true}))
      .catch(error=> this.setState({error:error,isLoaded:false}))
  }

  render() {
    let {isLoaded,users} = this.state;
    if(!isLoaded){
      return(
        <h1>Loading...</h1>
      );
    }else{
      return (
        <div>
          <table>
            <thead>
              <th>Code</th>
              <th>Name</th>
              <th>Email</th>
            </thead>
            <tbody>
              {users.map(user=> 
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button>Remove</button></td>
                  <td><button>View</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default App;
