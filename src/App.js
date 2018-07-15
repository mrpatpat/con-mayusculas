import React, { Component } from 'react';
import './App.css';
import AddPlayers from "./add-players/AddPlayers";

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddPlayers/>
      </div>
    );
  }
}

export default App;
