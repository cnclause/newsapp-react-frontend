import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import SignIn from './components/SignIn'

class App extends Component {

  state = {
    user: {name: 'user'}
  }

  render(){
    return (
      <div className="App">
        {this.state.user 
          ?<Nav user={this.state.user} />
          :<SignIn user={this.state.user} 
          />
        }
        
      </div>
    );

  }
}

export default App;
